
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

TweenMax.to(".stresslevelimage", 2, {left:'100%'})













