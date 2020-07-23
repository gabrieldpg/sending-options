/*
  Get instance of all possible routes and export them
*/


const router = require('express').Router();
const { ErrorHandler } = require('../helpers/error');
const fields = require('./fields');
const templates = require('./templates');

router.use('/fields', fields);
router.use('/templates', templates);

router.all('*', function (request, response) {
  throw new ErrorHandler(400, 'Invalid route');
});

router.use('/', function (request, response) {
    response.status(200).json({ message: 'Server is connected' });
});

module.exports = router;