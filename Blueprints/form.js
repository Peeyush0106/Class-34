class Form {
    constructor() {
    }
    display() {
        var title = createElement('h2');
        title.html("Car Race Game");
        title.position(200, 100);
        var input = createInput("").attribute("place-holder", "Name");
        input.position(200, 200);
        var button = createButton("Play");
        button.position(200, 230);
        var greeting = createElement('h2');
        button.mousePressed(function () {
            input.hide();
            button.hide();
            var playerName = input.value();
            playerCount += 1;
            player.updateName(playerName);
            player.updateCount(playerCount);
            greeting.html("Welcome " + playerName);
            greeting.position(50, 200);
        });
    }
}