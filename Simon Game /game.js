// Whenever user clicks button with class .btn  
// the ID of the particular button is stored
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let started = false;

let level = 0;

$(document).keypress(function () {
      if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function () {

    // grabbing and setting ID of particular button user clicks
    let userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
    
    // Adding the contents of the variable userChosenColour 
    // to end of userClickedPattern array
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    playSound(userChosenColour);

    animatePress(userChosenColour);
    

    checkAnswer(userClickedPattern.length-1);

});


function nextSequence() {
    
    // generate random number between 0 - 3
    let randomNumber = Math.floor(Math.random() * 4);
    
    // set randomNumber to an index[] in the buttonColours array
    let randomChosenColour = buttonColours[randomNumber];

    // log the randomChosenColour
    console.log(randomChosenColour);
    
    /* keep adding the randomChosenColour
    to the end of the gamePattern Array */
    gamePattern.push(randomChosenColour);

    console.log(gamePattern);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);


}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
    

        $("#" + currentColour).addClass("pressed");

        setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
                

}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
        $("body").removeClass("game-over");
        }, 200);

        startOver();
    }

}

function startOver() {

    level = 0;

    gamePattern = [];

    started = false;
}