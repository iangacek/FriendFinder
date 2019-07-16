var path = require('path');

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
        console.log("test");
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};