/*

*/

const { ErrorHandler } = require('../helpers/error');

function create(model) {
    return function(request, response, next) {
        model.create(request.body, function(error, resource) {

            if (error) { 
                next(new ErrorHandler('MongoDbError', 400, 'Could not create item', error));
            } else {
                return response.status(201).json({ 
                    message: 'Item created successfully', 
                    resource
                });
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
            } else if (resource.length === 0) {
                next(new ErrorHandler('EmptyResponseError', 404, 'No items to retrieve / Empty response'));
            } else {
                return response.status(200).json(resource);
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
                return response.status(201).json({ 
                    message: 'Item updated successfully', 
                    resource
                });
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
                return response.status(200).json({ 
                    message: 'Item deleted successfully', 
                    resource
                });
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
                return response.status(200).json({
                    message: 'Items deleted successfully',
                    resource
                });
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