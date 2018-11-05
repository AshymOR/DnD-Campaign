// API routes to go here

var db = require("../models");
var locations = require("../locations");

module.exports = function (app) {
    app.get("/api/game/:id", function (req, res) {
        // // 1. Add a join to include all of each Author's Posts
        db.Game.findAll({
            include: [
                db.Player,
                db.locationArray,
                db.currentLocI
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

        db.Player.create(req.body).then(function(newPlayer) {
            res.json(newPlayer);
        });

    });

    // Creates a new game
    app.post("/api/game/", function (req, res) {
        var locationArray = locations;

        db.Game.create({
            code: "asdfadsf",
            locations: locationArray
        }).then(function(newGame) {
            res.json(newGame)
        });
    });

    // Updates a player based on the id in the req body
    app.put("/api/player/", function (req, res) {
        db.Player.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(updatedPlayer) {
                res.json(updatedPlayer);

            });
    });

    // Updates a game based on the id in the req body.
    app.put("/api/game/", function (req, res) {
        db.Game.update(
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