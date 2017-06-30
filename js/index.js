var green = $(".green");
var red = $(".red");
var blue = $(".blue");
var yellow = $(".yellow");
var start = $(".start");
var strict1 = $(".strict");
var buttons = [0, 1, 2, 3];
var gameArray = [];
var playerArray = [];
var round = 1;
var greenie = "green";
var redie = "red";
var yellowi = "yellow";
var bluei = "blue";
var counter = 0;
var options = 1;
var bassclicker = 0;
var i = 0;
var ux = 0;
var failures = 0;

var redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var gameMode = false;
var strict = false;

start.on("click", function() {
    greenAudio.play();
    if (gameMode) {

        setTimeout(reset(), 1000);
    }


    gameMode = true;

    greenAudio.play();
    gameRunner();


});


strict1.on("click", function() {

    if (gameMode) {

        setTimeout(reset(), 1000);
    }


    redAudio.play();
    strict = true;
    gameMode = true;
    failures = 1;

    gameRunner();


});




function gameRunner() {
    $(".display").text(round--);
    round++;

    if (round > 19) {
        $(".display").text("You Won!");
        reset();
    }

    playerArray = [];
    console.log(i);
    console.log(options);
    while (i < options) {
        var number = Math.floor(Math.random() * 4);

        switch (number) {

            case 0:
                gameArray.push("green");
                break;
            case 1:
                gameArray.push("red");
                break;
            case 2:
                gameArray.push("blue");
                break;
            case 3:
                gameArray.push("yellow");
                break;

        }
        i++;
    }


    var m = 0;
    starting(m);
    options++;
    ux = 0;

    if (strict) {
        failures = 1;
    } else {
        failures = 0;
    }

}

function starting(counter) {
    var current = gameArray[counter];
    if (counter < gameArray.length) {
        setTimeout(function() {
            colorHandler(current);
            counter++;
            starting(counter);
        }, 1500);
    }

}




function colorHandler(color) {

    var background;

    if (color == 'red') {
        var jcolor = red;
        color = "#8B0000";
        background = "red";
        redAudio.play();
    } else if (color == 'yellow') {
        var jcolor = yellow;
        background = "#FFD700";
        yellowAudio.play();
    } else if (color == 'blue') {
        var jcolor = blue;
        background = "#1E90FF";
        blueAudio.play();
    } else {
        var jcolor = green;
        greenAudio.play();
        background = "#00FF00";
    }

    //background is background, not black
    jcolor.css("background-color", 'black');

    jcolor.delay(1000).queue(function(next) {
        jcolor.css("background-color", color);
        next();
    });


}




function playerHandling() {

    console.log(gameArray);
    console.log(playerArray);

    for (var p = 0; p < gameArray.length; p++) {
        if (gameArray[p] == playerArray[p]) {
            round++;
            console.log("next round");
            setTimeout(gameRunner(), 3000);

        }

    }




}




$(".red").click(function() {



    redAudio.play();
    console.log("clicked");
    colorHandler(redie);

    if (gameArray[ux] == "red") {
        ux++;
        playerArray.push("red");
        bassclicker++;
    } else {
        $(".display").text("Again");
        starting(0);
        failures++;
        if (failures > 1) {
            $(".display").text("Lost").delay(2000).queue(() => $(".display").text("Press Start").dequeue());
            bassclicker = 500;
            setTimeout(reset(), 2000);
        }
    }
    if (bassclicker == gameArray.length) {
        playerHandling();
        bassclicker = 0;
    }


});

$(".yellow").click(function() {



    yellowAudio.play();
    console.log("clicked");
    colorHandler(yellowi);

    if (gameArray[ux] == "yellow") {
        ux++;
        playerArray.push("yellow");
        bassclicker++;
    } else {
        $(".display").text("Again");
        starting(0);
        failures++;
        if (failures > 1) {
            $(".display").text("Lost").delay(2000).queue(() => $(".display").text("Press  Start").dequeue());
            bassclicker = 500;
            setTimeout(reset(), 2000);
        }
    }

    if (bassclicker == gameArray.length) {
        playerHandling();
        bassclicker = 0;
    }


});


$(".blue").click(function() {


    blueAudio.play();
    colorHandler(bluei);

    if (gameArray[ux] == "blue") {
        ux++;
        playerArray.push("blue");
        bassclicker++;
    } else {
        $(".display").text("Again");
        starting(0);
        failures++;
        if (failures > 1) {
            $(".display").text("Lost").delay(2000).queue(() => $(".display").text("Press     Start").dequeue());
            bassclicker = 500;
            setTimeout(reset(), 2000);
        }

    }

    if (bassclicker == gameArray.length) {
        playerHandling();
        bassclicker = 0;
    }


});

$(".green").click(function() {


    greenAudio.play();
    console.log("clicked");
    colorHandler(greenie);

    if (gameArray[ux] == "green") {
        ux++;
        playerArray.push("green");
        bassclicker++;
    } else {
        $(".display").text("Again");
        starting(0);
        failures++;
        if (failures > 1) {

            $(".display").text("Lost").delay(2000).queue(() => $(".display").text("Press Start").dequeue());


            bassclicker = 500;
            setTimeout(reset(), 2000);

        }
    }
    if (bassclicker == gameArray.length) {

        playerHandling();
        bassclicker = 0;
    }

});




function reset() {


    strict = false;
    round = 1;
    counter = 0;
    options = 1;
    gameMode = true;
    gameArray.length = 0;
    i = 0;




}