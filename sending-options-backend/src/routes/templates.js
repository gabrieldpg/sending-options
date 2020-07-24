/*
  Handles all templates routes, calls crud to make CRUD operations
*/


const router = require('express').Router();
const bodyParser = require('body-parser');
const crud = require('../helpers/crud');
const middlewares = require('../middlewares/templatesMiddlewares');
const Template = require('../models/Template');
const { validateObjectId } = require('../middlewares/validationMiddlewares');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// CREATES A NEW TEMPLATE
router.post('/', middlewares.getPathFromName, function (request, response, next) {
    crud.create(request, response, next, Template);
});

// RETURNS ALL THE TEMPLATES IN THE DATABASE
router.get('/', function (request, response, next) {
    crud.getAll(request, response, next, Template);
});

// RETURNS A SINGLE TEMPLATE FROM THE DATABASE
router.get('/:id', validateObjectId, function (request, response, next) {
    crud.getSingle(request, response, next, Template);
});

// DELETES A TEMPLATE FROM THE DATABASE
router.delete('/:id', validateObjectId, function (request, response, next) {
    crud.remove(request, response, next, Template);
});

// UPDATES A SINGLE TEMPLATE IN THE DATABASE
router.put('/:id', validateObjectId, middlewares.getPathFromName, function (request, response, next) {
    crud.update(request, response, next, Template);
});

module.exports = router;