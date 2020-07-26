/*

*/


class ErrorHandler extends Error {
    constructor(status, statusCode, message, error = null) {
        super();
        this.status = status;
        this.statusCode = statusCode;
        this.message = message;
        this.errorDetails = error;
    }
}

function handleError(error, response) {
    console.error(error);
    const { status, statusCode, message, errorDetails } = error;
    response.status(statusCode).json({
        status,
        statusCode,
        message,
        errorDetails
    });
};

module.exports = {
    ErrorHandler, 
    handleError
}