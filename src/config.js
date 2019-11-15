// wire up dependencies, making use of environment

// const createDb = require('./db');
const createHomeApp = require('./app/home');
const createRecordViewingsApp = require('./app/record-viewings');
const createPostgresClient = require('./postgres-client');
const createKnexClient = require('./knex-client.js');
const createMessageStore = require('./message-store');



// set up dependency injection
function createConfig({ env }) {
    const knexClient = createKnexClient({
        connectionString: env.databaseUrl
    });
    const postgresClient = createPostgresClient({
        connectionString: env.messageStoreConnectionString
    });
    const homeApp =  createHomeApp({ db: null });
    const recordViewingsApp = createRecordViewingsApp({ db: null});
    const messageStore = createMessageStore({ db: postgresClient });
    return {
        env,
        homeApp,
        recordViewingsApp,
        db: knexClient,
        messageStore
    }
}

module.exports = createConfig;