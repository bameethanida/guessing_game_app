'use strict';
const express = require('express');
const path = require('path');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require('body-parser');
const router = require('./router')

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'pantip';
// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/views/game'))
app.use(express.static(__dirname + '/views/score'))

app.use('/', router);


app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});