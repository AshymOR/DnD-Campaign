
// Get player portrait for display on end screen
$.get("/api/player/", function (data) {
    console.log(data)
    var charPortrait = data[0].Player.charPortrait;
        // if playerSprite isn't null, set the html element's img src
        if (charPortrait) {
            $("#charPortrait").attr("src", charPortrait);
        }
});