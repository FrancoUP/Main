const s = document.querySelectorAll(".s");
const scorePoints = document.querySelector(".score");
const bestScore = document.querySelector(".best-score")
const new_game = document.querySelector(".new-game");
const nascosta = document.querySelector(".overlay");
const btn_under = document.querySelector(".btn-understood");
const agree = document.querySelector(".agreement");
const main = document.querySelector(".main-square");
const quadrante = document.querySelector(".main");
const base = document.querySelector(".base");
let score = 0;
let best_score = 0;
let chiave = true;
let freq = 7;
if(window.navigator.userAgent.includes("Firefox")) freq = 20;
const timeRandomNum = 50;
let w = true;
let interruttoreGenerale = false;


function setNumberSize(num, cel){
  if(num < 9 ) {
    cel.style.fontSize = `${Math.round((s[0].clientWidth * 50) / 100)}px`; 
   } else if(num > 9 && num < 99) {
    cel.style.fontSize = `${Math.round((s[0].clientWidth * 45) / 100)}px`;
   } else if(num > 99 && num < 999) {
    cel.style.fontSize = `${Math.round((s[0].clientWidth * 42) / 100)}px`;
   } else if(num > 999) {
    cel.style.fontSize = `${Math.round((s[0].clientWidth * 36) / 100)}px`;
   }
}

function setNumberColor(num, cel){

  if(num === 2) {
    cel.style.backgroundColor = "rgb(237,237, 237)";
    cel.style.color = "grey";

  }
  if(num === 4) {
    cel.style.backgroundColor = "rgb(225,225,225)";
    cel.style.color = "grey";
  }
  if(num === 8) {
    cel.style.backgroundColor = "rgb(249, 192, 135)";
    cel.style.color = "white";
  }
  if(num === 16) {
    cel.style.backgroundColor = "rgb(254, 167, 81)";
    cel.style.color = "white";
  }
  if(num === 32) {
    cel.style.backgroundColor = "rgb(255, 115, 115)";
    cel.style.color = "white";
  }
  if(num === 64) {
    cel.style.backgroundColor = "rgb(255, 72, 72)";
    cel.style.color = "white";
  }
  if(num === 128) {
    cel.style.backgroundColor = "rgb(234, 234, 125)";
    cel.style.color = "white";
  }
  if(num === 256) {
    cel.style.backgroundColor = "rgb(240, 240, 71)";
    cel.style.color = "white";
  }
  if(num === 512) {
    cel.style.backgroundColor = "rgb(254, 254, 0)";
    cel.style.color = "white";
  }
  if(num === 1024) {
    cel.style.backgroundColor = "rgb(46, 222, 46)";
    cel.style.color = "white";
  }
  if(num === 2048) {
    cel.style.backgroundColor = "rgb(89, 89, 89)";
    cel.style.color = "white";
  }
}

function setSquares(){
   for(let i = 0; i < s.length; i++){
     s[i].textContent = "";
     s[i].style.backgroundColor = "white";
   }
}

function defaultNumbers(){
  nascosta.classList.add("hidden");
  const num1 = Math.floor(Math.random() * 16);
  let num2 = Math.floor(Math.random() * 16);

  while(num1 === num2){
    num2 = Math.floor(Math.random() * 16);
  }

  const numero = 2;
  s[num1].innerHTML = numero;
  setNumberSize(numero, s[num1]);
  setNumberColor(numero, s[num1]);

  s[num2].innerHTML = numero;
  setNumberSize(numero, s[num2]);
  setNumberColor(numero, s[num2]); 
}

defaultNumbers();

function changeArray(arr, arr_, is, oj, activate){

  for(let k = 0; k < 4; k++){

    arr[k].forEach((_,i) => {
      if(arr[k][i - 1] === arr[k][i]){
        arr[k][i - 1] = Number(arr[k][i]) + Number(arr[k][i - 1]);
        if(activate){
          score = score + Number(arr[k][i - 1]);
          scorePoints.textContent = `Score : ${score}`;
        }
        delete arr[k][i];
      }
    })
    arr_[k] = arr[k].filter( (e) => Number(e) !== null && Number(e) !== 0);
    arr_[k].length = 4;
    for(let i = 0; i < 4; i++) {
      if(arr_[k][i] === undefined) arr_[k][i] = "";
    }
    is[k] = ((oj.a()[k].length === arr_[k].length) && oj.a()[k].every((e, i) => e === arr_[k][i]));
    arr_.length = 0;
  }
  
}

////////////////////////////////////////////////////////////////////////////////

function mainEngine(obj, dir, cont, selectCoord, topLeft){

  const oj = obj();

  setSquares();

  let arr1 = oj.a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr2 = oj.a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr3 = oj.a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr4 = oj.a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr = [arr1, arr2, arr3, arr4];
  
  const arr1_demo = [...arr1];
  const arr2_demo = [...arr2];
  const arr3_demo = [...arr3];
  const arr4_demo = [...arr4];
  const arr_demo = [arr1_demo,arr2_demo,arr3_demo,arr4_demo];

  const dim_1 = 0;
  const dim_2 = arr1_demo.length;
  const dim_3 = arr1_demo.length + arr2_demo.length;
  const dim_4 = arr1_demo.length + arr2_demo.length + arr3_demo.length;
  const dim = [dim_1,dim_2,dim_3,dim_4];
  
  const arr_ = [];

  const x = main.getBoundingClientRect().left;
  const y = main.getBoundingClientRect().top;
  const coord = [x, y];

  const arrIndex = [];

  let count = 0;
  let countAsync = 0;

  const dirL_R_U_D = ["left", "right", "up", "down"];
  const dirT_L = ["left", "top"];  

  function check(variation,minPoint){
    return [(variation < minPoint), (variation > minPoint)];
  }

  let t;

  const arrS_1 = [];
  const arrS_2 = [];
  const arrS_3 = [];
  const arrS_4 = [];
  const arrS = [arrS_1,arrS_2,arrS_3,arrS_4];

  const is = [];

  ////////////////////////////////////////////////////////////////////

  changeArray(arr, arr_, is, oj, true);  

  const tru = [true, true, true, true];
  chiave = !((tru.length === is.length) && tru.every((e, i) => e === is[i]));

  ////////////////////////////////////////////////////////////////////////////////////////

  for(let k = 0; k < 4; k++){

    oj.a()[k].forEach( (e,i) => {
      if(e !== ""){
      const x1 = s[oj.positions(i,k)[0]].getBoundingClientRect().left;
      const y1 = s[oj.positions(i,k)[0]].getBoundingClientRect().top;
      coord[selectCoord] === x ? arrS[k].push(x1) : arrS[k].push(y1);
      const html = `<div class=moving-${dirL_R_U_D[dir]}${count}></div>`;
      main.insertAdjacentHTML("afterbegin", html);
      const mov = document.querySelector(`.moving-${dirL_R_U_D[dir]}${count}`);
      setNumberSize(Number(+e), mov);
      setNumberColor(Number(e), mov);
      mov.textContent = e;
      mov.style.fontFamily = "Roboto,Arial";
      mov.style.fontWeight = "bold";
      mov.style.display = "flex";
      mov.style.justifyContent = "center";
      mov.style.alignItems = "center";
      mov.style.position = "absolute";
      mov.style.width = `${s[0].clientWidth}px`;
      mov.style.height = `${s[0].clientWidth}px`;
      mov.style.top = `${Number(y1) - Number(y)}px`;
      mov.style.left = `${Number(x1) - Number(x)}px`;
      // mov.style.backgroundColor = "green";
      
      arrIndex.push(count);
      
      count++;
    }
    });

    arr_demo[k].forEach( (_,i) => {
      t = 0;
      let minPoint;

      function setIntervalEngine(num, position){

        const interval = setInterval(function(){
          
          t = t + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(coord[selectCoord]) - oj.sign()*t;
          minPoint = s[position].getBoundingClientRect()[dirT_L[topLeft]] - Number(coord[selectCoord]);
          document.querySelector(`.moving-${dirL_R_U_D[dir]}${i + dim[k]}`).style[dirT_L[topLeft]] = `${variation}px`;
      
          if(check(variation,minPoint)[cont]) {
            clearInterval(interval);
            document.querySelector(`.moving-${dirL_R_U_D[dir]}${i + dim[k]}`).remove();
            setNumberSize(Number(num), s[position]);
            setNumberColor(Number(num), s[position]);
            s[position].innerHTML = num;
            countAsync++;
            if(count === countAsync) {
              if(chiave) setTimeout(newRandomSpotNumber, timeRandomNum);
              if(!chiave) setTimeout(w = true, timeRandomNum);
            } 
          };
        },1);
      }
  
      if(arr_demo[k][i - 1] === "&" && arr_demo[k][i - 2] === "&"){

        setIntervalEngine((arr_demo[k][i] * 2), oj.positions(i,k)[2]);
          
      } else if(arr_demo[k][i - 1] === "&" && arr_demo[k][i] === arr_demo[k][i + 1]){

        setIntervalEngine(arr_demo[k][i + 1], oj.positions(i,k)[1]);
        arr_demo[k][i] = "&";

      } else if((arr_demo[k][i - 1] === "&") && (arr_demo[k][i + 1] !== arr_demo[k][i])){
          
        setIntervalEngine(arr_demo[k][i], oj.positions(i,k)[1]);
          
      } else if((arr_demo[k][i - 2] === "&") && (arr_demo[k][i - 1] !== arr_demo[k][i])){
          
        setIntervalEngine(arr_demo[k][i], oj.positions(i,k)[1]);
          
      } else if(arr_demo[k][i] === arr_demo[k][i - 1]){
          
        setIntervalEngine((arr_demo[k][i - 1] * 2), oj.positions(i,k)[1]);
        arr_demo[k][i] = "&";

      } else  {

        setIntervalEngine(arr_demo[k][i], oj.positions(i,k)[0]);
          
      }
    })
  } 
}

