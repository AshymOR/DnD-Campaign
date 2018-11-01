| Method | Path              | Type | Data In       | Data Out   | Description                                                                                    |
|--------|-------------------|------|---------------|------------|------------------------------------------------------------------------------------------------|
| GET    | /api/game/:id     | Data | Game ID       | JSON       | Returns a reference to the Player object and Location object                                   |
| GET    | /                 | HTML | -             | index.html | Returns index.html for display to page                                                         |
| GET    | /api/player/:id   | Data | Player ID     | JSON       | Returns stats for the requested player                                                         |
| GET    | /api/location/:id | Data | Location ID   | JSON       | Returns stats for location along with references to any enemies associated with that location. |
| POST   | /api/player/:id   | Data | Player Object | -          | Updates the player stats (based on the player object's ID)                                     |
| POST   | /api/enemy/:id    | Data | Enemy Object  | -          | Updates an enemy's stats (based on the enemy object's ID)                                      |
| POST   | /api/game/:id     | Data | Game Object   | -          | Updates the game's stats (will mainly be used to update the game's current location)           |