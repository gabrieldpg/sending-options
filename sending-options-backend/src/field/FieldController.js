// get instance of express router and body-parser, used
// to parse info from request body into json
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// get field model
const Field = require('./Field');

// CREATES A NEW FIELD
router.post('/', function (req, res) {
    Field.create({
            name: req.body.name,
            key: req.body.key
        }, 
        function (err, field) {
            if (err) return res.status(500).send('There was a problem adding the field to the database.');
            res.status(200).send(field);
        });
});

// RETURNS ALL THE FIELDS IN THE DATABASE
router.get('/', function (req, res) {
    Field.find({}, function (err, field) {
        if (err) return res.status(500).send('There was a problem finding the fields.');
        res.status(200).send(field);
    });
});

// GETS A SINGLE FIELD FROM THE DATABASE
router.get('/:fieldId', function (req, res) {
    Field.findById(req.params.fieldId, function (err, field) {
        if (err) return res.status(500).send('There was a problem finding the field.');
        if (!field) return res.status(404).send('No field found.');
        res.status(200).send(field);
    });
});

// DELETES A FIELD FROM THE DATABASE
router.delete('/:fieldId', function (req, res) {
    Field.findByIdAndRemove(req.params.fieldId, function (err, field) {
        if (err) return res.status(500).send('There was a problem deleting the field.');
        res.status(200).send('Field '+field.name+' was deleted.');
    });
});

// UPDATES A SINGLE FIELD IN THE DATABASE
router.put('/:fieldId', function (req, res) {
    Field.findByIdAndUpdate(req.params.fieldId, req.body, {new: true}, function (err, field) {
        if (err) return res.status(500).send("There was a problem updating the field.");
        res.status(200).send(field);
    });
});

module.exports = router;