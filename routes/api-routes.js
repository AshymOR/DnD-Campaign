// API routes to go here

var db = require("../models");

module.exports = function (app) {
    app.get("/api/game/:id", function (req, res) {
        // // 1. Add a join to include all of each Author's Posts
        db.Game.findAll({
            include: [
                db.Player,
                {
                    model: db.Location,
                    include: [db.Enemy]
                }
            ]
        }).then(function (response) {
            res.json(response);
        });
    });

    app.get("/api/player/:id", function (req, res) {
        // // 1. Add a join to include all of each Author's Posts
        // db.Author.findAll({
        //     include: [db.Post]
        // }).then(function (dbAuthor) {
        //     res.json(dbAuthor);
        // });
    });

    app.get("/api/location/:id", function (req, res) {
        // // 1. Add a join to include all of each Author's Posts
        // db.Author.findAll({
        //     include: [db.Post]
        // }).then(function (dbAuthor) {
        //     res.json(dbAuthor);
        // });
    });

    app.post("/api/player/:id", function (req, res) {
        // db.Author.create(req.body).then(function (dbAuthor) {
        //     res.json(dbAuthor);
        // });
    });

    app.post("/api/enemy/:id", function (req, res) {
        // db.Author.create(req.body).then(function (dbAuthor) {
        //     res.json(dbAuthor);
        // });
    });

    app.post("/api/game/:id", function (req, res) {
        // db.Author.create(req.body).then(function (dbAuthor) {
        //     res.json(dbAuthor);
        // });
    });
};