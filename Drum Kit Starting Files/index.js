let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        this.style.color = "white";
        console.log(this);
    })
}


        // let audio = new Audio("sounds/tom-1.mp3");
        // audio.play();