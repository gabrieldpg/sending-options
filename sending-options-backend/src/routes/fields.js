/*
  Handles all fields routes, calls crud to make CRUD operations
*/


const router = require('express').Router();
const bodyParser = require('body-parser');
const crud = require('../helpers/crud');
const Field = require('../models/Field');
const { validateObjectId } = require('../middlewares/validationMiddlewares');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// CREATES A NEW FIELD
router.post('/', function (request, response, next) {
    crud.create(request, response, next, Field);
});

// RETURNS ALL THE FIELDS IN THE DATABASE
router.get('/', function (request, response, next) {
    crud.getAll(request, response, next, Field);
});

// RETURNS A SINGLE FIELD FROM THE DATABASE
router.get('/:id', validateObjectId, function (request, response, next) {
    crud.getSingle(request, response, next, Field);
});

// DELETES A FIELD FROM THE DATABASE
router.delete('/:id', validateObjectId, function (request, response, next) {
    crud.remove(request, response, next, Field);
});

// UPDATES A SINGLE FIELD IN THE DATABASE
router.put('/:id', validateObjectId, function (request, response, next) {
    crud.update(request, response, next, Field);
});

module.exports = router;