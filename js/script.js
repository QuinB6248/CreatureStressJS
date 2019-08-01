
const image = document.getElementById("image-sprite")
let changePos;

function stopAnimate() {
  clearInterval(changePos);
}

function animateScriptWalking () {
  stopAnimate()
  image.style.backgroundImage = 'url(./img/calm_sprite.png)';
  let position = 0; //start position image sprite 
  const positionOffset = 750; //position offset
  changePos = setInterval (() => { 
    image.style.backgroundPosition = `-${position}px 0px`; 
    if (position < 29250) {
      position += positionOffset //increment position 
    } else {
      stopAnimate()      
    }
  }, 43)
}

function animateScriptCalm () {
  stopAnimate()
  image.style.backgroundImage = 'url(./img/calmer_sprite.png)';
  let position = 0; //start position image sprite 
  const positionOffset =750; //position offset
  changePos = setInterval (() => { 
    image.style.backgroundPosition = `-${position}px 0px`; 
    if (position < 29250) {
      position += positionOffset //increment position 
    } else {
      position = 0;        
    }
  }, 43)
}

function animateScriptWorry () {
  stopAnimate()
  image.style.backgroundImage = 'url(./img/worry_sprite.png)';
  let position = 0; //start position image sprite 
  const positionOffset = 750; //position offset
  changePos = setInterval (() => { 
    image.style.backgroundPosition = `-${position}px 0px`; 
    if (position < 22500) {
      position += positionOffset //increment position 
    } else {
      position = 0;        
    }
  }, 43)
}

function animateScriptStress () {
  stopAnimate()
  image.style.backgroundImage = 'url(./img/stress_sprite.png)';
  let position = 0; //start position image sprite 
  const positionOffset = 750; //position offset
  changePos = setInterval (() => { 
    image.style.backgroundPosition = `-${position}px 0px`; 
    if (position < 29250) {
      position += positionOffset //increment position 
    } else {
      position = 0;        
    }
  }, 43)
}

TweenMax.to(".button1  ", 0.08, {left:"20px", repeat:5000, yoyo:true})
TweenMax.to(".button1a", 0.1, {backgroundColor:"red"})
//  const flickering = ()  => {
//   TweenLite.fromTo('.button1 .button', 1, {backgroundColor:"red"}, {backgroundColor:"white"})
//  }

// TweenMax.staggerTo([".button1", ".button2", ".button3", ".button4"], 1, 
//   {scale:0.2, opacity:0.3}, 0.25);


// setTimeout(flickering, 3000);









