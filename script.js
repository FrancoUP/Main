const weatherBtn = document.querySelector(".btn-News");
const gameBtn = document.querySelector(".btn-2048");


weatherBtn.addEventListener("touchstart",function(e){
  weatherBtn.style.backgroundColor = "rgb(251, 158, 158)";
}, {passive: true})


weatherBtn.addEventListener("touchend",function(e){
  weatherBtn.style.backgroundColor = "rgb(254, 179, 179)";
})

gameBtn.addEventListener("touchstart",function(e){
  gameBtn.style.backgroundColor = "rgb(172, 246, 62)";
}, {passive: true})


gameBtn.addEventListener("touchend",function(e){
  gameBtn.style.backgroundColor = "rgb(199, 255, 115)";
})