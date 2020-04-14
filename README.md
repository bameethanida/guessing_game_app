# Guessing Game App
A guessing game web application using NodeJS

# Getting started
To get the Node server running locally:
- Clone this repository
- `npm install` to install all required dependencies
- Install [Docker](https://www.docker.com/get-started) and run it
- Install [MongoDB Community Edition](https://docs.mongodb.com/manual/installation/#tutorials)
- `npm start` to start the local server

# Code Overview
## Dependencies
- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [body-parser](https://github.com/expressjs/body-parser) - Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property.
- [ejs](https://github.com/tj/ejs) - It is a simple templating language that generate HTML markup with plain JavaScript
- [nodemon](https://github.com/remy/nodemon) - Tool helps developing node.js based applications by automatically restarting the node application when file changes in the directory are detected.
## API
- URL - `localhost:8080`
- `GET : URL/` - Render main page
- `POST : URL/game` - Require `name`, render game page
- `GET : URL/score` - Get data, sort fail and time 
- `POST : URL/score` - Require `name`, `fail`, `time` and sent data to database

# Author
Thanida Jongarnon 6110545538
