// wire up dependencies, making use of environment

// const createDb = require('./db');
const createHomeApp = require('./app/home');
const createRecordViewingsApp = require('./app/record-viewings');




// set up dependency injection
function createConfig({ env }) {
    const homeApp =  createHomeApp({ db: null });
    const recordViewingsApp = createRecordViewingsApp({ db: null});
    return {
        env,
        homeApp,
        recordViewingsApp
    }
}

module.exports = createConfig;