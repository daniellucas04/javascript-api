const express = require('express');

app = express();

app.get('/', (request, response) => {
    response.status(200).send('Hello world!');
});

module.exports = app;