/*
  Handles all templates routes, calls crud to make CRUD operations
*/


const router = require('express').Router();
const bodyParser = require('body-parser');
const Template = require('../models/Template');
const { getPathFromName } = require('../middlewares/transformation');
const { validateObjectId, validateFieldsExist } = require('../middlewares/validation');
const { create, get, update, remove, removeAll } = require('../middlewares/databaseCrud');
const { handleResponse } = require('../middlewares/response');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', validateFieldsExist, getPathFromName, create(Template), handleResponse(201, 'Template created'));
router.get('/', get(Template), handleResponse(200, 'Templates retrieved'));
router.get('/:id', validateObjectId, get(Template), handleResponse(200, 'Template retrieved'));
router.put('/:id', validateObjectId, validateFieldsExist, getPathFromName, update(Template), handleResponse(201, 'Template updated'));
router.delete('/all', removeAll(Template), handleResponse(200, 'Templates deleted'));
router.delete('/:id', validateObjectId, remove(Template), handleResponse(200, 'Template deleted'));

module.exports = router;