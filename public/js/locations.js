function Location(name, enemy, backgroundURL) {
    this.name = name;
    this.enemy = enemy;
    this.backgroundURL = backgroundURL;
}

function Enemy(name, hp, atk, spriteURL) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.spriteURL = spriteURL;
}
//Example enemy
//var troll = new Enemy("Troll", 100, 5, "#");

//Enemy to be used for basic final product
var lich = new Enemy("Lich", 135, 17, "../images/Sprites/TimeFantasy_Monsters/2x/$monster_lich.png")

var firstBranch = new Location("Fork in the Road", null, "#");
var dungeon = new Location("Dungeon", lich, "../images/BackDrops/Dungeon/Dungeon3.png");

var locations = [firstBranch, dungeon];

module.exports = locations;