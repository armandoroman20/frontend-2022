let allButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<allButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("clicked!");
    })
}