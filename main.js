let called = 0;
let mySound = new Audio('./paranoid.m4a');
document.getElementById("musicButton").addEventListener('click',  playSound);
document.getElementById("stopMusic").addEventListener('click',  soundStop);

function playSound() {      
                  if (called == 0) {
                                    mySound.play();      
                                    called++;            
                  }
                   
}

function soundStop() {
          if (called = 1) {
                  mySound.pause();
                  mySound.currentTime = 0;
                  called--;
          }       
}