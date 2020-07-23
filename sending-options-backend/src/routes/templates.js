/*
  Handles all templates routes, calls crud to make CRUD operations
*/


const router = require('express').Router();
const bodyParser = require('body-parser');
const crud = require('../helpers/crud');
const Template = require('../models/Template');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// CREATES A NEW TEMPLATE
router.post('/', function (request, response, next) {

    // if name exists in body, get path from it by
    // replacing spaces with - and changing it to lower case
    if (request.body.name) {
        request.body.path = request.body.name.replace(/ /g, '-').toLowerCase();
    }

    crud.create(request, response, next, Template);
});

// RETURNS ALL THE TEMPLATES IN THE DATABASE
router.get('/', function (request, response, next) {
    crud.getAll(request, response, next, Template);
});

// RETURNS A SINGLE TEMPLATE FROM THE DATABASE
router.get('/:id', function (request, response, next) {
    crud.getSingle(request, response, next, Template);
});

// DELETES A TEMPLATE FROM THE DATABASE
router.delete('/:id', function (request, response, next) {
    crud.remove(request, response, next, Template);
});

// UPDATES A SINGLE TEMPLATE IN THE DATABASE
router.put('/:id', function (request, response, next) {

    // if name exists in body, get path from it by
    // replacing spaces with - and changing it to lower case
    if (request.body.name) {
        request.body.path = request.body.name.replace(/ /g, '-').toLowerCase();
    }

    crud.update(request, response, next, Template);
});

module.exports = router;