let yellowHover = document.getElementById("yellow");

yellow.addEventListener('mouseenter', () => {
    yellow.style.backgroundColor = "#a32cc4";
    yellow.innerText = "Purple";
});

  yellow.addEventListener('mouseleave', () => {
    yellow.style.backgroundColor = "#ffff00";
    yellow.innerText = "Yellow";
});

let greenHover = document.getElementById("green");

green.addEventListener('mouseenter', () => {
    green.style.backgroundColor = "#ff0000";
    green.innerText = "Red";
});

green.addEventListener('mouseleave', () => {
    green.style.backgroundColor = "#00ff00";
    green.innerText = "Green";
});


let blueHover = document.getElementById("blue");

blue.addEventListener('mouseenter', () => {
    blue.style.backgroundColor = "#ffA500";
    blue.innerText = "Orange";
});

blue.addEventListener('mouseleave', () => {
    blue.style.backgroundColor = "#0000ff";
    blue.innerText = "Blue";
});

let purpleClick = document.getElementById("purple");

purple.addEventListener('click', () => {
    purple.style.backgroundColor = "#0000ff";
    purple.innerText = "Blue";
});

let redClick = document.getElementById("red");

red.addEventListener('click', () => {
    red.style.backgroundColor = "#a32cc4";
    red.innerText = "Purple";
});


let orangeClick = document.getElementById("orange");

orange.addEventListener('click', () => {
    orange.style.backgroundColor = "#ffff00";
    orange.innerText = "Yellow";
});



