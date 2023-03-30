//  This is grabbing all the instances of the drum class 
 let numberOfDrumButtons = document.querySelectorAll(".drum").length;


/* Detecting button click
making a for loop for all the instances of the drum class
*/
for (var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        // when we click a button the term "this" will grab the clicked instance, we also grab it's inner HTML

        let buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        
    })
}

// detecting key press

document.addEventListener("keydown", function (event) {
    
    // the "event" term in the console shows us what key is pressed, we use it's object to grab the "key" that was pressed
    makeSound(event.key);


});


function makeSound(key) {
    

switch (key) {
            
            case "w":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        
            case "a":  
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            
            case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            
            case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            
            case "k":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            
            case "l":
                let kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;
            
            default: console.log(buttonInnerHTML);
                break;
        }

}





        // let audio = new Audio("sounds/tom-1.mp3");
        // audio.play();