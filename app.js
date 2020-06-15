const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

const luxuryRouter = require('./router/LuxuryRouter');
app.use(luxuryRouter);

module.exports = app;