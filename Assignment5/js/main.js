//Referenced code from: https://tobiasahlin.com/moving-letters/

import anime from 'animejs/lib/anime.es.js';

var textWrapper = document.querySelector('.first .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.first .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.first',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

var textWrapper = document.querySelector('.second .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.second .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.second',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });


var textWrapper = document.querySelector('.third .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.third .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 750,
    delay: (el, i) => 300 + 30 * i
   }).add({
    targets: '.third',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });

var textWrapper = document.querySelector('.fourth .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.fourth .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.fourth .line',
    translateX: [0, document.querySelector('.fourth .letters').getBoundingClientRect().width + 15],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.fourth .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.fourth',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });

var textWrapper = document.querySelector('.fifth .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.fifth .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.fifth',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 4000
  });

var textWrapper = document.querySelector('.sixth .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.sixth .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.sixth',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
  });
  
var textWrapper = document.querySelector('.seventh .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.seventh .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.seventh .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.seventh',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 6000
  });

var textWrapper = document.querySelector('.eighth .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.eighth .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.eighth',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 7000
  });