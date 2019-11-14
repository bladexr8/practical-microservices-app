// wire up dependencies, making use of environment

// const createDb = require('./db');
// const createHomeApp = require('./app/home');




// set up dependency injection
function createConfig({ env }) {
    return {
        env,
    }
}

module.exports = createConfig;