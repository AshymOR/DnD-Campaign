var db = require("./models");

db.Game.create({code: "asdf"});

db.Player.create({
    name: "Alex",
    gender: "Male",
    race: "Cracker",
    class: "Bard",
    hp: 25,
    atk: 3,
    spriteURL: "#",
    GameId: 1
});

db.Player.create({
    name: "Max",
    gender: "Male",
    race: "Dragonborn",
    class: "Wizard",
    hp: 50,
    atk: 10,
    spriteURL: "#",
    GameId: 1
});

db.Location_.create({
    BackgroundURL: "#",
    GameId: 1
});

db.Enemy.create({
    name: "Cruz",
    hp: 89,
    atk: 2,
    spriteURL: "#",
    LocationId: 1
})