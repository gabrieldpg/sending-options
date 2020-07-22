/*
  Handles all requests from routing, communicates with
  MongoDB, returns response and handles errors
*/


// get all items from model
exports.getAll = async function(request, response, next, model) {
    try {
        const resource = await model.find().exec();
        if (!resource) {
            // return next(errors.RESOURCE_NOT_FOUND());
        }
        return response.json(resource);

    } catch(error) {
        next(error);
    }
}

// get single item from model
exports.getSingle = async function(request, response, next, model) {
    try {
        const resource = await model.findById(request.params.id).exec();
        if (!resource) {
            //return next(errors.RESOURCE_NOT_FOUND())
        }
        return response.json(resource);

    } catch(error) {
        return next(error);
    }
}

// create new item for model
exports.create = async function(request, response, next, model) {
    try {
        const resource = await model.create(request.body);
        if (!resource) {
            //return next(errors.RESOURCE_NOT_CREATED());
        }
        return response.json({ message: resource._id +' created successfully' });

    } catch(error) {
        return next(error);
    }
}

// update item from model
exports.update = async function(request, response, next, model) {
    try {
        const resource = await model.findByIdAndUpdate(request.params.id, request.body, { new: true }).exec();
        if (!resource) {
            // return next(errors.RESOURCE_NOT_FOUND());
        }
        resource.save();
        return response.json({ message: resource._id +' updated successfully' });

    } catch(error) {
        return next(error);
    }
}

// remove item from model
exports.remove = async function(request, response, next, model) {
    try {
        const resource = await model.findByIdAndRemove(request.params.id).exec();
        if (!resource) {
            // return next(errors.RESOURCE_NOT_FOUND());
        }
        return response.json({ message: resource._id +' deleted successfully' });

    } catch(error) {
        return next(error);
    }
}