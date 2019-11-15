const express = require('express');
const uuid = require('uuid/v4');

function createActions ({
    messageStore
}) {
    function recordViewing(traceId, videoId, userId) {
        const stream = `viewing-${videoId}`;
        const viewedEvent = {
            id: uuid(),
            type: 'VideoViewed',
            metadata: {
                traceId,
                userId: userId
            },
            data: {
                videoId
            }
        }
        return messageStore.write(stream, viewedEvent);
    }
    return {
        recordViewing
    }
}

function createHandlers({ actions }) {
    function handleRecordViewing(req, res) {
        videoData = { videoId: req.params.videoId };
        return res.render('record-viewings/templates/record-viewings', videoData);
        /*return actions
                .recordViewing(req.context.traceId, req.params.videoId)
                .then(() => res.redirect('/'));*/
    }
    return {
        handleRecordViewing
    }
}

function createRecordViewings ({

}) {
    const actions = createActions({
        db: null
    });
    const handlers = createHandlers({ actions });

    const router = express.Router();

    router.route('/:videoId').post(handlers.handleRecordViewing);

    return {
        actions,
        handlers,
        router
    }
}

module.exports = createRecordViewings;