function gameOverEngine(){
  // Un possibile problema di quando premo i due tasti contemporaneamente é che il secondo tasto viene attivato subito dopo il primo ma i numeri non sono ancora stati impostati in quanto i numeri vengono impostati nel setInterval che é asyncronous invece la pressione del secondo tasto fa partire subito il codice del ceck game ma quando check game parte tutte le caselle sono ancora vuote perché di defaul ho impostato la funzione che cancella tutte le caselle per poi reimpostare i numeri ma la reimpostazione dei numeri é asyncronous
  const Obj_1 = setLeft();
  const Obj_2 = setRight();
  const Obj_3 = setUp();
  const Obj_4 = setDown();
  const Obj = [Obj_1, Obj_2, Obj_3, Obj_4];
  const arr_ = [];
  const is = [];
  const chiave = [];

  Obj.forEach( (e,i) => {
    let arr1 = e.a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
    let arr2 = e.a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
    let arr3 = e.a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
    let arr4 = e.a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
    const arr = [arr1, arr2, arr3, arr4];
    
    changeArray(arr, arr_, is, e, false);

    const tru = [true, true, true, true];
    let insetKey = !((tru.length === is.length) && tru.every((e, k) => e === is[k]));
    chiave.push(insetKey);
  })

  const check = [false, false, false, false];
  const tt = ((check.length === chiave.length) && check.every((e, i) => e === chiave[i]));

  const bb = [];
  s.forEach((_,i) => bb.push(s[i].textContent));

  return tt && (!bb.every((e) => e === ""));
}

function setLeft(){

  const obj = {

    a1:[s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent],
    a2:[s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent],
    a3:[s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent],
    a4:[s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent],

    a(){
      return [this.a1, this.a2, this.a3, this.a4];
    },

    pos: [0,4,8,12],

    positions(i,k){ 
      return [(i + this.pos[k]), (i - 1 + this.pos[k]), (i - 2 + this.pos[k])];
    },
  
    sign(){
      return 1;
    },

  }

  return obj;
}

function setRight(){

  const obj = {

    a1:[s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent].reverse(),
    a2:[s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent].reverse(),
    a3:[s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent].reverse(),
    a4:[s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent].reverse(),

    a(){
      return [this.a1, this.a2, this.a3, this.a4];
    },

    pos: [3,7,11,15],

    positions(i,k){ 
      return [(- i + this.pos[k]), (- i + 1 + this.pos[k]), (- i + 2 + this.pos[k])];
    },
  
    sign(){
      return -1;
    },

  }

  return obj;
}

function setUp(){

  const obj = {

    a1: [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent],
    a2: [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent],
    a3: [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent],
    a4: [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent],

    a(){
      return [this.a1, this.a2, this.a3, this.a4];
    },

    pos: [0,1,2,3],

    positions(i,k){ 
      return [(i*4 + this.pos[k]), ((i - 1)*4 + this.pos[k]), ((i - 2)*4 + this.pos[k])];
    },
  
    sign(){
      return 1;
    },

  }

  return obj;
}

function setDown(){

  const obj = {

    a1: [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent].reverse(),
    a2: [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent].reverse(),
    a3: [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent].reverse(),
    a4: [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent].reverse(),

    a(){
      return [this.a1, this.a2, this.a3, this.a4];
    },

    pos: [0,1,2,3],

    positions(i,k){ 
      return [(12 +  this.pos[k] -i*4), (12 + this.pos[k] -(i - 1)*4), (12 + this.pos[k] -(i - 2)*4)];
    },
  
    sign(){
      return -1;
    },

  }

  return obj;
}

//////////////////////////////////////////////////////////////////////

function newRandomSpotNumber(){
  const bb = [];
  s.forEach((_,i) => bb.push(s[i].textContent));

  if(bb.every((e) => e !== "")){


  } else {
    let num = Math.floor(Math.random() * 16);

    while(s[num].textContent !== ""){
      num = Math.floor(Math.random() * 16);
    }

    const numeri = [2, 4];
    const t = (Math.random() * 1);
    const numero = numeri[t > 0.8 ? 1 : 0];
    s[num].innerHTML = numero;
    setNumberSize(numero, s[num]);
    setNumberColor(numero, s[num]);
    w = true;

  }
}  

window.addEventListener("keydown", function (e) {
    e.preventDefault();

    if(w && interruttoreGenerale){

      w = false;

      if(gameOverEngine()) {
        nascosta.classList.remove("hidden");
        if(Number(score) > Number(best_score)) bestScore.innerHTML = `Best Score : ${score}`;
     }
     
     if(e.key === "ArrowLeft") {
       mainEngine(setLeft, 0, 0, 0, 0);
     }
     if(e.key === "ArrowRight") {
       mainEngine(setRight, 1, 1, 0, 0);
     }
     if(e.key === "ArrowUp") {
       mainEngine(setUp, 2, 0, 1, 1);
     }
     if(e.key === "ArrowDown") {
       mainEngine(setDown, 3, 1, 1, 1);
     }
   
    }
})

new_game.addEventListener("click", function(){
    if(Number(score) > Number(best_score)) {
      bestScore.innerHTML = `Best Score : ${score}`;
      best_score = score;
    }
    setSquares();
    defaultNumbers();
    scorePoints.innerHTML = "Score : 0";
    score = 0;
})

btn_under.addEventListener("click", function(){
   agree.classList.add("hidden-agree");
   base.classList.add("hidden-agree");
   new_game.style.zIndex = "400";
   quadrante.style.zIndex = "400";
   interruttoreGenerale = true;
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
})

new_game.addEventListener("touchstart",function(e){
  new_game.style.backgroundColor = "yellow";
}, {passive: true})


new_game.addEventListener("touchend",function(e){
  new_game.style.backgroundColor = "rgb(255, 236, 21)";
})





let touchArea = quadrante;
let output = "";

let finalX, initialX = 0;
let finalY, initialY = 0;

let isSwiped;

