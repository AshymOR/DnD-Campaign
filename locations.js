function Location(name, enemy, backgroundURL) {
    this.name = name;
    this.enemy = enemy;
    this.backgroundURL = backgroundURL;
}

function Enemy(name, hp, atk, spriteURL) {
    this.name = name;
    this.enemy = enemy;
    this.backgroundURL = backgroundURL;
}

var troll = new Enemy("Troll", 100, 5, "#");

var firstBranch = new Location("Fork in the Road", null, "#");
var dungeon = new Location("Dungeon", troll, "#");

var locations = [firstBranch, dungeon];

module.exports = locations;