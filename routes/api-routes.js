// API routes to go here

var db = require("../models");
var locations = require("../public/js/locations");

module.exports = function (app) {
    app.get("/api/game/:id", function (req, res) {
        var id = req.params.id.split();
        // // 1. Add a join to include all of each Author's Posts
        db.Game.findAll({
            include: [
                db.Player
            ],
            where: {
                id: id[0]
            }
        }).then(function (response) {
            res.json(response);
        });
    });

    app.get("/api/sprites/:spriteURL", function(req, res) {
        res.send(path.join(__dirname, req.params.spriteURL));
    })

    // Creates a new player
    app.post("/api/player/", function (req, res) {

        db.Player.create({
            name: req.body.name,
            gender: req.body.gender,
            race: req.body.race,
            class: req.body.class,
            hp: req.body.hp,
            atk: req.body.atk,
            spriteURL: req.body.spriteURL,
            GameId: req.body.GameId
        }).then(function(newPlayer) {
            res.json(newPlayer);
        });
    });

    // Creates a new game
    app.post("/api/game/", function (req, res) {
        var locationArray = locations;
        // generate random four-char alphanumeric code
        var codeChars = ['a', '3', '4', '5', '9', 'e', '1', 'w', 'x', 'y', '7'];
        var char1 = codeChars[Math.floor(Math.random()*11)];
        var char2 = codeChars[Math.floor(Math.random()*11)];
        var char3 = codeChars[Math.floor(Math.random()*11)];
        var char4 = codeChars[Math.floor(Math.random()*11)];
        var generatedCode = char1+char2+char3+char4;

        db.Game.create({
            code: generatedCode,
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