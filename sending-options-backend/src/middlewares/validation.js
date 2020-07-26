/*

*/


const mongoose = require('mongoose');
const { ErrorHandler } = require('../helpers/error');
const Template = require('../models/Template');
const Field = require('../models/Field');

function validateObjectId(request, response, next) {
    // if id in params is not a valid object id, throw error
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
        next(new ErrorHandler('ValidationError', 404, 'Invalid mongoose ObjectId'));
    }
    next();
}

function validateFieldCanBeDeleted(request, response, next) {
    Template.find({ fields: request.params.id }, function(error, resource) {
        if (error || !resource || resource && resource.length === 0) {
            next();
        } else {
            next(new ErrorHandler('ValidationError', 403, 'Field exists in template, it cannot be deleted'));
        }
    });
}

function validateFieldsExist(request, response, next) {
    request.body.fields && request.body.fields.forEach(fieldId => {
        if (!mongoose.Types.ObjectId.isValid(fieldId)) {
            next(new ErrorHandler('ValidationError', 403, 'Field id is not a valid mongoose ObjectId'));
        }
    });

    Field.find({ _id: [request.body.fields]}, function(error, resource) {
        if (error || !resource || resource && resource.length === 0) {
            next(new ErrorHandler('ValidationError', 403, 'Field id does not match existing Field', error));
        } else {
            next();
        }
    });
}

module.exports = {
    validateObjectId,
    validateFieldCanBeDeleted,
    validateFieldsExist
}