// bootstrap the application

const expressApp = require('./app/express');
const createConfig = require('./config');
// note env refers to env.js file...
const env = require('./env');

// set up application environment and configuration
const config = createConfig({ env });

// initialise Express App
const app = expressApp.createExpressApp({ config, env});

function start() {
    app.listen(env.port, signalAppStart);
}

function signalAppStart() {
    console.log(`${env.appName} Started...`);
    console.table([['Port', env.port], ['Environment', env.env]]);
}

module.exports = {
    app,
    config,
    start
}