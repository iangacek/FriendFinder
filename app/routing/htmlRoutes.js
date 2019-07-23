var express = require("express");
var path = require("path");

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../data/public/home.html"));
    });
    app.get('/survey', function(res, res) {
        res.sendFile(path.join(__dirname, '../data/public/survey.html'));
    });
}