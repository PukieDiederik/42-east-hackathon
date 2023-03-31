require('dotenv').config()

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('hello world!');
});

app.listen(process.env.PORT, () => 
{
	console.log(`Started server and listening on port ${process.env.PORT}`);
});

