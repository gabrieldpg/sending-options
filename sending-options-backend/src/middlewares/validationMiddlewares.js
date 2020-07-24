/*

*/


const mongoose = require('mongoose');
const { ErrorHandler } = require('../helpers/error');

function validateObjectId(request, response, next) {
    // if id in params is not a valid object id, throw error
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
        throw new ErrorHandler(404, 'Invalid ID');
    }
    next();
}

module.exports = {
    validateObjectId
}