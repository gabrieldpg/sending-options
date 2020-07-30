/*

*/

const { ErrorHandler } = require('../helpers/error');

function create(model) {
    return function(request, response, next) {
        model.create(request.body, function(error, resource) {

            if (error) { 
                next(new ErrorHandler('MongoDbError', 400, 'Could not create item', error));
            } else {
                request.resource = resource;
                next();
            }
        });
    }
}

function get(model) {
    return function(request, response, next) {

        const filters = request.params.id && { _id: request.params.id } || {};
        model.find(filters, function(error, resource) {

            if (error) {
                next(new ErrorHandler('MongoDbError', 400, 'Could not find item/s', error));
            } else {
                if (request.params.id && resource.length === 0) {
                    next(new ErrorHandler('ParamatersError', 400, 'Could not find item from ID'));
                }
                request.resource = resource;
                next();
            }
        });
    }
}

function update(model) {
    return function(request, response, next) {
        model.findByIdAndUpdate(request.params.id, request.body, { new: true }, function(error, resource) {

            if (error) {
                next(new ErrorHandler('MongoDbError', 400, 'Could not find or update item', error));
            } else {
                request.resource = resource;
                next();
            }
        });
    }
}

function remove(model) {
    return function(request, response, next) {
        model.findByIdAndRemove(request.params.id, function(error, resource) {

            if (error) {
                next(new ErrorHandler('MongoDbError', 400, 'Could not find or delete item', error));
            } else {
                request.resource = resource;
                next();
            }
        });
    }
}

function removeAll(model) {
    return function(request, response, next) {
        model.deleteMany({}, function(error, resource) {
            if (error) {
                next(new ErrorHandler('MongoDbError', 500, 'Could not delete items', error));
            } else {
                request.resource = resource;
                next();
            }
        });
    }
}

module.exports = {
    create,
    get,
    update,
    remove,
    removeAll
}