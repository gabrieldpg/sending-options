/*
  Handles all fields routes, calls crud to make CRUD operations
*/


const router = require('express').Router();
const bodyParser = require('body-parser');
const Field = require('../models/Field');
const { getKeyFromName } = require('../middlewares/transformation');
const { validateObjectId, validateFieldCanBeDeleted } = require('../middlewares/validation');
const { create, get, update, remove, removeAll } = require('../middlewares/databaseCrud');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', getKeyFromName, create(Field));
router.get('/', get(Field));
router.get('/:id', validateObjectId, get(Field));
router.put('/:id', validateObjectId, getKeyFromName, update(Field));
router.delete('/all', removeAll(Field));
router.delete('/:id', validateObjectId, validateFieldCanBeDeleted, remove(Field));

module.exports = router;