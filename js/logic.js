

//Manipulating Functions (Reset, Start, Stop)

const reset = () => {
    strict = false;
    round = 1;
    counter = 0;
    options = 1;
    gameMode = true;
    gameArray.length = 0;
    minColor = 0;
}

const gameRunner = () => {
    $(".display").text(round);
    if (round > 19) {
        $(".display").text("You Won!");
        reset();
    }
    playerArray = [];

    while (minColor < maxColor) {
        let number = Math.floor(Math.random() * 4);
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
        minColor++;
    }

    showingColours();
    //Breakpoint 2.7
    maxColor++;
    ux = 0;

    if (strict) {
        failures = 1;
    } else {
        failures = 0;
    }

}

const colorEffects = (thatColor) => {

  $("." + thatColor).css("background-color", 'black');
  $("." + thatColor).delay(1000).queue((next) => {
      $("." + thatColor).css("background-color", thatColor);
      next();
  });

}

const colorSound = (color) => {

    if (color == 'red') {
        redAudio.play();
    } else if (color == 'yellow') {
        yellowAudio.play();
    } else if (color == 'blue') {
        blueAudio.play();
    } else {
        greenAudio.play();
    }

    colorEffects(color);
}




const showingColours = () => {
  gameArray.forEach(colorSound);
}
