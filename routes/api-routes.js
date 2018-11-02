// API routes to go here

var db = require("../models");
var locations = require("../locations");

module.exports = function (app) {
    app.get("/api/game/:id", function (req, res) {
        // // 1. Add a join to include all of each Author's Posts
        db.Game.findAll({
            include: [
                db.Player,
                {
                    model: db.Location_,
                    include: [db.Enemy]
                }
            ],
            where: {
                id: req.params.id
            }
        }).then(function (response) {
            res.json(response);
        });
    });

    // Creates a new player
    app.post("/api/player/", function (req, res) {
        // // 1. Add a join to include all of each Author's Posts
        // db.Author.findAll({
        //     include: [db.Post]
        // }).then(function (dbAuthor) {
        //     res.json(dbAuthor);
        // });

        db.Player.create(req.body).then(function(response) {
            res.json(response);
        });

    });

    // Creates a new game
    app.post("/api/game/", function (req, res) {
        var locationArray = locations;

        db.Game.create({
            code: "asdfadsf",
            locations: locationArray
        }).then(function(response) {
            res.json(response)
        });
    });

    // Updates a player based on the id in the req body
    app.put("/api/player/", function (req, res) {
        // db.Author.create(req.body).then(function (dbAuthor) {
        //     res.json(dbAuthor);
        // });
    });

    // Updates a game based on the id in the req body
    app.put("/api/game/", function (req, res) {
        // db.Author.create(req.body).then(function (dbAuthor) {
        //     res.json(dbAuthor);
        // });
    });
};