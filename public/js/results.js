
//need to be able to pull from db to populate table with stats//
//not doing this right now

//How do we determine victory or defeat based on the game play? --- Not doing this right now//

//Do we want a fixed image of a character, or will it populate with the player's character?//
$.get("/api/player/", function (data) {
    console.log(data)
var charPortrait = data[0].Player.charPortrait;
            // if playerSprite isn't null, set the html element's img src
            if (charPortrait) {
                $("#charPortrait").attr("src", charPortrait);
            }
        });