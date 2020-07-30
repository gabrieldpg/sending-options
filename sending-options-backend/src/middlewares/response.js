/*

*/

function handleResponse(statusCode, message) {
    return function(request, response, next) {
        response.status(statusCode).json({
            successfull: true,
            message,
            length: request.resource.length,
            resource: request.resource
        });
    }
};

module.exports = {
    handleResponse
}