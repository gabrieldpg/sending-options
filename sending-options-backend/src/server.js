/*
  Startpoint of server, starts database and server, and setup routing
*/


const server = require('express')();
const routes = require('./routes');
require('dotenv').config();
const { startDatabase } = require('./helpers/database');
const { handleError } = require('./helpers/error');

try {
    startDatabase(process.env.DB_URL);
} catch (error) {
    console.log(error);
}

server.use('/', routes);

server.use(function(error, request, response, next) {
  handleError(error, response);
});

server.listen(process.env.PORT, process.env.HOST, function() {
  console.log('Express server listening on http://localhost:'+process.env.PORT);
});