| Method | Path              | Type | Data In       | Data Out   | Description                                                                                    |
|--------|-------------------|------|---------------|------------|------------------------------------------------------------------------------------------------|
| GET    | /api/game/:id     | Data | Game ID       | JSON       | Returns a reference to the Player object and Location object                                   |
| GET    | /                 | HTML | -             | index.html | Returns index.html for display to page                                                         |
| POST   | /api/player/   | Data | Player Object | -          | Creates the player in the DB (based on the player object's ID)                                     |
| POST   | /api/game/  | Data | Game Object | -          | Creates a new game record in the DB                                     |
| PUT   | /api/player/   | Data | Player Object | -          | Updates the player stats (based on the player object's ID)                                     |
| PUT   | /api/game/ | Data | Game Object | -          | Updates the game record in the DB (based on the game object's id)                                    |
| PUT   | /api/enemy/    | Data | Enemy Object  | -          | Updates an enemy's stats (based on the enemy object's ID)                                      |
