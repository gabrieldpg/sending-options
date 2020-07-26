/*
  Handles all templates routes, calls crud to make CRUD operations
*/


const router = require('express').Router();
const bodyParser = require('body-parser');
const Template = require('../models/Template');
const { getPathFromName } = require('../middlewares/transformation');
const { validateObjectId } = require('../middlewares/validation');
const { create, get, update, remove } = require('../middlewares/databaseCrud');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', getPathFromName, create(Template));
router.get('/', get(Template));
router.get('/:id', validateObjectId, get(Template));
router.put('/:id', validateObjectId, getPathFromName, update(Template));
router.delete('/:id', validateObjectId, remove(Template));

module.exports = router;