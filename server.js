'use strict'

var request = require('request');
const chrome = require('selenium-webdriver/chrome');
let webdriver = require('selenium-webdriver');
let { driver, By, Builder, until } = require('selenium-webdriver');
const fs = require('fs');
var https = require("https");
require('dotenv/config');

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

// async function blazeBot() {
//     console.log("Rodando web scraping");

//     let options = new chrome.Options();
//     options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
//     let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);

//     //Don't forget to add these for heroku
//     // options.addArguments("--headless");
//     // options.addArguments("--disable-gpu");
//     // options.addArguments("--no-sandbox");
//     options.addArguments("--window-size=1920,1080")


//     let driver = new webdriver.Builder()
//         .forBrowser('chrome')
//         .setChromeOptions(options)
//         .setChromeService(serviceBuilder)
//         .build();

//     let now = new Date();

//     await driver.get("https://www.sinaisvips.com.br/sinais")

//     await driver.sleep(5000)

//     await driver.findElement(webdriver.By.xpath('//*[@id="comp-l137vjdb"]/div')).click()

//     await driver.sleep(5000)
//     await driver.findElement(webdriver.By.xpath('//*[@id="comp-l0vc8flq"]/button/span')).click()


//     await driver.sleep(10000)

//     await driver.findElement(webdriver.By.xpath('//*[@id="input_comp-l0twycvn"]')).sendKeys(process.env.USER_SINAIS)
//     await driver.findElement(webdriver.By.xpath('//*[@id="input_comp-l0twycw61"]')).sendKeys(process.env.PASS_SINAIS)
//     await driver.findElement(webdriver.By.xpath('//*[@id="comp-l0twycwi"]/button')).click()

//     await driver.sleep(5000)

//     await driver.findElement(webdriver.By.xpath('//*[@id="comp-l2mgh6qg"]/a')).click()

//     let horariosSite = await driver.findElement(webdriver.By.xpath('//*[@id="comp-l10j12x6"]')).getText();

//     await driver.sleep(5000)

//     fs.writeFile(`${now.toLocaleDateString('pt-br', { timezone: 'America/Sao_Paulo' }).replace(/\//g, '_')}.json`,
//         `[${horariosSite
//             .replace(/ $/, '')
//             .replace(/\s+/g, ' , ')
//             .replace(/\s+/g, '"')
//             .replace('', '"')
//             .concat('"')}]`, () => {
//             })

//     await driver.sleep(5000)

//     fs.readFile(`${now.toLocaleDateString('pt-br', { timezone: 'America/Sao_Paulo' }).replace(/\//g, '_').json}`, (e) => {
//         console.log(e);
//         return e;
//     })

//     // request.post(
//     //     'https://webcrepe-mongodb.herokuapp.com/sinais',
//     //     {
//     //         json: {
//     //             sinais: [horariosSite
//     //                 .replace(/ $/, '')
//     //                 .replace(/\s+/g, ' , ')
//     //                 .replace(/\s+/g, '"')
//     //                 .replace('', '"')
//     //                 .concat('"')
//     //                 .replace('/', '')]
//     //         }
//     //     },
//     //     function (error, response, body) {
//     //         if (!error && response.statusCode == 200) {
//     //             console.log(body);
//     //         }
//     //     }
//     // );

//     driver.quit()
// }

// blazeBot()

setInterval(function () {
    https.get("https://webcrepe-mongodb.herokuapp.com");
}, 20 * 60 * 1000); // every 20 minutes
