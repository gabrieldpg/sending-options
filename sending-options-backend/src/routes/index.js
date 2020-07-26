/*
  Get instance of all possible routes and export them
*/


const router = require('express').Router();
const fields = require('./fields');
const { ErrorHandler } = require('../helpers/error');
const templates = require('./templates');

router.use('/fields', fields);
router.use('/templates', templates);

router.get('/', function (request, response) {
  response.status(200).json({ message: 'Server is connected' });
});

router.use('/*', function (request, response) {
  throw new ErrorHandler('RoutingError', 400, 'Invalid route');
});

module.exports = router;