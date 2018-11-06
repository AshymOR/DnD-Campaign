function Location(name, enemy, backgroundURL, actions, flavText) {
    this.name = name;
    this.enemy = enemy;
    this.backgroundURL = backgroundURL;
    this.actions = actions;
    this.flavText = flavText;
}

function Enemy(name, hp, atk, spriteURL, xp, loot) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.spriteURL = spriteURL;
    this.xp = xp;
    this.loot = loot;
}
//Example enemy
//var troll = new Enemy("Troll", 100, 5, "#");

//Enemy to be used for basic final product

var lich = new Enemy("Lich", 135, 17, "../images/Sprites/TimeFantasy_Monsters/2x/$monster_lich.png", 300, "Bony Finger")


var startingPoint = new Location("Village", null, "/images/backDrops/Village/Village.jpg", "Continue", "You arrive at the village where the rumors of horrifc deaths and missing villagers originated from. After talking with a few of the locals you have discovered that an ancient crpyt was broken into a few months ago, shortly before the strange happenings started.");

var dungeonEntrance = new Location("First Chamber", null, "/images/backDrops/Dungeons/Dungeon2.jpg", "Continue", "Entering the crypt sends a chill down your spine. The air is damp and thick with the stench of decay. You can't see anything amiss but in the back of your mind you know there is something sinister at work here.")

var bossRoom = new Location("Blood Chamber", lich, "/images/backDrops/Dungeon/Dungeon3.jpg", "Fight", "You enter the chamber to discover a lich perfmoring necromatic rituals. It appears this is the source of corruption.");

var finalChamber = new Location("Secret Chamber", null, "/images/backDrops/Dungeon/Dungeon1.jpg", "Continue", "After defeating the lich and destroying its phylactery you discover a hidden chamber behind the monolithic statue. You find a small tunnel lined with strange, eerie faces, and at the end you discover the lich's hoard of gold, gems, and rare scrolls.")

var locations = [startingPoint,  dungeonEntrance, bossRoom, finalChamber];

module.exports = locations;