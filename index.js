var numberOfDrums = document.querySelectorAll(".drum").length;

for(i=0; i<numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimator(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimator(event.key);
});

function makeSound(key) {
    
    switch (key) {
        case "w":
            var music = new Audio("sounds/tom-1.mp3");
            music.play();
            break;
        case "a":
            var music = new Audio("sounds/tom-2.mp3");
            music.play();
            break;
        case "s":
            var music = new Audio("sounds/tom-3.mp3");
            music.play();
            break;
        case "d":
            var music = new Audio("sounds/tom-4.mp3");
            music.play();
            break;
        case "j":
            var music = new Audio("sounds/snare.mp3");
            music.play();
            break;    
        case "k":
            var music = new Audio("sounds/crash.mp3");
            music.play();
            break;   
        case "l":
            var music = new Audio("sounds/kick.mp3");
            music.play();
            break;     
        default:
            break;
    }
}

function buttonAnimator(currentKey) {
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function() {
        activeKey.classList.remove("pressed")
    }, 100);
    
}




