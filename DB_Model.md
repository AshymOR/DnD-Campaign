# Database Model

Our game will use four tables: Games, Player, Location, and Enemies.

![alt text](DB_Model.png "DB Diagram")


The Games table stores the state of a given game. Each record in the table represents a seperate game. This is done by storing the ID of the player object (as they last were in the game) and the ID of the player's current location on the game tree. These relationships should be 1 to 1.

The Player table stores the current state of each player. Each record gets updated when it is affected by the events of its game (for example, a Player's HP column will be decremented when they take a hit from an enemy). The object also stores a URL to pull up the player's sprite image.

The Location table stores the player's current location. Each record represents a node on the game tree. It not only identifies where the player is located, but also can store a reference to the enemy at that location. The objectr also stores a URL that refers to the location's background image.

The Enemy table stores all the enemies a player could encounter. These objects have an HP and an Atk attribute, along with a URL to the enemy's sprite.

- Games Table:
    - id (INT, AUTO_INCREMENT, NOT NULL)
    - playerID (INT, NOT NULL, foreign key to player table)
    - locationID (INT, NOT NULL, foreign key to location table)

- Player Table:
    - id (INT, AUTO_INCREMENT, NOT NULL)
    - gameID (INT, NOT NULL, foreign key to game table)
    - HP (INT)
    - Atk (INT)
    - SpriteURL (VARCHAR)

- Location Table:
    - id (INT, AUTO_INCREMENT, NOT NULL)
    - enemyID (INT, foreign key to enemy table. Can be null)
    - BackgroundURL (VARCHAR)

- Enemy Table:
    - id (INT, AUTO_INCREMENT, NOT NULL)
    - HP (INT)
    - Atk (INT)
    - SpriteURL (VARCHAR)