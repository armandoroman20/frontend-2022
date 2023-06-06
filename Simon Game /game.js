const gamePattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];

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
}