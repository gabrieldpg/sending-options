/*
  Startpoint of app, starts database and server, and setup routing
*/


const express = require('express');
const app = express();
const database = require('./database');
const routes = require('./routes');
const port = process.env.PORT || 3000;

try {
    database.startDatabase('mongodb://127.0.0.1:27017/sending-options');
} catch (error) {
    console.log(error);
}


app.use('/fields', routes.fields);
app.use('/templates', routes.templates);

app.use('/', function (request, response) {
    response.json({ message: 'Server is connected' });
});

app.listen(port, function() {
  console.log('Express server listening on http://localhost:'+port);
});