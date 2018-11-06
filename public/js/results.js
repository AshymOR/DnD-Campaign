
//need to be able to pull from db to populate table with stats//
//not doing this right now

//How do we determine victory or defeat based on the game play? --- Not doing this right now//

//Do we want a fixed image of a character, or will is populate with the player's character?//

function show_image(src, width, height, alt) {
    var img = document.createElement(".charPortrait");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}