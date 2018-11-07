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

var locations = [startingPoint, dungeonEntrance, bossRoom, finalChamber];


var Game;

$(document).ready(function () {
    // get GameId from localStorage
    var gameId = localStorage.GameId;
    // log the GameId
    console.log("GameId: " + gameId);

    // declare global code variable to hold game code
    var code;

    // if the GameId from localStorage isn't null
    if (gameId) {
        // get the game object from db
        $.get("/api/game/" + gameId, function (data) {
            //////////////////////////////////
            // GETTING AND USING PLAYER'S NAME
            // log data
            console.log(data);
            // get the player's name
            Game = data[0];
            var name = Game.Player.name;
            // if name isn't null add to name-header element
            if (name) {
                $("#name-header").text(name);
            }

            console.log("CurrentLocI: " + Game.currentLocI);

            //////////////////////////////////
            // GETTING AND USING PLAYER'S SPRITE
            // get player's spriteURL
            var playerSprite = Game.Player.spriteURL;
            // if playerSprite isn't null, set the html element's img src
            if (playerSprite) {
                $("#playerSprite").attr("src", playerSprite);
            }

            //////////////////////////////////
            // GETTING AND USING PLAYER'S HP
            // get maxHPSet from localStorage
            var maxHPSet = localStorage.getItem("maxHPSet");
            // if maxHP isn't set 
            if (!maxHPSet) {
                // set maxHP in localStor
                localStorage.setItem("maxHP", data[0].Player.hp);
                // toggle maxHPSet in localStor
                localStorage.setItem("maxHPSet", true);
            }
            // get maxHP from localStor
            var maxHP = localStorage.getItem("maxHP");
            // set hp variable using Player.hp in db
            var hp = Game.Player.hp;
            // if maxHP and hp aren't null, set the html elements
            if (maxHP != null && hp != null) {
                $("#hp").text(hp + "/" + maxHP);
            } 
            
            //////////////////////////////////
            // GETTING AND USING ENEMY

            // 1. Figure out the game's location
            var currentLocationIndex = Game.currentLocI;
            console.log(locations);
            var currentLocation = locations[currentLocationIndex];
            

            // 2. Get the info for the enemy at that location
            var enemy = currentLocation.enemy;
            console.log(enemy);

            if (enemy) {
                $("#enemy-header").text(enemy.name)

                var roomItemCard = $("<div id='room-item-card' class='card'>");
                var enemySprite = $('<img class="card-img-top card" id="enemySprite" style="max-width: 50px; max-height: 50px; margin-top: 2px; margin-left: 2px" src = "' + enemy.spriteURL + '" alt = "Future Sprite">');
                roomItemCard.append(enemySprite);

                var cardBody = $("<div class='card-body'>");
                var heading = $("<h5 class='card-title card' id='enemy-header'>");
                heading.text(enemy.name);
                cardBody.append(heading);
                var p = $("<p class='card-text card'>");
                p.append('<strong>HP:</strong>');
                p.append('<strong id="hp">' + enemy.hp + '/' + enemy.hp + '</strong>');
                p.append('<br>');
                cardBody.append(p);

                roomItemCard.append(cardBody);
                $("#roomThings").append(roomItemCard);            
            }

            //////////////////////////////
            // LOCATION INFORMATION
            $("#flavorText").text(currentLocation.flavText);

            $("#roomName").text(currentLocation.name);

            //////////////////////////////
            // GETTING GAME CODE
            code = data[0].code;



            /////////////////////////////
            // CONTINUE BUTTON & MODALS
            $("#continue-button").text(currentLocation.actions);

            // DECIDE NEXT OPTIONS BASED ON CURRENT LOCATION
            if (currentLocationIndex === 0) {
                // Player is at Village. From here they can continue to the dungeon entrance.
                
                // Set the modal target for the continue button
                $("#continue-button").attr("data-target", ".decision-modal");

                // Update the decision modal
                // Text
                var decisionText = "You decide to head to the crypt to investigate."
                $("#decision-text").text(decisionText)
                // Buttons
                $("#decision-one").text("Go to the Ancient Crypt");
                $("#decision-one").attr("leadsTo", "1")
                $("#decision-two").hide();
            } 
            else if (currentLocationIndex === 1) {
                // Player is at Dungeon Entrance/First Chamber. From here they can go to the boss room.

                // Set the modal target for the continue button
                $("#continue-button").attr("data-target", ".decision-modal");

                // Update the decision modal
                // Text
                var decisionText = "Ahead of you is a door to the next chamber."
                $("#decision-text").text(decisionText)
                // Buttons
                $("#decision-one").text("Open the Door");
                $("#decision-one").attr("leadsTo", "2")
                $("#decision-two").hide();
            } 
            else if (currentLocationIndex === 2) {
                // Player is at the Boss Room/Blood Chamber. Time to throw down, liches!

                // Set the modal target for the continue button
                $("#continue-button").attr("data-target", ".battle-modal");
                
                // Save the lich to local storage for use in battle.js
                var stringifiedEnemy = JSON.stringify(currentLocation.enemy);
                localStorage.setItem("CurrentEnemy", stringifiedEnemy);
            } 
            else if (currentLocationIndex === 3) {
                // Player has beaten the boss. From here they can continue to the end screen.

            }
        });
            //////////////////////////////////////
            // GETTING GAME CODE FOR SAVE AND QUIT
            $("#save-quit").on("click", function(e) {
                e.preventDefault();
                $("#gameID").text(code);
            })
    }

    $(".decision").on("click", function() {
        var destination = $(this).attr("leadsTo");
        console.log(parseInt(destination));
        console.log(Game);

        // Change the game's current location and PUT up to the DB.
        Game.currentLocI = parseInt(destination);

        $.ajax({
            url: "/api/game/",
            method: "PUT",
            data: Game
        }).then(function (response) {
            console.log("Game updated! currentLocI is now " + Game.currentLocI);
            // Once the DB has been updated, reload the page.
            location.reload();
        });
        
    });

    // // TAKING THIS FROM HOT RESTAURANT TO GET THE PLAYER INFO
    // $.get("/api/player/" + gameId, function (data) {
    //     console.log(data);
    //     if (data) {
    //         for (i in data) {
    //             // <ul id="partyList" class="list-group"></ul>
    //             // <div class="card">
    //             // <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Future Sprite">
    //             // <div class="card-body">
    //             // <h5 class="card-title">John Smith</h5>
    //             // <p class="card-text">
    //             // <strong>HP:</strong> ##/##
    //             // <br>
    //             // <strong>MP:</strong> ##/##
    //             // </p>
    //             // </div>
    //             // </div>
    //             // </ul>
    //             var charObj = data[i];

    //             var charDiv = $("<li class='list-group-item'>");

    //             var charCard = $("<div class='card'>");
    //             var charSprite = $("<img class='card-img-top' src='" + charObj.SpriteURL + "' alt='Player Sprite'>");
    //             var charCardTwo = $("<div class='card-body'");
    //             var charName = $("<h5 class='card-title'>" + charObj.playerName + "</h5>");
    //             var charHR = $("<hr>");
    //             var charHP = $("<p class='card-text'><strong>HP: </strong>" + charObj.HP + "</p>");

    //             charDiv.append(charCard, charSprite, charCardTwo, charName, charHR, charHP);
    //             $("#partyList").append(charDiv);
    //         }
    //     }
    // });

    // DO IT AGAIN FOR ROOM INFO

//     $.get("/api/game", function (data) {
//         console.log(data);
//         if (data) {
//             for (i in data) {
//                 // <ul id="roomThings" class="list-group">
//                 // <li class="list-group-item">GOBLIN</li>
//                 // </ul>

//                 var roomObj = data[i];

//                 var roomDiv = $("<li class='list-group-item'>");

//             var roomItem = $(roomObj.enemy.name);

//             roomDiv.append(roomItem);
//             $("#roomThings").append(roomDiv);
//             $(".adventures").append(data.location.flavText);
//             $(".roomName").empty();
//             $(".roomName").append(data.location.name);
//             $(".nextField").append(data.location.actions);



//             if (data.location.actions == "Fight") {
//                 $(".nextField").attr("data-toggle", "modal");
//                 $(".nextField").attr("data-target", ".battle-modal");
//             }

//             else if (data.location.actions == "Continue") {
//                 $(".nextField").on("click", function (event) {
//                     event.preventDefault();
//                 $.post("/reservations", newReservation);
//             }
//             )}
            
//         });
//     }
// }


    // // DO IT AGAIN FOR ROOM INFO
    // $.get("/api/game", function (data) {
    //     console.log(data);
    //     if (data) {
    //         for (i in data) {
    //             // <ul id="roomThings" class="list-group">
    //             // <li class="list-group-item">GOBLIN</li>
    //             // </ul>

    //             var roomObj = data[i];

                
            
    //         }
    //     }
    // });


//             if (data.location.actions == "Fight") {
//                 $(".nextField").attr("data-toggle", "modal");
//                 $(".nextField").attr("data-target", ".battle-modal");
//             }

//             else if (data.location.actions == "Continue") {
//                 $(".nextField").on("click", function (event) {
//                     event.preventDefault();
//                 $.post("/reservations", newReservation);
//             }
//             )}
            
//         });
//     }
// }


    // // DO IT AGAIN FOR ROOM INFO
    // $.get("/api/game", function (data) {
    //     console.log(data);
    //     if (data) {
    //         for (i in data) {
    //             // <ul id="roomThings" class="list-group">
    //             // <li class="list-group-item">GOBLIN</li>
    //             // </ul>

    //             var roomObj = data[i];

                
            
    //         }
    //     }
    // });

    // DYNAMICALLY ADD TO THE ADVENTURE LOG
    // <p class="card-text adventures">You enter a room. Surprise mf-er! There's a goblin!</p>

    // DYNAMICALLY UPDATE THE NAME OF THE ROOM
    // <h4 class="roomName">Dusty Room</h4>

    // IF room has NPC or CHEST, show ENCOUNTER modal & update ENCOUNTER modal
        // <div class="modal-header">
        // <h5 class="modal-title encounter-title">Hello, traveler!</h5>
        // <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        //     <span aria-hidden="true">&times;</span>
        // </button>
        // <div class="modal-body">
        //     <img class="img-fluid encounter-image" src="../images/NPC/Merchant1.png">
        //     <p class="encounter-text">How fortunate that we've met. It's dangerous to go alone. You should take this.</p>
        //     <button class="btn btn-secondary item-accept">Take it.</button> <button class="btn btn-secondary item-decline">Decline</button>
        // </div>
        // <div class="modal-footer">
        //     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        // </div>
        // ON MODAL CLOSE -> update location API & recall the location API & reload the game page

    // IF room has ENEMY, show BATTLE modal & update BATTLE modal
        // IF BATTLE is WON, show victory modal
            // <div class="modal-header">
            // <h5 class="modal-title victory-title">Victory!</h5>
            // <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            //     <span aria-hidden="true">&times;</span>
            // </button>
            // </div>
            // <div class="modal-body">
            //     <img class="img-fluid" id="victory-image" alt="Future Sprite Animations go here.">
            //     <div class="card victory-exp-list">
            //         <div class="card-header">
            //             <h6>Experience</h6>
            //         </div>
            //         <div class="card-body">
            //             <ul id="experience-points" class="list-group">
            //                 <li class="list-group-item">
            //                     You have gained ### experience points!
            //                 </li>
            //                 <li class="list-group-item">
            //                     You leveled up!
            //                 </li>
            //                 <li class="list-group-item">
            //                     You have gained ## STR!
            //                 </li>
            //             </ul>
            //         </div>
            //     </div>
            //     <div class="card victory-loot-list">
            //         <div class="card-header">
            //             <h6>Loot</h6>
            //         </div>
            //         <div class="card-body">
            //             <ul id="loot-items" class="list-group">
            //                 <li class="list-group-item">
            //                     You found Bloody Dragon Scales on the White Dragon.
            //                 </li>
            //                 <li class="list-group-item">
            //                     You found a Rusty Sword in the bowels of the White Dragon.
            //                 </li>
            //             </ul>
            //         </div>
            //     </div>
            // </div>
            // ON CLOSE, reload game page & update location API & recall location API
        // IF BATTLE IS LOST, go to results page

    // IF room has decision to make on route, show DECISION modal
        // <div class="modal-header">
        // <h5 class="modal-title">You've come to a fork in the road!</h5>
        // <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        //     <span aria-hidden="true">&times;</span>
        // </button>
        // </div>
        // <div class="modal-body">
        //     <img class="img-fluid" alt="Make your choice!" src="https://media1.giphy.com/media/i7CWVT8rOBYoE/giphy.gif?cid=3640f6095bde757555673167516116c9">
        //     <p class="decision-text">In the dark forest, you decide to go to either the hidden temple or the old pirate's caves. After some thought, you decide on...</p>
        //     <button class="btn btn-secondary decision-one">Hidden Temple</button> <i class="far fa-compass"></i> <button class="btn btn-secondary decision-two">Pirate Caves</button>
        // </div>
        // <div class="modal-footer">
        //     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        // </div>
        // ONCE DECISION IS MADE, close DECISION modal & update location API & reload game page & recall location API
});

