var ball;

var database, pos;

function setup() {
    createCanvas(500, 500);

    database = firebase.database();

    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";

    var posNode = database.ref("Ball/Position");
    posNode.on("value", readData);
}

function draw() {
    background("white");
    if (pos !== undefined) {
        if (keyDown(LEFT_ARROW)) {
            writePosition(-3.5, 0);
        }
        else if (keyDown(RIGHT_ARROW)) {
            writePosition(3.5, 0);
        }
        else if (keyDown(UP_ARROW)) {
            writePosition(0, -3.5);
        }
        else if (keyDown(DOWN_ARROW)) {
            writePosition(0, 3.5);
        }
    }
    drawSprites();
}

function writePosition(x, y) {
    database.ref("Ball/Position").set({
        x: pos.x + x,
        y: pos.y + y
    });
}

function readData(data) {
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;
}