// start server
const app = require('./app');
const port = process.env.PORT || 3000;
const server = app.listen(port, function() {
  console.log('Express server listening on http://localhost:'+port);
});