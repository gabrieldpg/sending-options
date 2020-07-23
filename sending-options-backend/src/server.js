/*
  Startpoint of server, starts database and server, and setup routing
*/


const server = require('express')();
const routes = require('./routes');
const { startDatabase } = require('./helpers/database');
const { handleError } = require('./helpers/error');
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const databaseUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/sending-options';

try {
    startDatabase(databaseUrl);
} catch (error) {
    console.log(error);
}

server.use('/', routes);

server.use(function(error, request, response, next) {
  handleError(error, response);
});

server.listen(port, hostname, function() {
  console.log('Express server listening on http://localhost:'+port);
});