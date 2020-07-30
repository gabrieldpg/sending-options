/*
  Handles all fields routes, calls crud to make CRUD operations
*/


const router = require('express').Router();
const bodyParser = require('body-parser');
const Field = require('../models/Field');
const { getKeyFromName } = require('../middlewares/transformation');
const { validateObjectId, validateFieldCanBeDeleted } = require('../middlewares/validation');
const { create, get, update, remove, removeAll } = require('../middlewares/databaseCrud');
const { handleResponse } = require('../middlewares/response');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', getKeyFromName, create(Field), handleResponse(201, 'Field created'));
router.get('/', get(Field), handleResponse(200, 'Fields retrieved'));
router.get('/:id', validateObjectId, get(Field), handleResponse(200, 'Field retrieved'));
router.put('/:id', validateObjectId, getKeyFromName, update(Field), handleResponse(201, 'Field updated'));
router.delete('/all', removeAll(Field), handleResponse(200, 'Fields deleted'));
router.delete('/:id', validateObjectId, validateFieldCanBeDeleted, remove(Field), handleResponse(200, 'Field deleted'));

module.exports = router;