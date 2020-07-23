/*
  Handles all requests from routing, communicates with
  MongoDB, returns response and handles errors
*/


const mongoose = require('mongoose');
const { ErrorHandler } = require('./error');

// get all items from model
async function getAll(request, response, next, model) {
    try {
        const resource = await model.find().exec();

        // if no resource found, return error
        if (!resource) {
            throw new ErrorHandler(400, 'Invalid request');
        // if resource found, but empty, return status accordingly
        } else if (resource.length === 0) {
            return response.sendStatus(204);
        }
        // otherwise, return resource
        return response.status(200).json(resource);

    } catch(error) {
        next(error);
    }
}

// get single item from model
async function getSingle(request, response, next, model) {
    try {

        // if id in params is not a valid object id, throw error
        if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
            throw new ErrorHandler(404, 'Invalid ID');
        }

        const resource = await model.findById(request.params.id).exec();

        // if no resource found, throw error
        if (!resource) {
            throw new ErrorHandler(404, 'No resouce for specified ID');
        }
        // otherwise, return resource
        return response.status(200).json(resource);

    } catch(error) {
        return next(error);
    }
}

// create new item for model
function create(request, response, next, model) {
    try {
        const resource = model.create(request.body);

        // if no resource created, throw error
        if (Object.keys(resource).length === 0) {
            throw new ErrorHandler(400, 'Could not create item');
        }
        // otherwise, return status and newly created resource
        return response.status(201).json({ 
            message: 'Item created successfully', 
            resource
        });

    } catch(error) {
        return next(error);
    }
}

// update item from model
async function update(request, response, next, model) {
    try {

        // if id in params is not a valid object id, throw error
        if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
            throw new ErrorHandler(404, 'Invalid ID');
        }

        const resource = await model.findByIdAndUpdate(request.params.id, request.body, { new: true }).exec();

        // if no resource found, throw error
        if (!resource) {
            throw new ErrorHandler(400, 'Could not find or update item');
        }
        // otherwise, save resource and return status and updated resource
        resource.save();
        return response.status(201).json({ 
            message: 'Item updated successfully', 
            resource
        });

    } catch(error) {
        return next(error);
    }
}

// remove item from model
async function remove(request, response, next, model) {
    try {

        // if id in params is not a valid object id, throw error
        if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
            throw new ErrorHandler(404, 'Invalid ID');
        }

        const resource = await model.findByIdAndRemove(request.params.id).exec();

        // if no resource found, throw error
        if (!resource) {
            throw new ErrorHandler(400, 'Could not find or delete item');
        }
        // otherwise, return status and deleted resource
        return response.status(200).json({ 
            message: 'Item deleted successfully', 
            resource
        });

    } catch(error) {
        return next(error);
    }
}

module.exports = {
    getAll, 
    getSingle, 
    create, 
    update, 
    remove
}