all: init start

init: app/.env
	cd app && npm i
	cd 42-portfolio && npm i

app/.env:
	touch app/.env
	echo "PORT=3000\nAPI42_UID=\nAPI42_SECRET=\n"

start: start_backend start_frontend

start_backend:
	cd app && node app.js

start_frontend:
	cd 42-portfolio && npm run dev