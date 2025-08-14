export const errorHandler = (errorCode, message) => {
    const error = new Error();
    error.errorCode = errorCode;
    error.message = message;
    return error;
}