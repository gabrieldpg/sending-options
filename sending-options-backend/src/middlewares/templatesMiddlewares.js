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

module.exports = {
    getPathFromName
}