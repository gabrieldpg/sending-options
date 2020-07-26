/*
  Startpoint of server, starts database and server, and setup routing
*/


const server = require('express')();
const routes = require('./routes');
const morgan = require('morgan');
require('dotenv').config();
const { startDatabase } = require('./helpers/database');
const { handleError } = require('./helpers/error');


startDatabase(process.env.DB_URL);

server.use(morgan('combined'));

server.use('/', routes);

server.use(function(error, request, response, next) {
  handleError(error, response);
});

server.listen(process.env.PORT, process.env.HOST, function() {
  console.log('Express server listening on http://'+process.env.HOST+':'+process.env.PORT);
});