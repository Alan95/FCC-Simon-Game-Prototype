let green = $(".green");
let red = $(".red");
let blue = $(".blue");
let yellow = $(".yellow");
let start = $(".start");
let strict1 = $(".strict");
let buttons = [0, 1, 2, 3];
let gameArray = [];
let playerArray = [];
let round = 1;
let greenie = "green";
let redie = "red";
let yellowi = "yellow";
let bluei = "blue";
var counter = 0;
var maxColor = 1;
var bassclicker = 0;
let minColor = 0;
var ux = 0;
var failures = 0;

let redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
let greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
let yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
let blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
let allAudio = [redAudio, greenAudio, yellowAudio, blueAudio];
let gameMode = false;
let strict = false;

//Starting Gamemode

start.click(() => {
    let randItem = allAudio[Math.floor(Math.random() * allAudio.length)];
    randItem.play();
    if (gameMode) {
      setTimeout(reset(), 1000);
    }
    gameMode = true;
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