let events = {
  mouse:{
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch:{
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
}


let deviceType = "";

// Rileva se il device e touch o dexktop
const isTouchDevice = () => {
  try{
    // crateEvent crea un evento del tipo selezionato tra parentesi
    document.createEvent("TouchEvent");
    deviceType =  "touch";
    return true;
  }
  catch(e){
    deviceType =  "mouse";
    return false;
  }
}


// console.log(isTouchDevice());

let rectLeft = touchArea.getBoundingClientRect().left;
let rectTop = touchArea.getBoundingClientRect().top;

// console.log(rectLeft, rectTop);

const getXY = (e) =>{
  mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft; 
  // pageX ritorna le coordinate di dove il mouse e stato cliccato
  mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
}

isTouchDevice();


touchArea.addEventListener(events[deviceType].down, (event) => {
  isSwiped = true;
  initialX = (!isTouchDevice() ? event.pageX : event.touches[0].pageX) - rectLeft; 
  // console.log("X iniziale : " + initialX);
  initialY = (!isTouchDevice() ? event.pageY : event.touches[0].pageY) - rectTop;
  // console.log("Y iniziale : " + initialY);
}, {passive: true});



touchArea.addEventListener(events[deviceType].move, (event) => {
  if(isTouchDevice()) {
    event.preventDefault();
  }
  finalX = (!isTouchDevice() ? event.pageX : event.touches[0].pageX) - rectLeft;
  finalY = (!isTouchDevice() ? event.pageY : event.touches[0].pageY) - rectTop;
  
}, {passive: false});


touchArea.addEventListener(events[deviceType].up, (e) => {
  

  // console.log(output);
  // console.log("X finale : " + finalX);
  // console.log("Y finale : " + finalY);
  let diffX = finalX - initialX;
  let diffY = finalY - initialY;
  // console.log("diffX : " + diffX);
  // console.log("diffY : " + diffY);

  if(isSwiped){
    if(Math.abs(diffY) > Math.abs(diffX)){
      output = diffY > 0 ? "Down" : "Up";
    }
    else {
      output = diffX > 0 ? "Right" : "Left";
    }
  }

  if(w && interruttoreGenerale){

    w = false;

    if(gameOverEngine()) {
      nascosta.classList.remove("hidden");
      if(Number(score) > Number(best_score)) bestScore.innerHTML = `Best Score : ${score}`;
   }
   
   if(output === "Left") {
     mainEngine(setLeft, 0, 0, 0, 0);
   }
   if(output === "Right") {
     mainEngine(setRight, 1, 1, 0, 0);
   }
   if(output === "Up") {
     mainEngine(setUp, 2, 0, 1, 1);
   }
   if(output === "Down") {
     mainEngine(setDown, 3, 1, 1, 1);
   }
 
  }

  isSwiped = false;
}, {passive: false});

touchArea.addEventListener("mouseleave", () => {
  isSwiped = false;
});

window.onload = () => {
  isSwiped = false;
}




////////////////////////////////////////////////////////////////////

// OLD CODE

// const s = document.querySelectorAll(".s");
// const scorePoints = document.querySelector(".score");
// const bestScore = document.querySelector(".best-score")
// const new_game = document.querySelector(".new-game");
// const nascosta = document.querySelector(".overlay");
// const btn_under = document.querySelector(".btn-understood");
// const agree = document.querySelector(".agreement");
// const main = document.querySelector(".main-square");
// const base = document.querySelector(".base");
// let score = 0;
// let best_score = 0;
// let chiave = true;
// const freq = 20;
// const timeRandomNum = 50;
// let w = true;
// let interruttoreGenerale = false;

// function setNumberSize(num, cel){
//   if(num < 9 ) {
//     cel.style.fontSize = "60px";
//    } else if(num > 9 && num < 99) {
//     cel.style.fontSize = "50px";
//    } else {
//     cel.style.fontSize = "45px";
//    }
// }

// function setNumberColor(num, cel){

//   if(num === 2) {
//     cel.style.backgroundColor = "rgb(237,237, 237)";
//     cel.style.color = "grey";
//   }
//   if(num === 4) {
//     cel.style.backgroundColor = "rgb(225,225,225)";
//     cel.style.color = "grey";
//   }
//   if(num === 8) {
//     cel.style.backgroundColor = "rgb(249, 192, 135)";
//     cel.style.color = "white";
//   }
//   if(num === 16) {
//     cel.style.backgroundColor = "rgb(254, 167, 81)";
//     cel.style.color = "white";
//   }
//   if(num === 32) {
//     cel.style.backgroundColor = "rgb(255, 115, 115)";
//     cel.style.color = "white";
//   }
//   if(num === 64) {
//     cel.style.backgroundColor = "rgb(255, 72, 72)";
//     cel.style.color = "white";
//   }
//   if(num === 128) {
//     cel.style.backgroundColor = "rgb(234, 234, 125)";
//     cel.style.color = "white";
//   }
//   if(num === 256) {
//     cel.style.backgroundColor = "rgb(240, 240, 71)";
//     cel.style.color = "white";
//   }
//   if(num === 512) {
//     cel.style.backgroundColor = "rgb(254, 254, 0)";
//     cel.style.color = "white";
//   }
//   if(num === 1024) {
//     cel.style.backgroundColor = "rgb(149, 255, 149)";
//     cel.style.color = "white";
//   }
//   if(num === 2048) {
//     cel.style.backgroundColor = "rgb(3, 255, 3)";
//     cel.style.color = "white";
//   }
//   if(num > 2048) {
//     cel.style.backgroundColor = "rgb(89, 89, 89)";
//     cel.style.color = "white";
//   }
// }

// function setSquares(){
//    for(let i = 0; i < s.length; i++){
//      s[i].textContent = "";
//      s[i].style.backgroundColor = "white";
//    }
// }

// function defaultNumbers(){
//   nascosta.classList.add("hidden");
//   const num1 = Math.floor(Math.random() * 16);
//   let num2 = Math.floor(Math.random() * 16);

//   while(num1 === num2){
//     num2 = Math.floor(Math.random() * 16);
//   }

//   const numero = 2;
//   s[num1].innerHTML = numero;
//   setNumberSize(numero, s[num1]);
//   setNumberColor(numero, s[num1]);

//   s[num2].innerHTML = numero;
//   setNumberSize(numero, s[num2]);
//   setNumberColor(numero, s[num2]); 
// }

// defaultNumbers();

// function changeArray(arr, arr_, is, oj, activate){

//   for(let k = 0; k < 4; k++){

//     arr[k].forEach((_,i) => {
//       if(arr[k][i - 1] === arr[k][i]){
//         arr[k][i - 1] = Number(arr[k][i]) + Number(arr[k][i - 1]);
//         if(activate){
//           score = score + Number(arr[k][i - 1]);
//           scorePoints.textContent = `Score : ${score}`;
//         }
//         delete arr[k][i];
//       }
//     })
//     arr_[k] = arr[k].filter( (e) => Number(e) !== null && Number(e) !== 0);
//     arr_[k].length = 4;
//     for(let i = 0; i < 4; i++) {
//       if(arr_[k][i] === undefined) arr_[k][i] = "";
//     }
//     is[k] = ((oj.a()[k].length === arr_[k].length) && oj.a()[k].every((e, i) => e === arr_[k][i]));
//     arr_.length = 0;
//   }
  
// }

// ////////////////////////////////////////////////////////////////////////////////

// function mainEngine(obj, dir, cont, selectCoord, topLeft){

//   const oj = obj();

//   setSquares();

//   let arr1 = oj.a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr2 = oj.a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr3 = oj.a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr4 = oj.a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   const arr = [arr1, arr2, arr3, arr4];
  
//   const arr1_demo = [...arr1];
//   const arr2_demo = [...arr2];
//   const arr3_demo = [...arr3];
//   const arr4_demo = [...arr4];
//   const arr_demo = [arr1_demo,arr2_demo,arr3_demo,arr4_demo];

//   const dim_1 = 0;
//   const dim_2 = arr1_demo.length;
//   const dim_3 = arr1_demo.length + arr2_demo.length;
//   const dim_4 = arr1_demo.length + arr2_demo.length + arr3_demo.length;
//   const dim = [dim_1,dim_2,dim_3,dim_4];
  
//   const arr_ = [];

//   const x = main.getBoundingClientRect().left;
//   const y = main.getBoundingClientRect().top;
//   const coord = [x, y];

//   const arrIndex = [];

//   let count = 0;
//   let countAsync = 0;

//   dirL_R_U_D = ["left", "right", "up", "down"];
//   dirT_L = ["left", "top"];  

//   function check(variation,minPoint){
//     return [(variation < minPoint), (variation > minPoint)];
//   }

//   let t;

//   const arrS_1 = [];
//   const arrS_2 = [];
//   const arrS_3 = [];
//   const arrS_4 = [];
//   const arrS = [arrS_1,arrS_2,arrS_3,arrS_4];

//   const is = [];

//   ////////////////////////////////////////////////////////////////////

//   changeArray(arr, arr_, is, oj, true);  

//   const tru = [true, true, true, true];
//   chiave = !((tru.length === is.length) && tru.every((e, i) => e === is[i]));

//   ////////////////////////////////////////////////////////////////////////////////////////

//   for(let k = 0; k < 4; k++){

//     oj.a()[k].forEach( (e,i) => {
//       if(e !== ""){
//       const x1 = s[oj.positions(i,k)[0]].getBoundingClientRect().left;
//       const y1 = s[oj.positions(i,k)[0]].getBoundingClientRect().top;
//       coord[selectCoord] === x ? arrS[k].push(x1) : arrS[k].push(y1);
//       const html = `<div class=moving-${dirL_R_U_D[dir]}${count}></div>`;
//       main.insertAdjacentHTML("afterbegin", html);
//       const mov = document.querySelector(`.moving-${dirL_R_U_D[dir]}${count}`);
//       setNumberSize(Number(e), mov);
//       setNumberColor(Number(e), mov);
//       mov.textContent = e;
//       mov.style.fontFamily = "Roboto,Arial";
//       mov.style.fontWeight = "bold";
//       mov.style.display = "flex";
//       mov.style.justifyContent = "center";
//       mov.style.alignItems = "center";
//       mov.style.position = "absolute";
//       mov.style.width = "109px";
//       mov.style.height = "109px";
//       mov.style.top = `${Number(y1) - Number(y) - 8}px`;
//       mov.style.left = `${Number(x1) - Number(x) - 8}px`;
      
//       arrIndex.push(count);
      
//       count++;
//     }
//     });

//     arr_demo[k].forEach( (_,i) => {
//       t = 0;
//       let minPoint;

//       function setIntervalEngine(num, position){

//         const interval = setInterval(function(){
          
//           t = t + freq;
//           let variation = Number(`${arrS[k][i]}`) - Number(coord[selectCoord]) - 8 - oj.sign()*t;
//           minPoint = s[position].getBoundingClientRect()[dirT_L[topLeft]] - Number(coord[selectCoord]) - 8;
//           document.querySelector(`.moving-${dirL_R_U_D[dir]}${i + dim[k]}`).style[dirT_L[topLeft]] = `${variation}px`;
      
//           if(check(variation,minPoint)[cont]) {
//             clearInterval(interval);
//             document.querySelector(`.moving-${dirL_R_U_D[dir]}${i + dim[k]}`).remove();
//             setNumberSize(Number(num), s[position]);
//             setNumberColor(Number(num), s[position]);
//             s[position].innerHTML = num;
//             countAsync++;
//             if(count === countAsync) {
//               if(chiave) setTimeout(newRandomSpotNumber, timeRandomNum);
//               if(!chiave) setTimeout(w = true, timeRandomNum);
//             } 
//           };
//         },1);
//       }
  
//       if(arr_demo[k][i - 1] === "&" && arr_demo[k][i - 2] === "&"){

//         setIntervalEngine((arr_demo[k][i] * 2), oj.positions(i,k)[2]);
          
//       } else if(arr_demo[k][i - 1] === "&" && arr_demo[k][i] === arr_demo[k][i + 1]){

//         setIntervalEngine(arr_demo[k][i + 1], oj.positions(i,k)[1]);
//         arr_demo[k][i] = "&";

//       } else if((arr_demo[k][i - 1] === "&") && (arr_demo[k][i + 1] !== arr_demo[k][i])){
          
//         setIntervalEngine(arr_demo[k][i], oj.positions(i,k)[1]);
          
//       } else if((arr_demo[k][i - 2] === "&") && (arr_demo[k][i - 1] !== arr_demo[k][i])){
          
//         setIntervalEngine(arr_demo[k][i], oj.positions(i,k)[1]);
          
//       } else if(arr_demo[k][i] === arr_demo[k][i - 1]){
          
//         setIntervalEngine((arr_demo[k][i - 1] * 2), oj.positions(i,k)[1]);
//         arr_demo[k][i] = "&";

//       } else  {

//         setIntervalEngine(arr_demo[k][i], oj.positions(i,k)[0]);
          
//       }
//     })
//   } 
// }

// function gameOverEngine(){
//   // Un possibile problema di quando premo i due tasti contemporaneamente é che il secondo tasto viene attivato subito dopo il primo ma i numeri non sono ancora stati impostati in quanto i numeri vengono impostati nel setInterval che é asyncronous invece la pressione del secondo tasto fa partire subito il codice del ceck game ma quando check game parte tutte le caselle sono ancora vuote perché di defaul ho impostato la funzione che cancella tutte le caselle per poi reimpostare i numeri ma la reimpostazione dei numeri é asyncronous
//   const Obj_1 = setLeft();
//   const Obj_2 = setRight();
//   const Obj_3 = setUp();
//   const Obj_4 = setDown();
//   const Obj = [Obj_1, Obj_2, Obj_3, Obj_4];
//   const arr_ = [];
//   const is = [];
//   const chiave = [];

//   Obj.forEach( (e,i) => {
//     let arr1 = e.a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//     let arr2 = e.a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//     let arr3 = e.a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//     let arr4 = e.a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
//     const arr = [arr1, arr2, arr3, arr4];
    
//     changeArray(arr, arr_, is, e, false);

//     const tru = [true, true, true, true];
//     let insetKey = !((tru.length === is.length) && tru.every((e, k) => e === is[k]));
//     chiave.push(insetKey);
//   })

//   const check = [false, false, false, false];
//   const tt = ((check.length === chiave.length) && check.every((e, i) => e === chiave[i]));

//   const bb = [];
//   s.forEach((_,i) => bb.push(s[i].textContent));

//   return tt && (!bb.every((e) => e === ""));
// }

// function setLeft(){

//   const obj = {

//     a1:[s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent],
//     a2:[s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent],
//     a3:[s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent],
//     a4:[s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent],

//     a(){
//       return [this.a1, this.a2, this.a3, this.a4];
//     },

//     pos: [0,4,8,12],

//     positions(i,k){ 
//       return [(i + this.pos[k]), (i - 1 + this.pos[k]), (i - 2 + this.pos[k])];
//     },
  
//     sign(){
//       return 1;
//     },

//   }

//   return obj;
// }

// function setRight(){

//   const obj = {

//     a1:[s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent].reverse(),
//     a2:[s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent].reverse(),
//     a3:[s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent].reverse(),
//     a4:[s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent].reverse(),

//     a(){
//       return [this.a1, this.a2, this.a3, this.a4];
//     },

//     pos: [3,7,11,15],

//     positions(i,k){ 
//       return [(- i + this.pos[k]), (- i + 1 + this.pos[k]), (- i + 2 + this.pos[k])];
//     },
  
//     sign(){
//       return -1;
//     },

//   }

//   return obj;
// }

// function setUp(){

//   const obj = {

//     a1: [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent],
//     a2: [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent],
//     a3: [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent],
//     a4: [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent],

//     a(){
//       return [this.a1, this.a2, this.a3, this.a4];
//     },

//     pos: [0,1,2,3],

//     positions(i,k){ 
//       return [(i*4 + this.pos[k]), ((i - 1)*4 + this.pos[k]), ((i - 2)*4 + this.pos[k])];
//     },
  
//     sign(){
//       return 1;
//     },

//   }

//   return obj;
// }

// function setDown(){

//   const obj = {

//     a1: [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent].reverse(),
//     a2: [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent].reverse(),
//     a3: [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent].reverse(),
//     a4: [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent].reverse(),

//     a(){
//       return [this.a1, this.a2, this.a3, this.a4];
//     },

//     pos: [0,1,2,3],

//     positions(i,k){ 
//       return [(12 +  this.pos[k] -i*4), (12 + this.pos[k] -(i - 1)*4), (12 + this.pos[k] -(i - 2)*4)];
//     },
  
//     sign(){
//       return -1;
//     },

//   }

//   return obj;
// }

// //////////////////////////////////////////////////////////////////////

// function newRandomSpotNumber(){
//   const bb = [];
//   s.forEach((_,i) => bb.push(s[i].textContent));

//   if(bb.every((e) => e !== "")){


//   } else {
//     let num = Math.floor(Math.random() * 16);

//     while(s[num].textContent !== ""){
//       num = Math.floor(Math.random() * 16);
//     }

//     const numeri = [2, 4];
//     const t = (Math.random() * 1);
//     const numero = numeri[t > 0.8 ? 1 : 0];
//     s[num].innerHTML = numero;
//     setNumberSize(numero, s[num]);
//     setNumberColor(numero, s[num]);
//     w = true;

//   }
//   }  

// window.addEventListener("keydown", function (e) {
//     e.preventDefault();

//     if(w && interruttoreGenerale){

//       w = false;

//       if(gameOverEngine()) {
//         nascosta.classList.remove("hidden");
//         if(Number(score) > Number(best_score)) bestScore.innerHTML = `Best Score : ${score}`;
//      }
     
//      if(e.key === "ArrowLeft") {
//        mainEngine(setLeft, 0, 0, 0, 0);
//      }
//      if(e.key === "ArrowRight") {
//        mainEngine(setRight, 1, 1, 0, 0);
//      }
//      if(e.key === "ArrowUp") {
//        mainEngine(setUp, 2, 0, 1, 1);
//      }
//      if(e.key === "ArrowDown") {
//        mainEngine(setDown, 3, 1, 1, 1);
//      }
   
//     }
//   })

// new_game.addEventListener("click", function(){
//     if(Number(score) > Number(best_score)) {
//       bestScore.innerHTML = `Best Score : ${score}`;
//       best_score = score;
//     }
//     setSquares();
//     defaultNumbers();
//     scorePoints.innerHTML = "Score : 0";
//     score = 0;
// })

// btn_under.addEventListener("click", function(){
//    agree.classList.add("hidden-agree");
//    base.classList.add("hidden-agree");
//    interruttoreGenerale = true;
// })








////////////////////////////////////////////////////////////////////////////////













// const s = document.querySelectorAll(".s");
// const scorePoints = document.querySelector(".score");
// const bestScore = document.querySelector(".best-score")
// const new_game = document.querySelector(".new-game");
// const nascosta = document.querySelector(".overlay");
// const btn_under = document.querySelector(".btn-understood");
// const agree = document.querySelector(".agreement");
// const main = document.querySelector(".main-square");
// let score = 0;
// let best_score = 0;
// let chiave = true;
// const freq = 7;
// let w = true;


// function setNumberSize(num, cel){
//   if(num < 9 ) {
//     cel.style.fontSize = "60px";
//    } else if(num > 9 && num < 99) {
//     cel.style.fontSize = "50px";
//    } else {
//     cel.style.fontSize = "45px";
//    }
// }

// function setNumberColor(num, cel){
//   if(num === 0) {
//     // cel.textContent = "";
//     cel.style.backgroundColor = "white";
//     cel.style.color = "white";

//   }
//   if(num === 2) {
//     cel.style.backgroundColor = "rgb(237,237, 237)";
//     cel.style.color = "grey";
//   }
//   if(num === 4) {
//     cel.style.backgroundColor = "rgb(225,225,225)";
//     cel.style.color = "grey";
//   }
//   if(num === 8) {
//     cel.style.backgroundColor = "rgb(249, 192, 135)";
//     cel.style.color = "white";
//   }
//   if(num === 16) {
//     cel.style.backgroundColor = "rgb(254, 167, 81)";
//     cel.style.color = "white";
//   }
//   if(num === 32) {
//     cel.style.backgroundColor = "rgb(255, 115, 115)";
//     cel.style.color = "white";
//   }
//   if(num === 64) {
//     cel.style.backgroundColor = "rgb(255, 72, 72)";
//     cel.style.color = "white";
//   }
//   if(num === 128) {
//     cel.style.backgroundColor = "rgb(234, 234, 125)";
//     cel.style.color = "white";
//   }
//   if(num === 256) {
//     cel.style.backgroundColor = "rgb(240, 240, 71)";
//     cel.style.color = "white";
//   }
//   if(num === 512) {
//     cel.style.backgroundColor = "rgb(254, 254, 0)";
//     cel.style.color = "white";
//   }
//   if(num === 1024) {
//     cel.style.backgroundColor = "rgb(149, 255, 149)";
//     cel.style.color = "white";
//   }
//   if(num === 2048) {
//     cel.style.backgroundColor = "rgb(3, 255, 3)";
//     cel.style.color = "white";
//   }
//   if(num > 2048) {
//     cel.style.backgroundColor = "rgb(89, 89, 89)";
//     cel.style.color = "white";
//   }
// }

// function setSquares(){
//    for(let i = 0; i < s.length; i++){
//      s[i].textContent = "";
//      s[i].style.backgroundColor = "white";
//    }
// }

// function defaultNumbers(){
//   nascosta.classList.add("hidden");
//   const num1 = Math.floor(Math.random() * 16);
//   let num2 = Math.floor(Math.random() * 16);

//   while(num1 === num2){
//     num2 = Math.floor(Math.random() * 16);
//   }

//   const numero = 2;
//   s[num1].innerHTML = numero;
//   setNumberSize(numero, s[num1]);
//   setNumberColor(numero, s[num1]);

//   s[num2].innerHTML = numero;
//   setNumberSize(numero, s[num2]);
//   setNumberColor(numero, s[num2]); 
// }

// defaultNumbers();

// ////////////////////////////////////////////////////////////////////////////////

// function mainEngine(){

  
// }


// function setLeft(){

  
  
//   let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent];
//   let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent];
//   let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent];
//   let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent];
//   const a = [a1, a2, a3, a4];

//   w = false;

//   setSquares();

//   let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   const arr = [arr1, arr2, arr3, arr4];
  
//   const arr1_demo = [...arr1];
//   const arr2_demo = [...arr2];
//   const arr3_demo = [...arr3];
//   const arr4_demo = [...arr4];
//   const arr_demo = [arr1_demo,arr2_demo,arr3_demo,arr4_demo];

//   const dim_1 = 0;
//   const dim_2 = arr1_demo.length;
//   const dim_3 = arr1_demo.length + arr2_demo.length;
//   const dim_4 = arr1_demo.length + arr2_demo.length + arr3_demo.length;
//   const dim = [dim_1,dim_2,dim_3,dim_4];
  
//   const arr_ = [];

//   const x = main.getBoundingClientRect().left;
//   const y = main.getBoundingClientRect().top;
//   const arrIndex = [];
//   let count = 0;

//   let t_1 = 0;
//   let t_2 = 0;
//   let t_3 = 0;
//   let t_4 = 0;
//   const t = [t_1,t_2,t_3,t_4];

//   const arrS_1 = [];
//   const arrS_2 = [];
//   const arrS_3 = [];
//   const arrS_4 = [];
//   const arrS = [arrS_1,arrS_2,arrS_3,arrS_4];

  
//   let is_same_1;
//   let is_same_2;
//   let is_same_3;
//   let is_same_4;
//   const is = [is_same_1, is_same_2, is_same_3, is_same_4];

//   const pos = [0,4,8,12];

  

//  ////////////////////////////////////////////////////////////////
  

//   for(let k = 0; k < 4; k++){

//     arr[k].forEach((_,i) => {
//       if(arr[k][i - 1] === arr[k][i]){
//         arr[k][i - 1] = Number(arr[k][i]) + Number(arr[k][i - 1]);
//         score = score + Number(arr[k][i - 1]);
//         scorePoints.textContent = `Score : ${score}`;
//         delete arr[k][i];
//         // arr[k][i] = "&";
//       }
//     })

//     // console.log(`arr${k} : ${arr[k]}`);
  
//     arr_[k] = arr[k].filter( (e) => Number(e) !== null && Number(e) !== 0);
//     arr_[k].length = 4;
//     for(let i = 0; i < 4; i++) {
//       if(arr_[k][i] === undefined) arr_[k][i] = "";
//     }
//     is[k] = ((a[k].length === arr_[k].length) && a[k].every((e, i) => e === arr_[k][i]));
//     }
    

//   const tru = [true, true, true, true];
//   const is_same_5 = ((tru.length === is.length) && tru.every((e, i) => e === is[i]));
//   chiave = !is_same_5;
//   console.log("Chiave : " + chiave);
//   if(chiave === false) w = true;




//   // arr_[0].forEach( (e,i) => {
//   //   // setNumberSize(Number(e), s[i]);
//   //   setNumberColor(Number(0), s[i]);
//   //   s[i].innerHTML = e;
//   // })

//   // arr_[1].forEach( (e,i) => {
//   //   // setNumberSize(Number(e), s[i + 4]);
//   //   setNumberColor(Number(0), s[i + 4]);
//   //   s[i + 4].innerHTML = e;
//   // })

//   // arr_[2].forEach( (e,i) => {
//   //   // setNumberSize(Number(e), s[i + 8]);
//   //   setNumberColor(Number(0), s[i + 8]);
//   //   s[i + 8].innerHTML = e;
//   // })

//   // arr_[3].forEach( (e,i) => {
//   //   // setNumberSize(Number(e), s[i + 12]);
//   //   setNumberColor(Number(0), s[i + 12]);
//   //   s[i + 12].innerHTML = e;
//   // })


//   for(let k = 0; k < 4; k++){

//     a[k].forEach( (e,i) => {
//       if(e !== ""){
//       const x1 = s[i + pos[k]].getBoundingClientRect().left;
//       arrS[k].push(x1);
//       const y1 = s[i + pos[k]].getBoundingClientRect().top;
//       const html = `<div class=moving-l${count}></div>`;
//       main.insertAdjacentHTML("afterbegin", html);
//       const mov = document.querySelector(`.moving-l${count}`);
//       setNumberSize(Number(e), mov);
//       setNumberColor(Number(e), mov);
//       mov.textContent = e;
//       mov.style.fontFamily = "Roboto,Arial";
//       mov.style.fontWeight = "bold";
//       mov.style.display = "flex";
//       mov.style.justifyContent = "center";
//       mov.style.alignItems = "center";
//       mov.style.position = "absolute";
//       mov.style.backgroundColor.zIndex = "500";
//       mov.style.width = "109px";
//       mov.style.height = "109px";
//       mov.style.top = `${Number(y1) - Number(y) - 8}px`;
//       mov.style.left = `${Number(x1) - Number(x) - 8}px`;
      
//       arrIndex.push(count);
      
//       count++;
//     }
//     });

//     arr_demo[k].forEach( (_,i) => {

//       t[k] = 0;
//       let minPoint = s[i + pos[k]].getBoundingClientRect().left - Number(x) - 8;
//       // console.log(minPoint);

//         if(arr_demo[k][i - 1] === "&" && arr_demo[k][i - 2] === "&"){
//           // console.log("Partito l'if : " + arr_demo[k][i]);
//             const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
//             minPoint = s[i - 2 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
//             document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-l${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i] * 2), s[i - 2 + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i] * 2), s[i - 2 + pos[k]]);
//               s[i - 2 + pos[k]].innerHTML = arr_demo[k][i] * 2;
//             };
//           },1);
//         } else if(arr_demo[k][i - 1] === "&" && arr_demo[k][i] === arr_demo[k][i + 1]){
//           // console.log("Partito l'else if 1 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
//             minPoint = s[i - 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
//             document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-l${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i + 1]), s[i - 1 + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i + 1]), s[i - 1 + pos[k]]);
//               s[i - 1 + pos[k]].innerHTML = arr_demo[k][i + 1];
//             };
//           },1);
//           arr_demo[k][i] = "&";
//         } else if((arr_demo[k][i - 1] === "&") && (arr_demo[k][i + 1] !== arr_demo[k][i])){
//           // console.log("Partito l'else if 2 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
//             minPoint = s[i - 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
//             document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-l${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[i - 1 + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i]), s[i - 1 + pos[k]]);
//               s[i - 1 + pos[k]].innerHTML = arr_demo[k][i];
//             };
//           },1);
//         } else if((arr_demo[k][i - 2] === "&") && (arr_demo[k][i - 1] !== arr_demo[k][i])){
//           // console.log("Partito l'else if 3 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
//             minPoint = s[i - 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
//             document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-l${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[i - 1 + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i]), s[i - 1 + pos[k]]);
//               s[i - 1 + pos[k]].innerHTML = arr_demo[k][i];
//             };
//           },1);
//         } else if(arr_demo[k][i] === arr_demo[k][i - 1]){
//           // console.log("Partito l'else if 4 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
//             minPoint = s[i - 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
//             document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-l${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i - 1] * 2), s[i - 1 + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i - 1] * 2), s[i - 1 + pos[k]]);
//               s[i - 1 + pos[k]].innerHTML = arr_demo[k][i - 1] * 2;
              
//             };
//           },1);
//           arr_demo[k][i] = "&";
//         } else  {
//           // console.log("Partito l'else : " + arr_demo[k][i]);
//             const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
//             document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-l${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[i + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i]), s[i + pos[k]]);
//               s[i + pos[k]].innerHTML = arr_demo[k][i];
//             };
//             },1);
//             }

//     })
 
//   }
  
// }

// function setLeftDemo(){
//   let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent];
//   let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent];
//   let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent];
//   let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent];
//   let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);

//   arr1.forEach((_,i) => {
//     if(arr1[i - 1] === arr1[i]){
//       arr1[i - 1] = Number(arr1[i]) + Number(arr1[i - 1]);
//       delete arr1[i];
//     }
//   })

//   const arr1_1 = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_1.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_1[i] === undefined) arr1_1[i] = "";
//   }
//   const is_same_1 = ((a1.length == arr1_1.length) && a1.every((e, i) => e === arr1_1[i]));

//   arr2.forEach((_,i) => {
//     if(arr2[i - 1] === arr2[i]){
//       arr2[i - 1] = Number(arr2[i]) + Number(arr2[i - 1]);
//       delete arr2[i];
//     }
//   })

//   const arr1_2 = arr2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_2.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_2[i] === undefined) arr1_2[i] = "";
//   }
//   const is_same_2 = ((a2.length == arr1_2.length) && a2.every((e, i) => e === arr1_2[i]));
  

//   arr3.forEach((_,i) => {
//     if(arr3[i - 1] === arr3[i]){
//       arr3[i - 1] = Number(arr3[i]) + Number(arr3[i - 1]);
//       delete arr3[i];
//     }
//   })

//   const arr1_3 = arr3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_3.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_3[i] === undefined) arr1_3[i] = "";
//   }
//   const is_same_3 = ((a3.length == arr1_3.length) && a3.every((e, i) => e === arr1_3[i]));
  

//   arr4.forEach((_,i) => {
//     if(arr4[i - 1] === arr4[i]){
//       arr4[i - 1] = Number(arr4[i]) + Number(arr4[i - 1]);
//       delete arr4[i];
//     }
//   })

//   const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_4.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_4[i] === undefined) arr1_4[i] = "";
//   }
//   const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));

//   const tru = [true, true, true, true];
//   const is_same_ = [is_same_1, is_same_2, is_same_3, is_same_4];
//   const is_same_5 = ((tru.length == is_same_.length) && tru.every((e, i) => e === is_same_[i]));
//   return !is_same_5;
// }

// function setRight(){

//   w = false;

//   let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent].reverse();
//   let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent].reverse();
//   let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent].reverse();
//   let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent].reverse();
//   const a = [a1, a2, a3, a4];

//   setSquares();

//   let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   const arr = [arr1, arr2, arr3, arr4];
  
//   const arr1_demo = [...arr1];
//   const arr2_demo = [...arr2];
//   const arr3_demo = [...arr3];
//   const arr4_demo = [...arr4];
//   const arr_demo = [arr1_demo,arr2_demo,arr3_demo,arr4_demo];

//   const dim_1 = 0;
//   const dim_2 = arr1_demo.length;
//   const dim_3 = arr1_demo.length + arr2_demo.length;
//   const dim_4 = arr1_demo.length + arr2_demo.length + arr3_demo.length;
//   const dim = [dim_1,dim_2,dim_3,dim_4];
  
//   const arr_ = [];

//   const x = main.getBoundingClientRect().left;
//   const y = main.getBoundingClientRect().top;
//   const arrIndex = [];
//   let count = 0;

//   let t_1 = 0;
//   let t_2 = 0;
//   let t_3 = 0;
//   let t_4 = 0;
//   const t = [t_1,t_2,t_3,t_4];

//   const arrS_1 = [];
//   const arrS_2 = [];
//   const arrS_3 = [];
//   const arrS_4 = [];
//   const arrS = [arrS_1,arrS_2,arrS_3,arrS_4];

  
//   let is_same_1;
//   let is_same_2;
//   let is_same_3;
//   let is_same_4;
//   const is = [is_same_1, is_same_2, is_same_3, is_same_4];
//   const pos = [3,7,11,15]; 

//   //////////////////////////////////////////////////////////////////

//   for(let k = 0; k < 4; k++){

//     arr[k].forEach((_,i) => {
//       if(arr[k][i - 1] === arr[k][i]){
//         arr[k][i - 1] = Number(arr[k][i]) + Number(arr[k][i - 1]);
//         score = score + Number(arr[k][i - 1]);
//         scorePoints.textContent = `Score : ${score}`;
//         delete arr[k][i];
//       }
//     })
  
//     arr_[k] = arr[k].filter( (e) => Number(e) !== null && Number(e) !== 0);
//     arr_[k].length = 4;
//     for(let i = 0; i < 4; i++) {
//       if(arr_[k][i] === undefined) arr_[k][i] = "";
//     }
//     is[k] = ((a[k].length === arr_[k].length) && a[k].every((e, i) => e === arr_[k][i]));
//   }

//   const tru = [true, true, true, true];
//   const is_same_5 = ((tru.length === is.length) && tru.every((e, i) => e === is[i]));
//   chiave = !is_same_5;
//   if(chiave === false) w = true;


//   // arr_[0].forEach( (e,i) => {
//   //   // setNumberSize(Number(e), s[i]);
//   //   setNumberColor(Number(0), s[- i + 3]);
//   //   s[- i + 3].innerHTML = e;
//   // })

//   // console.log("arr1 : " + arr1);
//   // console.log("arr_[0] : " + arr_[0]);

//   // arr_[1].forEach( (e,i) => {
//   //   // setNumberSize(Number(e), s[i + 4]);
//   //   setNumberColor(Number(0), s[- i + 7]);
//   //   s[- i + 7].innerHTML = e;
//   // })

//   // arr_[2].forEach( (e,i) => {
//   //   // setNumberSize(Number(e), s[i + 8]);
//   //   setNumberColor(Number(0), s[- i + 11]);
//   //   s[- i + 11].innerHTML = e;
//   // })

//   // arr_[3].forEach( (e,i) => {
//   //   // setNumberSize(Number(e), s[i + 12]);
//   //   setNumberColor(Number(0), s[- i + 15]);
//   //   s[- i + 15].innerHTML = e;
//   // })




//   for(let k = 0; k < 4; k++){

//     a[k].forEach( (e,i) => {
//       if(e !== ""){
//       const x1 = s[ - i + pos[k]].getBoundingClientRect().left;
//       arrS[k].push(x1);
//       const y1 = s[ - i + pos[k]].getBoundingClientRect().top;
//       const html = `<div class=moving-r${count}></div>`;
//       main.insertAdjacentHTML("afterbegin", html);
//       const mov = document.querySelector(`.moving-r${count}`);
//       setNumberSize(Number(e), mov);
//       setNumberColor(Number(e), mov);
//       mov.textContent = e;
//       mov.style.fontFamily = "Roboto,Arial";
//       mov.style.fontWeight = "bold";
//       mov.style.display = "flex";
//       mov.style.justifyContent = "center";
//       mov.style.alignItems = "center";
//       mov.style.position = "absolute";
//       mov.style.backgroundColor.zIndex = "500";
//       mov.style.width = "109px";
//       mov.style.height = "109px";
//       mov.style.top = `${Number(y1) - Number(y) - 8}px`;
//       mov.style.left = `${Number(x1) - Number(x) - 8}px`;
      
//       arrIndex.push(count);
      
//       count++;
//     }
//     });
  
  
  
//     arr_demo[k].forEach( (_,i) => {
  
//       t[k] = 0;
//       let minPoint = s[ - i + pos[k]].getBoundingClientRect().left - Number(x) - 8;
  
//         if(arr_demo[k][i - 1] === "&" && arr_demo[k][i - 2] === "&"){
//           console.log("Partito l'if : " + arr_demo[k][i]);
//             const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
//             minPoint = s[ - i + 2  + pos[k]].getBoundingClientRect().left - Number(x) - 8;
//             document.querySelector(`.moving-r${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-r${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i] * 2), s[ - i + 2 + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i] * 2), s[ - i + 2 + pos[k]]);
//               s[ - i + 2 + pos[k]].innerHTML = arr_demo[k][i] * 2;
//             };
//           },1);
//         } else if(arr_demo[k][i - 1] === "&" && arr_demo[k][i] === arr_demo[k][i + 1]){
//           console.log("Partito l'else if 1 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
//             minPoint = s[ - i + 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
//             document.querySelector(`.moving-r${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-r${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i + 1]), s[ - i + 1 + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i + 1]), s[ - i + 1 + pos[k]]);
//               s[ - i + 1 + pos[k]].innerHTML = arr_demo[k][i + 1];
//             };
//           },1);
//           arr_demo[k][i] = "&";
//         } else if((arr_demo[k][i - 1] === "&") && (arr_demo[k][i + 1] !== arr_demo[k][i])){
//           // console.log("Partito l'else if 2 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
//             minPoint = s[ - i + 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
//             document.querySelector(`.moving-r${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-r${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[ - i + 1 + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i]), s[ - i + 1 + pos[k]]);
//               s[ - i + 1 + pos[k]].innerHTML = arr_demo[k][i];
//             };
//           },1);
//         } else if((arr_demo[k][i - 2] === "&") && (arr_demo[k][i - 1] !== arr_demo[k][i])){
//           console.log("Partito l'else if 3 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
//             minPoint = s[ - i + 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
//             document.querySelector(`.moving-r${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-r${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[ - i + 1 + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i]), s[ - i + 1 + pos[k]]);
//               s[ - i + 1 + pos[k]].innerHTML = arr_demo[k][i];
//             };
//           },1);
//         } else if(arr_demo[k][i] === arr_demo[k][i - 1]){
//           console.log("Partito l'else if 4 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
//             minPoint = s[ - i + 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
//             document.querySelector(`.moving-r${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-r${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i - 1] * 2), s[ - i + 1 + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i - 1] * 2), s[ - i + 1 + pos[k]]);
//               s[ - i + 1 + pos[k]].innerHTML = arr_demo[k][i - 1] * 2;
              
//             };
//           },1);
//           arr_demo[k][i] = "&";
//         } else  {
//           console.log("Partito l'else : " + arr_demo[k][i]);
//             const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
//             document.querySelector(`.moving-r${i + dim[k]}`).style.left = `${variation}px`;
  
//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-r${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[ - i + pos[k]]);
//               setNumberColor(Number(arr_demo[k][i]), s[ - i + pos[k]]);
//               s[ - i + pos[k]].innerHTML = arr_demo[k][i];
//             };
//             },1);
//         }
      
  
//     })
   
//    }

// }

// function setRightDemo(){
//   let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent].reverse();
//   let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent].reverse();
//   let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent].reverse();
//   let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent].reverse();
//   let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);

//   arr1.forEach((_,i) => {
//     if(arr1[i - 1] === arr1[i]){
//       arr1[i - 1] = Number(arr1[i]) + Number(arr1[i - 1]);
//       delete arr1[i];
//     }
//   })

//   const arr1_1 = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_1.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_1[i] === undefined) arr1_1[i] = "";
//   }
//   const is_same_1 = ((a1.length == arr1_1.length) && a1.every((e, i) => e === arr1_1[i]));

//   arr2.forEach((_,i) => {
//     if(arr2[i - 1] === arr2[i]){
//       arr2[i - 1] = Number(arr2[i]) + Number(arr2[i - 1]);
//       delete arr2[i];
//     }
//   })

//   const arr1_2 = arr2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_2.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_2[i] === undefined) arr1_2[i] = "";
//   }
//   const is_same_2 = ((a2.length == arr1_2.length) && a2.every((e, i) => e === arr1_2[i]));

//   arr3.forEach((_,i) => {
//     if(arr3[i - 1] === arr3[i]){
//       arr3[i - 1] = Number(arr3[i]) + Number(arr3[i - 1]);
//       delete arr3[i]
//     }
//   })

//   const arr1_3 = arr3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_3.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_3[i] === undefined) arr1_3[i] = "";
//   }
//   const is_same_3 = ((a3.length == arr1_3.length) && a3.every((e, i) => e === arr1_3[i]));

//   arr4.forEach((_,i) => {
//     if(arr4[i - 1] === arr4[i]){
//       arr4[i - 1] = Number(arr4[i]) + Number(arr4[i - 1]);
//       delete arr4[i];
//     }
//   })

//   const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_4.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_4[i] === undefined) arr1_4[i] = "";
//   }
//   const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));

//   const tru = [true, true, true, true];
//   const is_same = [is_same_1, is_same_2, is_same_3, is_same_4];
//   const is_same_5 = ((tru.length == is_same.length) && tru.every((e, i) => e === is_same[i]));
//   return !is_same_5;
// }

// function setUp(){
  
//   w = false;
  
//   let a1 = [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent];
//   let a2 = [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent];
//   let a3 = [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent];
//   let a4 = [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent];
//   const a = [a1, a2, a3, a4];

//   setSquares();

//   let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   const arr = [arr1, arr2, arr3, arr4];
  
//   const arr1_demo = [...arr1];
//   const arr2_demo = [...arr2];
//   const arr3_demo = [...arr3];
//   const arr4_demo = [...arr4];
//   const arr_demo = [arr1_demo,arr2_demo,arr3_demo,arr4_demo];

//   const dim_1 = 0;
//   const dim_2 = arr1_demo.length;
//   const dim_3 = arr1_demo.length + arr2_demo.length;
//   const dim_4 = arr1_demo.length + arr2_demo.length + arr3_demo.length;
//   const dim = [dim_1,dim_2,dim_3,dim_4];
  
//   const arr_ = [];

//   const x = main.getBoundingClientRect().left;
//   const y = main.getBoundingClientRect().top;
//   const arrIndex = [];
//   let count = 0;

//   let t_1 = 0;
//   let t_2 = 0;
//   let t_3 = 0;
//   let t_4 = 0;
//   const t = [t_1,t_2,t_3,t_4];

//   const arrS_1 = [];
//   const arrS_2 = [];
//   const arrS_3 = [];
//   const arrS_4 = [];
//   const arrS = [arrS_1,arrS_2,arrS_3,arrS_4];

  
//   let is_same_1;
//   let is_same_2;
//   let is_same_3;
//   let is_same_4;
//   const is = [is_same_1, is_same_2, is_same_3, is_same_4];

//   const pos = [0,1,2,3];

  

//  ////////////////////////////////////////////////////////////////
  

//   for(let k = 0; k < 4; k++){

//     arr[k].forEach((_,i) => {
//       if(arr[k][i - 1] === arr[k][i]){
//         arr[k][i - 1] = Number(arr[k][i]) + Number(arr[k][i - 1]);
//         score = score + Number(arr[k][i - 1]);
//         scorePoints.textContent = `Score : ${score}`;
//         delete arr[k][i];
//         // arr[k][i] = "&";
//       }
//     })

//     // console.log(`arr${k} : ${arr[k]}`);
  
//     arr_[k] = arr[k].filter( (e) => Number(e) !== null && Number(e) !== 0);
//     arr_[k].length = 4;
//     for(let i = 0; i < 4; i++) {
//       if(arr_[k][i] === undefined) arr_[k][i] = "";
//     }
//     is[k] = ((a[k].length === arr_[k].length) && a[k].every((e, i) => e === arr_[k][i]));
//     }
    

//   const tru = [true, true, true, true];
//   const is_same_5 = ((tru.length === is.length) && tru.every((e, i) => e === is[i]));
//   chiave = !is_same_5;
//   console.log("Chiave : " + chiave);
//   if(chiave === false) w = true;


//   for(let k = 0; k < 4; k++){

//     a[k].forEach( (e,i) => {
//       if(e !== ""){
//       const x1 = s[i*4 + k].getBoundingClientRect().left;
//       const y1 = s[i*4 + k].getBoundingClientRect().top;
//       arrS[k].push(y1);
//       const html = `<div class=moving-u${count}></div>`;
//       main.insertAdjacentHTML("afterbegin", html);
//       const mov = document.querySelector(`.moving-u${count}`);
//       setNumberSize(Number(e), mov);
//       setNumberColor(Number(e), mov);
//       mov.textContent = e;
//       mov.style.fontFamily = "Roboto,Arial";
//       mov.style.fontWeight = "bold";
//       mov.style.display = "flex";
//       mov.style.justifyContent = "center";
//       mov.style.alignItems = "center";
//       mov.style.position = "absolute";
//       mov.style.backgroundColor.zIndex = "500";
//       mov.style.width = "109px";
//       mov.style.height = "109px";
//       mov.style.top = `${Number(y1) - Number(y) - 8}px`;
//       mov.style.left = `${Number(x1) - Number(x) - 8}px`;
      
//       arrIndex.push(count);
      
//       count++;
//     }
//     });

//     arr_demo[k].forEach( (_,i) => {

//       t[k] = 0;
//       let minPoint = s[i*4 + k].getBoundingClientRect().top - Number(y) - 8;
//       // console.log(minPoint);
  
//         if(arr_demo[k][i - 1] === "&" && arr_demo[k][i - 2] === "&"){
//           // console.log("Partito l'if : " + arr_demo[k][i]);
//             const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
//             minPoint = s[(i - 2)*4 + k].getBoundingClientRect().top - Number(y) - 8;
//             document.querySelector(`.moving-u${i + dim[k]}`).style.top = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-u${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i] * 2), s[(i - 2)*4 + k]);
//               setNumberColor(Number(arr_demo[k][i] * 2), s[(i - 2)*4 + k]);
//               s[(i - 2)*4 + k].innerHTML = arr_demo[k][i] * 2;
//             };
//           },1);
//         } else if(arr_demo[k][i - 1] === "&" && arr_demo[k][i] === arr_demo[k][i + 1]){
//           // console.log("Partito l'else if 1 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
//             minPoint = s[(i - 1)*4 + k].getBoundingClientRect().top - Number(y) - 8;
//             document.querySelector(`.moving-u${i + dim[k]}`).style.top = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-u${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i + 1]), s[(i - 1)*4 + k]);
//               setNumberColor(Number(arr_demo[k][i + 1]), s[(i - 1)*4 + k]);
//               s[(i - 1)*4 + k].innerHTML = arr_demo[k][i + 1];
//             };
//           },1);
//           arr_demo[k][i] = "&";
//         } else if((arr_demo[k][i - 1] === "&") && (arr_demo[k][i + 1] !== arr_demo[k][i])){
//           // console.log("Partito l'else if 2 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
//             minPoint = s[(i - 1)*4 + k].getBoundingClientRect().top - Number(y) - 8;
//             document.querySelector(`.moving-u${i + dim[k]}`).style.top = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-u${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[(i - 1)*4 + k]);
//               setNumberColor(Number(arr_demo[k][i]), s[(i - 1)*4 + k]);
//               s[(i - 1)*4 + k].innerHTML = arr_demo[k][i];
//             };
//           },1);
//         } else if((arr_demo[k][i - 2] === "&") && (arr_demo[k][i - 1] !== arr_demo[k][i])){
//           // console.log("Partito l'else if 3 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
//             minPoint = s[(i - 1)*4 + k].getBoundingClientRect().top - Number(y) - 8;
//             document.querySelector(`.moving-u${i + dim[k]}`).style.top = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-u${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[(i - 1)*4 + k]);
//               setNumberColor(Number(arr_demo[k][i]), s[(i - 1)*4 + k]);
//               s[(i - 1)*4 + k].innerHTML = arr_demo[k][i];
//             };
//           },1);
//         } else if(arr_demo[k][i] === arr_demo[k][i - 1]){
//           // console.log("Partito l'else if 4 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
//             minPoint = s[(i - 1)*4 + k].getBoundingClientRect().top - Number(y) - 8;
//             document.querySelector(`.moving-u${i + dim[k]}`).style.top = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-u${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i - 1] * 2), s[(i - 1)*4 + k]);
//               setNumberColor(Number(arr_demo[k][i - 1] * 2), s[(i - 1)*4 + k]);
//               s[(i - 1)*4 + k].innerHTML = arr_demo[k][i - 1] * 2;
              
//             };
//           },1);
//           arr_demo[k][i] = "&";
//         } else  {
//           // console.log("Partito l'else : " + arr_demo[k][i]);
//             const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
//             document.querySelector(`.moving-u${i + dim[k]}`).style.top = `${variation}px`;
  
//             if(variation < minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-u${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[i*4 + k]);
//               setNumberColor(Number(arr_demo[k][i]), s[i*4 + k]);
//               s[i*4 + k].innerHTML = arr_demo[k][i];
//             };
//             },1);
//             }

//     })
 
//   }
// }

// function setUpDemo(){

//   let a1 = [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent];
//   let a2 = [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent];
//   let a3 = [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent];
//   let a4 = [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent];
//   let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);


//   arr1.forEach((_,i) => {
//     if(arr1[i - 1] === arr1[i]){
//       arr1[i - 1] = Number(arr1[i]) + Number(arr1[i - 1]);
//       delete arr1[i];
//     }
//   })

//   const arr1_1 = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_1.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_1[i] === undefined) arr1_1[i] = "";
//   }
//   const is_same_1 = ((a1.length == arr1_1.length) && a1.every((e, i) => e === arr1_1[i]));

//   arr2.forEach((_,i) => {
//     if(arr2[i - 1] === arr2[i]){
//       arr2[i - 1] = Number(arr2[i]) + Number(arr2[i - 1]);
//       delete arr2[i];
//     }
//   })

//   const arr1_2 = arr2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_2.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_2[i] === undefined) arr1_2[i] = "";
//   }
//   const is_same_2 = ((a2.length == arr1_2.length) && a2.every((e, i) => e === arr1_2[i]));

//   arr3.forEach((_,i) => {
//     if(arr3[i - 1] === arr3[i]){
//       arr3[i - 1] = Number(arr3[i]) + Number(arr3[i - 1]);
//       delete arr3[i];
//     }
//   })

//   const arr1_3 = arr3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_3.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_3[i] === undefined) arr1_3[i] = "";
//   }
//   const is_same_3 = ((a3.length == arr1_3.length) && a3.every((e, i) => e === arr1_3[i]));

//   arr4.forEach((_,i) => {
//     if(arr4[i - 1] === arr4[i]){
//       arr4[i - 1] = Number(arr4[i]) + Number(arr4[i - 1]);
//       delete arr4[i];
//     }
//   })

//   const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_4.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_4[i] === undefined) arr1_4[i] = "";
//   }
//   const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));

//   const tru = [true, true, true, true];
//   const is_same = [is_same_1, is_same_2, is_same_3, is_same_4];
//   const is_same_5 = ((tru.length == is_same.length) && tru.every((e, i) => e === is_same[i]));
//   return !is_same_5;
// }

// function setDown(){

//   w = false;

//   let a1 = [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent].reverse();
//   let a2 = [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent].reverse();
//   let a3 = [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent].reverse();
//   let a4 = [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent].reverse();
//   const a = [a1, a2, a3, a4];

//   setSquares();

//   let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   const arr = [arr1, arr2, arr3, arr4];

//   const arr1_demo = [...arr1];
//   const arr2_demo = [...arr2];
//   const arr3_demo = [...arr3];
//   const arr4_demo = [...arr4];
//   const arr_demo = [arr1_demo,arr2_demo,arr3_demo,arr4_demo];

//   const dim_1 = 0;
//   const dim_2 = arr1_demo.length;
//   const dim_3 = arr1_demo.length + arr2_demo.length;
//   const dim_4 = arr1_demo.length + arr2_demo.length + arr3_demo.length;
//   const dim = [dim_1,dim_2,dim_3,dim_4];

//   const arr_ = [];

//   const x = main.getBoundingClientRect().left;
//   const y = main.getBoundingClientRect().top;
//   const arrIndex = [];
//   let count = 0;

//   let t_1 = 0;
//   let t_2 = 0;
//   let t_3 = 0;
//   let t_4 = 0;
//   const t = [t_1,t_2,t_3,t_4];

//   const arrS_1 = [];
//   const arrS_2 = [];
//   const arrS_3 = [];
//   const arrS_4 = [];
//   const arrS = [arrS_1,arrS_2,arrS_3,arrS_4];


//   let is_same_1;
//   let is_same_2;
//   let is_same_3;
//   let is_same_4;
//   const is = [is_same_1, is_same_2, is_same_3, is_same_4];
//   const pos = [0,1,2,3]; 

//   //////////////////////////////////////////////////////////////////

//   for(let k = 0; k < 4; k++){

//     arr[k].forEach((_,i) => {
//       if(arr[k][i - 1] === arr[k][i]){
//         arr[k][i - 1] = Number(arr[k][i]) + Number(arr[k][i - 1]);
//         score = score + Number(arr[k][i - 1]);
//         scorePoints.textContent = `Score : ${score}`;
//         delete arr[k][i];
//       }
//     })

//     arr_[k] = arr[k].filter( (e) => Number(e) !== null && Number(e) !== 0);
//     arr_[k].length = 4;
//     for(let i = 0; i < 4; i++) {
//       if(arr_[k][i] === undefined) arr_[k][i] = "";
//     }
//     is[k] = ((a[k].length === arr_[k].length) && a[k].every((e, i) => e === arr_[k][i]));
//   }

//   const tru = [true, true, true, true];
//   const is_same_5 = ((tru.length === is.length) && tru.every((e, i) => e === is[i]));
//   chiave = !is_same_5;
//   if(chiave === false) w = true;



//   for(let k = 0; k < 4; k++){

//     a[k].forEach( (e,i) => {
//       if(e !== ""){
//       const x1 = s[12 + k -i*4].getBoundingClientRect().left;
//       const y1 = s[12 + k -i*4].getBoundingClientRect().top;
//       arrS[k].push(y1);
//       const html = `<div class=moving-d${count}></div>`;
//       main.insertAdjacentHTML("afterbegin", html);
//       const mov = document.querySelector(`.moving-d${count}`);
//       setNumberSize(Number(e), mov);
//       setNumberColor(Number(e), mov);
//       mov.textContent = e;
//       mov.style.fontFamily = "Roboto,Arial";
//       mov.style.fontWeight = "bold";
//       mov.style.display = "flex";
//       mov.style.justifyContent = "center";
//       mov.style.alignItems = "center";
//       mov.style.position = "absolute";
//       mov.style.backgroundColor.zIndex = "500";
//       mov.style.width = "109px";
//       mov.style.height = "109px";
//       mov.style.top = `${Number(y1) - Number(y) - 8}px`;
//       mov.style.left = `${Number(x1) - Number(x) - 8}px`;
      
//       arrIndex.push(count);
      
//       count++;
//     }
//     });



//     arr_demo[k].forEach( (_,i) => {

//       t[k] = 0;
//       let minPoint = s[12 + k -i*4].getBoundingClientRect().top - Number(y) - 8;

//         if(arr_demo[k][i - 1] === "&" && arr_demo[k][i - 2] === "&"){
//           console.log("Partito l'if : " + arr_demo[k][i]);
//             const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
//             minPoint = s[12 + k -(i - 2)*4].getBoundingClientRect().top - Number(y) - 8;
//             document.querySelector(`.moving-d${i + dim[k]}`).style.top = `${variation}px`;

//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-d${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i] * 2), s[12 + k -(i - 2)*4]);
//               setNumberColor(Number(arr_demo[k][i] * 2), s[12 + k -(i - 2)*4]);
//               s[12 + k -(i - 2)*4].innerHTML = arr_demo[k][i] * 2;
//             };
//           },1);
//         } else if(arr_demo[k][i - 1] === "&" && arr_demo[k][i] === arr_demo[k][i + 1]){
//           console.log("Partito l'else if 1 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
//             minPoint = s[12 + k -(i - 1)*4].getBoundingClientRect().top - Number(y) - 8;
//             document.querySelector(`.moving-d${i + dim[k]}`).style.top = `${variation}px`;

//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-d${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i + 1]), s[12 + k -(i - 1)*4]);
//               setNumberColor(Number(arr_demo[k][i + 1]), s[12 + k -(i - 1)*4]);
//               s[12 + k -(i - 1)*4].innerHTML = arr_demo[k][i + 1];
//             };
//           },1);
//           arr_demo[k][i] = "&";
//         } else if((arr_demo[k][i - 1] === "&") && (arr_demo[k][i + 1] !== arr_demo[k][i])){
//           // console.log("Partito l'else if 2 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
//             minPoint = s[12 + k -(i - 1)*4].getBoundingClientRect().top - Number(y) - 8;
//             document.querySelector(`.moving-d${i + dim[k]}`).style.top = `${variation}px`;

//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-d${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[12 + k -(i - 1)*4]);
//               setNumberColor(Number(arr_demo[k][i]), s[12 + k -(i - 1)*4]);
//               s[12 + k -(i - 1)*4].innerHTML = arr_demo[k][i];
//             };
//           },1);
//         } else if((arr_demo[k][i - 2] === "&") && (arr_demo[k][i - 1] !== arr_demo[k][i])){
//           console.log("Partito l'else if 3 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
//             minPoint = s[12 + k -(i - 1)*4].getBoundingClientRect().top - Number(y) - 8;
//             document.querySelector(`.moving-d${i + dim[k]}`).style.top = `${variation}px`;

//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-d${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[12 + k -(i - 1)*4]);
//               setNumberColor(Number(arr_demo[k][i]), s[12 + k -(i - 1)*4]);
//               s[12 + k -(i - 1)*4].innerHTML = arr_demo[k][i];
//             };
//           },1);
//         } else if(arr_demo[k][i] === arr_demo[k][i - 1]){
//           console.log("Partito l'else if 4 : " + arr_demo[k][i]);
//           const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
//             minPoint = s[12 + k -(i - 1)*4].getBoundingClientRect().top - Number(y) - 8;
//             document.querySelector(`.moving-d${i + dim[k]}`).style.top = `${variation}px`;

//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-d${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i - 1] * 2), s[12 + k -(i - 1)*4]);
//               setNumberColor(Number(arr_demo[k][i - 1] * 2), s[12 + k -(i - 1)*4]);
//               s[12 + k -(i - 1)*4].innerHTML = arr_demo[k][i - 1] * 2;
              
//             };
//           },1);
//           arr_demo[k][i] = "&";
//         } else  {
//           console.log("Partito l'else : " + arr_demo[k][i]);
//             const interval = setInterval(function(){
//             t[k] = t[k] + freq;
//             let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
//             document.querySelector(`.moving-d${i + dim[k]}`).style.top = `${variation}px`;

//             if(variation > minPoint) {
//               clearInterval(interval);
//               document.querySelector(`.moving-d${i + dim[k]}`).remove();
//               setNumberSize(Number(arr_demo[k][i]), s[12 + k -i*4]);
//               setNumberColor(Number(arr_demo[k][i]), s[12 + k -i*4]);
//               s[12 + k -i*4].innerHTML = arr_demo[k][i];
//             };
//             },1);
//         }
      

//     })
  
//   }
// }

// function setDownDemo(){

//   let a1 = [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent].reverse();
//   let a2 = [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent].reverse();
//   let a3 = [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent].reverse();
//   let a4 = [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent].reverse();
//   let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);


//   arr1.forEach((_,i) => {
//     if(arr1[i - 1] === arr1[i]){
//       arr1[i - 1] = Number(arr1[i]) + Number(arr1[i - 1]);
//       delete arr1[i];
//     }
//   })

//   const arr1_1 = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_1.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_1[i] === undefined) arr1_1[i] = "";
//   }
//   const is_same_1 = ((a1.length == arr1_1.length) && a1.every((e, i) => e === arr1_1[i]));
//   // console.log("is_same_1 : " + is_same_1);

//   arr2.forEach((_,i) => {
//     if(arr2[i - 1] === arr2[i]){
//       arr2[i - 1] = Number(arr2[i]) + Number(arr2[i - 1]);
//       delete arr2[i];
//     }
//   })

//   const arr1_2 = arr2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_2.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_2[i] === undefined) arr1_2[i] = "";
//   }
//   const is_same_2 = ((a2.length == arr1_2.length) && a2.every((e, i) => e === arr1_2[i]));
//   // console.log("is_same_2 : " + is_same_2);

//   arr3.forEach((_,i) => {
//     if(arr3[i - 1] === arr3[i]){
//       arr3[i - 1] = Number(arr3[i]) + Number(arr3[i - 1]);
//       delete arr3[i];
//     }
//   })

//   const arr1_3 = arr3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_3.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_3[i] === undefined) arr1_3[i] = "";
//   }
//   const is_same_3 = ((a3.length == arr1_3.length) && a3.every((e, i) => e === arr1_3[i]));

//   arr4.forEach((_,i) => {
//     if(arr4[i - 1] === arr4[i]){
//       arr4[i - 1] = Number(arr4[i]) + Number(arr4[i - 1]);
//       delete arr4[i];
//     }
//   })

//   const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_4.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_4[i] === undefined) arr1_4[i] = "";
//   }
//   const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));
  
//   const tru = [true, true, true, true];
//   const is_same = [is_same_1, is_same_2, is_same_3, is_same_4];
//   const is_same_5 = ((tru.length == is_same.length) && tru.every((e, i) => e === is_same[i]));
//   return !is_same_5;
// }


// //////////////////////////////////////////////////////////////////////

// function checkGameOver(){
//   let c1 = setLeftDemo();
//   let c2 = setRightDemo();
//   let c3 = setUpDemo();
//   let c4 = setDownDemo();
//   const c = [c1, c2, c3, c4]; 
  
//   const check = [false, false, false, false];
//   const tt = ((check.length == c.length) && check.every((e, i) => e === c[i]));
//   // console.log(tt);
//   return tt;
// }

// function newRandomSpotNumber(){
//   let num = Math.floor(Math.random() * 16);

//   while(s[num].textContent !== ""){
//     num = Math.floor(Math.random() * 16);
//     // console.log(num);
//   }

//   const numeri = [2, 4];
//   const t = (Math.random() * 1);
//   const numero = numeri[t > 0.8 ? 1 : 0];
//   s[num].innerHTML = numero;
//   setNumberSize(numero, s[num]);
//   setNumberColor(numero, s[num]);
//   w = true;
//   // console.log("w : " + w);
// }

// window.addEventListener("keydown", function (e) {
//   // console.log(e.key);
//   e.preventDefault();
//   checkGameOver();

//   if(checkGameOver()) {
//     //  console.log("check Game Over is working");
//      nascosta.classList.remove("hidden");
//      if(Number(score) > Number(best_score)) bestScore.innerHTML = `Best Score : ${score}`;
//   }
  
//   if(e.key === "ArrowLeft" && w === true) {
//     setLeft();
//     if(chiave) setTimeout(newRandomSpotNumber, 250);
//   }
//   if(e.key === "ArrowRight" && w === true) {
//     setRight();
//     if(chiave) setTimeout(newRandomSpotNumber, 250);
//   }
//   if(e.key === "ArrowUp"  && w === true) {
//     setUp();
//     if(chiave) setTimeout(newRandomSpotNumber, 250);
//   }
//   if(e.key === "ArrowDown"  && w === true) {
//     setDown();
//     if(chiave) setTimeout(newRandomSpotNumber, 250);
//   }

// })

// new_game.addEventListener("click", function(){
//     if(Number(score) > Number(best_score)) {
//       bestScore.innerHTML = `Best Score : ${score}`;
//       best_score = score;
//     }
//     setSquares();
//     defaultNumbers();
//     scorePoints.innerHTML = "Score : 0";
//     score = 0;
//     // w = true;

// })

// btn_under.addEventListener("click", function(){
//    agree.classList.add("hidden-agree");
// })


