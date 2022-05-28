'use strict'

const chrome = require('selenium-webdriver/chrome');
let webdriver = require('selenium-webdriver');
var https = require("https");

var request = require('request');

// Import DB Connection
require("./config/db");

// require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();

// define port to run express app
const port = process.env.PORT || 3000;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add endpoint
app.get('/', (req, res) => {
    res.send("Webscraping Blaze Double :D");
});

// Listen to server
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// Import API route
var routes = require('./routes/Routes'); //importing route
routes(app);

console.log("Rodando web scraping");


setInterval(function () {
    https.get("https://webcrepe-mongodb.herokuapp.com");
}, 20 * 60 * 1000); // every 20 minutes
