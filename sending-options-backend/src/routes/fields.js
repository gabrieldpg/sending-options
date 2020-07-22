/*
  Handles all fields routes, calls crud to make CRUD operations
*/


const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const crud = require('../crud');
const Field = require('../models/Field');

// CREATES A NEW FIELD
router.post('/', function (request, response, next) {
    crud.create(request, response, next, Field);
});

// RETURNS ALL THE FIELDS IN THE DATABASE
router.get('/', function (request, response, next) {
    crud.getAll(request, response, next, Field);
});

// RETURNS A SINGLE FIELD FROM THE DATABASE
router.get('/:id', function (request, response, next) {
    crud.getSingle(request, response, next, Field);
});

// DELETES A FIELD FROM THE DATABASE
router.delete('/:id', function (request, response, next) {
    crud.remove(request, response, next, Field);
});

// UPDATES A SINGLE FIELD IN THE DATABASE
router.put('/:id', function (request, response, next) {
    crud.update(request, response, next, Field);
});

module.exports = router;