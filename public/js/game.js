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
            var name = data[0].Player.name;
            // log player's name
            console.log(name);
            // if name isn't null add to name-header element
            if (name) {
                $("#name-header").text(name);
            }

            //////////////////////////////////
            // GETTING AND USING PLAYER'S SPRITE
            // get player's spriteURL
            var playerSprite = data[0].Player.spriteURL;
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
            var hp = data[0].Player.hp;
            // if maxHP and hp aren't null, set the html elements
            if (maxHP != null && hp != null) {
                $("#hp").text(hp + "/" + maxHP);
            } 
            
            //////////////////////////////////
            // GETTING AND USING ENEMY

            // 1. Figure out the game's location
            var currentLocationIndex = data[0].currentLocI;
            var locationsString = data[0].locations;
            console.log(locationsString);
            var locations = JSON.parse(locationsString);
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


        });
            //////////////////////////////////////
            // GETTING GAME CODE FOR SAVE AND QUIT
            $("#save-quit").on("click", function(e) {
                e.preventDefault();
                $("#gameID").text(code);
            })
    }

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

