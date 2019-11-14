// set up Express Context Properties for request/response pipeline
const uuid = require('uuid/v4');

function primeRequestContext(req, res, next) {
    // set up request context property
    req.context = {
        traceId: uuid()         // trace id for logging
    }
    next();
}

module.exports = primeRequestContext;

