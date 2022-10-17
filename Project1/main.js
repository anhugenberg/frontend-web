let count = 0;
let countdownNumber = 21;
const round = document.getElementById('round');
const roundTimer = document.getElementById('timer');
let flashlight = document.getElementById("flashlighteffect");
let differenceClick = document.getElementById('differenceimage');


/* Referenced code from: https://codemyui.com/flashlight-mouse-pointer/ 
and from: https://dev.to/ridhikgovind/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-using-javascript-easy-way-1bfj*/
//updates flashlight in real time to where the mouse moves on the screen
function updatemousePosition(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    flashlight.style.setProperty('--xPosition', x + 'px')
    flashlight.style.setProperty('--yPosition', y + 'px')
}
  
document.addEventListener('mousemove',updatemousePosition)
document.addEventListener('touchmove',updatemousePosition)

//Referenced code from: https://codepen.io/Web_Cifar/pen/OJMGPbb
//Creates a countdown timer
const countdown = setInterval(() =>{
    countdownNumber --;
    displayTime(countdownNumber);
    if(countdownNumber < 1){
        timeisOver();
        clearInterval(countdown)
        setTimeout(() => {
            window.location.href = "endpage.html";
        }, 1000);
    }
},1000)

function displayTime(number){
    roundTimer.innerHTML = `00:${number<10 ? '0':''}${countdownNumber}`;
}

function timeisOver(){
    roundTimer.innerHTML = "Time's Up!";
}

//Referenced code from: https://www.geeksforgeeks.org/how-to-get-the-coordinates-of-a-mouse-click-on-a-canvas-element/
/* gets x and y coordinates of a mouse click realitive to the image element 
and checks if the coordinates are within the correct boundaries*/
function getMousePosition(differenceClick, event) {
    let rect = differenceClick.getBoundingClientRect();
    const basePicture = document.getElementById('baseimage');
    const differentPicture = document.getElementById('differenceimage');
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    if ((count == 0) && (x > 380) && (x < 420) && (y > 295) && (y < 330)){
        flashlight.style.setProperty("--bgGradient", `radial-gradient(
            circle 4em at var(--xPosition) var(--yPosition),
            rgba(0,0,0,0),
            rgba(0,0,0,.4),
            rgba(0,0,0,.9)
          )`);
        round.innerText = "Round 2";
        basePicture.src = "img/spotpicture2no.png";
        differentPicture.src = "img/spotpicture2.png";
        count = 1;
    }
    else if ((count == 1) && (x > 30) && (x < 62) && (y > 214) && (y < 243)){
        flashlight.style.setProperty("--bgGradient", `radial-gradient(
            circle 4em at var(--xPosition) var(--yPosition),
            rgba(0,0,0,0),
            rgba(0,0,0,.3),
            rgba(0,0,0,.7)
          )`);
        round.innerText = "Round 3";
        basePicture.src = "img/spotpicture3no.png";
        differentPicture.src = "img/spotpicture3.png";
        count = 2;
    }
    else if ((count == 2) && (x > 225) && (x < 260) && (y > 305) && (y < 335)){
        flashlight.style.setProperty("--bgGradient", `radial-gradient(
            circle 4em at var(--xPosition) var(--yPosition),
            rgba(0,0,0,0),
            rgba(0,0,0,.2),
            rgba(0,0,0,.5)
          )`);
        round.innerText = "Round 4";
        basePicture.src = "img/spotpicture4no.png";
        differentPicture.src = "img/spotpicture4.png";
        count = 3;
    }
    else if ((count == 3) && (x > 330) && (x < 345) && (y > 130) && (y < 162)){
        flashlight.style.setProperty("--bgGradient", `radial-gradient(
            circle 4em at var(--xPosition) var(--yPosition),
            rgba(0,0,0,0),
            rgba(0,0,0,.1),
            rgba(0,0,0,.3)
          )`);
        console.log("inside count 3");
        round.innerText = "Round 5";
        basePicture.src = "img/spotpicture5no.png";
        differentPicture.src = "img/spotpicture5.png";
        count = 4;
    }
    else if ((count == 4) && (x > 107) && (x < 126) && (y > 75) && (y < 98)){
        setTimeout(() => {
            window.location.href = "congrats.html";
        });
    }
    console.log("Coordinate x: " + x, 
                "Coordinate y: " + y);
}

differenceClick.addEventListener("mousedown", function(e){
    getMousePosition(differenceClick, e);
});