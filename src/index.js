const path = require("path");

// express middleware
function tehcSiteEngine(pageFolder) {
    return function(req, res, next) {
        let page = req.query.page;
        res.sendFile(`${page}.html`, { root: pageFolder });
    }
}

exports = module.exports = tehcSiteEngine;