const express = require("express");
const path = require("path");
const items = require('./data.json');
const app = express();

// const pagination =
const getItems = (items, pageNumber) => items.slice(((pageNumber * 3) - 3), (pageNumber * 3));

app.set('view engine', 'html');
app.set('views', './');
app.use(express.static("dist"));

app.get('/list', (req, res) =>
    res.send({items: getItems(items, req.query.page), total: items.length}));

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));


