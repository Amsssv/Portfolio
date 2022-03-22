//templatization
const Handlebars = require('handlebars');
var hbs = require('hbs')
//framework for handlers
const express = require('express');

//path resolver
const path = require("path");

//file sistem manager
const fs = require("fs");

const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.set('views', "../Portfolio")

const pages = [];

const feature = require('./json/data.json');
const items = Object.keys(feature['items']).length / 3;
for (let page = 1; page <= items; page++) {
	pages.push(page);
};

app.get('/', (req, res) => {
	res.render('index', { feature: feature, pages});

});

//for using static
app.use(express.static(path.resolve("../Portfolio")));

//server port listner
app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`)
});


 