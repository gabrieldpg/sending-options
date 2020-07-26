/*

*/

function getPathFromName(request, response, next) {
    // if name exists in body, get path from it by
    // replacing spaces with - and changing it to lower case
    if (request.body.name) {
        request.body.path = request.body.name.replace(/ /g, '-').toLowerCase();
    }
    next();
}

function getKeyFromName(request, response, next) {
    // if name exists in body, get key from it by removing spaces
    if (request.body.name) {
        request.body.key = request.body.name.replace(/ /g, '');
    }
    next();
}

module.exports = {
    getPathFromName,
    getKeyFromName
}