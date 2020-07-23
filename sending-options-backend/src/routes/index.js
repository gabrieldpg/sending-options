/*
  Get instance of all possible routes and export them
*/

const fields = require('./fields');
const templates = require('./templates');
const router = require('express').Router();

router.use('/fields', fields);
router.use('/templates', templates);

router.use('/', function (request, response) {
    response.json({ message: 'Server is connected' });
});

module.exports = router;