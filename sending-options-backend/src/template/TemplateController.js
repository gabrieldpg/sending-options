// get instance of express router and body-parser, used
// to parse info from request body into json
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// get template model
const Template = require('./Template');

// CREATES A NEW TEMPLATE
router.post('/', function (req, res) {
    Template.create({
            name: req.body.name,
            path: req.body.name.replace(/ /g, '-').toLowerCase(),
            attachment: req.body.attachment,
            fields: req.body.fields
        }, 
        function (err, template) {
            if (err) return res.status(500).send('There was a problem adding the template to the database.');
            res.status(200).send(template);
        });
});

// RETURNS ALL THE TEMPLATES IN THE DATABASE
router.get('/', function (req, res) {
    Template.find({}, function (err, templates) {
        if (err) return res.status(500).send('There was a problem finding the templates.');
        res.status(200).send(templates);
    });
});

// GETS A SINGLE TEMPLATE FROM THE DATABASE
router.get('/:templateId', function (req, res) {
    Template.findById(req.params.templateId, function (err, template) {
        if (err) return res.status(500).send('There was a problem finding the template.');
        if (!template) return res.status(404).send('No template found.');
        res.status(200).send(template);
    });
});

// DELETES A TEMPLATE FROM THE DATABASE
router.delete('/:templateId', function (req, res) {
    Template.findByIdAndRemove(req.params.templateId, function (err, template) {
        if (err) return res.status(500).send('There was a problem deleting the template.');
        res.status(200).send('Template '+template.name+' was deleted.');
    });
});

// UPDATES A SINGLE TEMPLATE IN THE DATABASE
router.put('/:templateId', function (req, res) {

    if (req.body.name) {
        req.body.path = req.body.name.replace(/ /g, '-').toLowerCase();
    }

    Template.findByIdAndUpdate(req.params.templateId, req.body, {new: true}, function (err, template) {
        if (err) return res.status(500).send("There was a problem updating the template.");
        res.status(200).send(template);
    });
});

module.exports = router;