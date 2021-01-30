var database;

// Important contents of the Game
var form, game, player;

var playerCount = 0;

var gameState = 0;

function setup() {
    createCanvas(500, 500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    background("white");
}