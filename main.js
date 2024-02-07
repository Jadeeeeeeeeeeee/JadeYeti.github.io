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

window.open = function sendMessage() {
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1204471986726641716/lxbz4TzIZqQcDsAje1sp0Cj2ud-7pn2jzH4Kpdyb207mQcjZOR0WoZrDhnvlCMb3g6pn");
  
        request.setRequestHeader('Content-type', 'application/json');
  
        const params = {
          username: "NEW USER W",
          avatar_url: "",
          content: "NEW USER POG"
        }
  
        request.send(JSON.stringify(params));
      }