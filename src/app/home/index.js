const camelCaseKeys = require('camelcase-keys');
const express = require('express');

function createHandlers({ queries }) {
    function home (req, res, next) {
        const viewData = queries.loadHomePage();
        try {
            return res.render('home/templates/home', viewData);
        } catch (err) {
            next();
        }
        
        /*return queries
                .loadHomePage()
                .then(viewData =>
                    res.render('home/templates/home', viewData)
                )
                .catch(next)*/
    }
    return {
        home
    }
}

function createQueries({ db }) {
    function loadHomePage() {
        return ({ videosWatched: 100 });
    }
    return {
        loadHomePage
    }
}

function createHome({ db }) {
    const queries = createQueries({ db });
    const handlers = createHandlers({ queries });

    const router = express.Router();

    router.route('/').get(handlers.home);

    return { handlers, queries, router }
}

module.exports = createHome;
