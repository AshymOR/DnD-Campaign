// HTML routes to go here
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  // Loads player.html
  app.get("/player", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/player.html"))
  });

  // Loads game.html
  app.get("/game/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/game.html"))
  });

  // Loads results.html
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html.results.html"))
  });

  // Loads battle.html
  app.get("/battle", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/battle.html"))
  });
};