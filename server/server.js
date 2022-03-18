//templatization
const Handlebars = require('handlebars');

//framework for handlers
const express = require('express');

//path resolver
const path = require("path");

//file sistem manager
const fs = require("fs");

//data
const data = require('./data.json');

const app = express()
const port = 3000

//for using static
app.use(express.static(path.resolve("../Portfolio")));

//handler
app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
    //
    // fs.readFile('./index.hbs', 'utf8' , (err, sourceTemplate) => {
    //     const template = Handlebars.compile(sourceTemplate);
    //     res.send(template(data));
    // });
})


//server port listner
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})