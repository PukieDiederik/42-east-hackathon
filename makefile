all: init start

init: app/.env
	cd app && npm i
	# TODO: setup frontend

app/.env:
	touch app/.env
	echo "PORT=3000\nAPI42_UID=\nAPI42_SECRET=\n"

start: start_backend start_frontend

start_backend:
	cd app && node app.js

start_frontend:
	# TODO: