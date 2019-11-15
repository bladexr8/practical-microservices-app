// initialiser for message store

const createWrite = require('./write');

function createMessageStore ({ db }) {
    const write = createWrite({ db });

    return {
        write: write,
    }
}

module.exports = exports = createMessageStore;