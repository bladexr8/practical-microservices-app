// basic express server

const express = require('express');
const { join } = require('path');

const mountMiddleware = require('./mount-middleware');
const mountRoutes = require('./mount-routes');

// uses dependency injection for config, env
function createExpressApp({ config, env }) {
    const app = express();
    // configure PUG view engine
    app.set('views', join(__dirname, '..'));
    app.set('view engine', 'pug');

    // configure Express middleware and routes
    mountMiddleware(app, env);
    mountRoutes(app, config);

    return app;
}

module.exports = {
    createExpressApp,
}