class Player {
    constructor() {
    }
    getCount() {
        var count = database.ref("playerCount");
        count.on("value", function (data) {
            playerCount = data.val();
        });
    }
    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        });
    }
    updateName(name) {
        var playerIndex = "Player" + playerCount;
        database.ref(playerIndex).update({
            Name: name
        });
    }
}