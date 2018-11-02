// API routes to go here

var db = require("../models");

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
    });

    // Creates a new game
    app.post("/api/game/", function (req, res) {
        // // 1. Add a join to include all of each Author's Posts
        // db.Author.findAll({
        //     include: [db.Post]
        // }).then(function (dbAuthor) {
        //     res.json(dbAuthor);
        // });
    });

    // Updates a player based on the id in the req body
    app.put("/api/player/", function (req, res) {
        db.Player.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(updatedGame) {
                res.json(updatedGame);
            });
    });

    // Updates a game based on the id in the req body
    app.put("/api/game/", function (req, res) {
        db.Player.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(updatedGame) {
                res.json(updatedGame);
            });
    });
}