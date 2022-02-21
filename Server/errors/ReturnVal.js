const fs = require('fs');

/***
 * Return the status of some request.
 * 
 * @param {Boolean} success true if return value, false if return error.
 * @param {Number} errorCode the error code.
 * @param {String} errorString error message.
 * @param {String} errorString_he Hebrew error message.
 * @param {any} data the return value.
 * 
 * @return {Object} The object with all the details of the error/return value.
 */
 function ReturnVal(success, data, errorCode, errorNote) {
     const errors = JSON.parse(fs.readFileSync('./errors/errors.json'))
     const error = errors.find(error => error.errorCode === errorCode)
     if (!success) console.trace(`[Error Code: ${errorCode}]: ${error.errorString}: ${errorNote}`)

    return {
        success,
        ...error,
        errorNote,
        data,
        stack: () => console.trace(`[Error Code: ${errorCode}]: ${error.errorString}`)
    }
}
module.exports = ReturnVal