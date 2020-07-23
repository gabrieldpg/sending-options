/*
  Startpoint of server, starts database and server, and setup routing
*/


const server = require('express')();
const routes = require('./routes');
const port = process.env.PORT || 3000;
const { startDatabase } = require('./helpers/database');
const { handleError } = require('./helpers/error');

try {
    startDatabase('mongodb://127.0.0.1:27017/sending-options');
} catch (error) {
    console.log(error);
}

server.use('/', routes);

server.use(function(error, request, response, next) {
  handleError(error, response);
});

server.listen(port, function() {
  console.log('Express server listening on http://localhost:'+port);
});