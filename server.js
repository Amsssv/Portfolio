const express = require("express");
const path = require("path");
const items = require('./data.json');
const app = express();

const pagination = items.reduce((acc, item, index) => (index + 1) % 3 === 0 ? [...acc, acc.length + 1] : acc, []);
const getItems = (items, pageNumber) => items.slice(((pageNumber * 3) - 3), (pageNumber * 3));

app.set('view engine', 'hbs');
app.set('views', './');

app.get('/', (req, res) => res.render('index', {items: getItems(items, 1), pagination}));

app.get('/list', (req, res) => res.send({items: getItems(items, req.query.page)}));

app.use(express.static(path.resolve("./static")));

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));
