const express = require("express");
const path = require("path");
const items = require('./data.json');
const app = express();

const pagination = items.reduce((acc, item, index) => (index + 1) % 3 === 0 ? [...acc, acc.length + 1] : acc, []);
const getItems = (items, pageNumber) => items.slice(((pageNumber * 3) - 3), (pageNumber * 3));

app.set('view engine', 'html');
app.set('views', './');
app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => res.render(__dirname, 'build', 'index.html', { items: getItems(items, 1), pagination }));

app.get('/list', (req, res) => res.send({ items: getItems(items, req.query.page) }));

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));


