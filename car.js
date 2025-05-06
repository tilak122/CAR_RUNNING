let music=new Audio("sound.mp3")
let button=document.getElementById('but')

button.addEventListener('click',()=>{
    document.querySelector('.wheel1 img').style.animation="wheelrotater  linear .1s infinite"
    document.querySelector('.wheel2 img').style.animation="wheelrotater  linear .1s infinite"
    document.querySelector('.track').style.animation= " trackmove linear 1s infinite"
     
    music.play();
  setTimeout(() => {
           document.querySelector('.wheel1 img').style.animation="wheelrotater  linear .6s infinite"
    document.querySelector('.wheel2 img').style.animation="wheelrotater  linear .6s infinite"
    document.querySelector('.track').style.animation= " trackmove linear 20s infinite"
     
    music.pause();
        
        
    }, 6000);
})

