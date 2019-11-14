function attachLocals (req, res, next) {
    // attach context to response
    res.locals.context = req.context;
    next();
}

module.exports = attachLocals;