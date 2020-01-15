



//DRUM KIT AUDIO Objects
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");

function playsound(key){

switch (key){
    case 'w' :
        tom1.play();
        break;
    case 'a' :
        tom2.play();
        break;
    case 's' :
        tom3.play();
        break;
    case 'd' :            
        tom4.play();
        break;
    case 'j' :
        crash.play();
        break;
    case 'k' :
        kick.play();
        break;
    case 'l' :
        snare.play();
        break;
    default:
        break;
}
}
// this function handle animation for buttons in any case played by click or by keypress.
function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+ currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.toggle("pressed");
        },100);

}

// PLAY by CLICK ON BUTTONS
var keysLength = document.querySelectorAll(".drum").length;
for (var i = 0 ; i < keysLength; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        buttonAnimation(this.innerHTML);
        playsound(this.innerHTML);
    });

// BY PRESSING KEYS
document.addEventListener("keydown",function(event){
    buttonAnimation(event.key);
    playsound(event.key);
});
