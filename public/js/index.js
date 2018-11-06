$(document).ready(function(){
    // disable resume game button and a href
    // $("#toGame").attr('disabled','disabled');
    // $("#resumeGame").attr('disabled','disabled');

    $("#myBtn").click(function() {
        // pop modal
        $("#myModal").modal();
        // get code from input form
        // if form contains four-char code
        // if (code.length == 4) {
            // enable click of resume btn and a href
            // $("#resumeGame").removeAttr('disabled');
            // $("#toGame").removeAttr('disabled');
            // change href to load game html
            $("#toGame").attr("href", "/game/");
        // }
        // when resume game btn clicked
    });
    $("#toGame").click(function(e) {
        // if four digit code entered, allow click
        console.log("I'm here!!!")

        var code = $("#code").val();


            $.get("/api/loadgame/" + code, function (data) {
                // log data
                if (data) {
                    console.log(data);
                    console.log("id to set: " + data[0].id);
                    localStorage.setItem("GameId", data[0].id);
                }

            });

    });
});

//I want to validate player name in the modal//



//Once modal opens, need to be able to click to db to gather saved player game with the "continue campaign" button//

