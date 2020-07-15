// get instance of express and database
const express = require('express');
const app = express();
const db = require('./db');

// get template controller and direct templates path to it
const TemplateController = require('./template/TemplateController');
app.use('/templates', TemplateController);

// get field controller and direct fields path to it
const FieldController = require('./field/FieldController');
app.use('/fields', FieldController);

// advise user that server is connected and ready to receive requests
app.use('/', function (req, res) {
    res.status(200).send('Server is connected');
});

module.exports = app;