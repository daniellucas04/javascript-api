const express = require('express');
const router = require('./router');
app = express();

app.use(express.json());
app.use(router);

module.exports = app;