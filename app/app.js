require('dotenv').config()

const express = require("express");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const app = express();

var access_token = 0;

app.get('/', (req, res) => {
	res.send('hello world!');
});

app.get('/user/:user', (req, res) => {

	let data = {}

	console.log("Getting data for: " + req.params.user);


	// Get basic info about user
	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	xhr.open("GET", "https://api.intra.42.fr/v2/users/" + req.params.user, false);
	xhr.setRequestHeader("Authorization", `Bearer ${access_token}`)
	xhr.send();

	res_json = JSON.parse(xhr.responseText);

	// update data with new info
	data.user_id = res_json.id;
	data.name = res_json.displayname;
	data.image = res_json.image.link;
	data.campus = res_json.campus[0].name;
	data.cursus = res_json.cursus_users[1].cursus.name;
	data.grade = res_json.cursus_users[1].grade;
	data.kind = res_json.kind;

	// Find project ids
	let project_ids = []
	for (project of res_json.projects_users)
	{
		//console.log(project)
		// Tried to get validated instead of status
		/* if (project.validated === true)
			project_ids.push(project.project.id); */
		if (project.status === "finished")
			project_ids.push(project.project.id);
	}

	console.log("Getting project data for: " + req.params.user);
	// Gets the project data
	const xhr_p = new XMLHttpRequest();
	xhr_p.withCredentials = true;
	xhr_p.open("GET", `https://api.intra.42.fr/v2/projects?filter[id]=${project_ids.join()}&page[size]=100`, false);
	xhr_p.setRequestHeader("Authorization", `Bearer ${access_token}`)
	xhr_p.send();

	// Add projects to data
	data.projects = []
	project_json = JSON.parse(xhr_p.responseText);
	for (project of project_json)
	{
		let is_piscine = false;
		// Check if we should add this project to the list
		if (project.exam == true)
		continue;
		for(cursus of project.cursus)
		{
			if (cursus.kind == 'piscine')
			{
				is_piscine = true;
				break;
			}
		}
		
		// Add all the keywords from that project to the json (could have)
		let keywordsArr = [];
		project.project_sessions[0].objectives.forEach(key => {
			keywordsArr.push(key);
		});
		
		// Add project to list if it isn't a piscine
		if (!is_piscine)
		{
			let difficulty = 0;
			difficulty = project.project_sessions[0].difficulty;
			/* if(difficulty <= 0) {
				difficulty = 100;
			} */
			data.projects.push({
				"name": project.name,
				"description": project.project_sessions[0].description,
				"keywords": keywordsArr,
				"difficulty": difficulty,
		});}
	}
	
	//return data
	res.json(data);
});

app.listen(process.env.PORT, () => 
{
	console.log(`Started server and listening on port ${process.env.PORT}`);
	
	// Get the access token
	const req = new XMLHttpRequest();
	req.withCredentials = true;
	req.open("POST", "https://api.intra.42.fr/oauth/token", false);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send(`grant_type=client_credentials&client_id=${process.env.API42_UID}&client_secret=${process.env.API42_SECRET}`);
	
	access_token = JSON.parse(req.responseText).access_token;
	console.log("Obtained access token\n" + access_token);
});

