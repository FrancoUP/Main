const s = document.querySelectorAll(".s");
const scorePoints = document.querySelector(".score");
const bestScore = document.querySelector(".best-score")
const new_game = document.querySelector(".new-game");
const nascosta = document.querySelector(".overlay");
const btn_under = document.querySelector(".btn-understood");
const agree = document.querySelector(".agreement");
let score = 0;
let best_score = 0;
let chiave = true;

function setNumberSize(num, cel){
   if(num < 9) {
     cel.style.fontSize = "60px";
   } else if(num > 9 && num < 99) {
     cel.style.fontSize = "50px";
   } else {
     cel.style.fontSize = "45px";
   }
}

function setNumberColor(num, cel){
  if(num === 2) {
    cel.style.backgroundColor = "rgb(237, 237, 237)";
    cel.style.color = "grey";
  }
  if(num === 4) {
    cel.style.backgroundColor = "rgb(225, 225, 225)";
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
    cel.style.backgroundColor = "rgb(3, 255, 3)";
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

////////////////////////////////////////////////////////////////////////////////

// function copy(){
  
//   let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent];
//   let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent];
//   let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent];
//   let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent];
//   let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);

  
//   const oo = a1.filter((e) => Number(e) !== null && Number(e) !== 0);
//   console.log(oo[0]);
//   const rr = a1.lastIndexOf(oo[0]);
//   console.log(rr); 
//   console.log(arr1);
//   const ee = arr1.lastIndexOf(oo[0]);
//   console.log(ee);

//   for(let i = rr - 1; i >= ee ; i--) {
//     console.log("For is working");
//     setTimeout(setNumberSize, 1000);
//     setTimeout(setNumberColor, 1000);
//     // setNumberSize(Number(oo[0]), s[i]);
//     // setNumberColor(Number(oo[0]), s[i]);
//     s[i].innerHTML = oo[0];
//   }

  

//   arr1.forEach( (e,i) => {
//     setNumberSize(Number(e), s[i]);
//     setNumberColor(Number(e), s[i]);
//     s[i].innerHTML = e;
//   })

//   setSquares();

//   arr1.forEach((_,i) => {
//     if(arr1[i - 1] === arr1[i]){
//       arr1[i - 1] = Number(arr1[i]) + Number(arr1[i - 1]);
//       score = score + Number(arr1[i - 1]);
//       scorePoints.textContent = `Score : ${score}`;
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
//       score = score + Number(arr2[i - 1]);
//       scorePoints.textContent = `Score : ${score}`;
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
//       score = score + Number(arr3[i - 1]);
//       scorePoints.textContent = `Score : ${score}`;
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
//       score = score + Number(arr4[i - 1]);
//       scorePoints.textContent = `Score : ${score}`;
//       delete arr4[i];
//     }
//   })

//   const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   arr1_4.length = 4;
//   for(let i = 0; i < 4; i++) {
//     if(arr1_4[i] === undefined) arr1_4[i] = "";
//   }
//   const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));



//   arr1_1.forEach( (e,i) => {
//     setNumberSize(Number(e), s[i]);
//     setNumberColor(Number(e), s[i]);
//     s[i].innerHTML = e;
//   })

//   arr1_2.forEach( (e,i) => {
//     setNumberSize(Number(e), s[i + 4]);
//     setNumberColor(Number(e), s[i + 4]);
//     s[i + 4].innerHTML = e;
//   })

//   arr1_3.forEach( (e,i) => {
//     setNumberSize(Number(e), s[i + 8]);
//     setNumberColor(Number(e), s[i + 8]);
//     s[i + 8].innerHTML = e;
//   })

//   arr1_4.forEach( (e,i) => {
//     setNumberSize(Number(e), s[i + 12]);
//     setNumberColor(Number(e), s[i + 12]);
//     s[i + 12].innerHTML = e;
//   })

//   const tru = [true, true, true, true];
//   const is_same_ = [is_same_1, is_same_2, is_same_3, is_same_4];
//   const is_same_5 = ((tru.length == is_same_.length) && tru.every((e, i) => e === is_same_[i]));
//   chiave = !is_same_5;
// }

function move(a1, a2, a3, a4){

  let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);

  // let arr1_1;
  // let arr1_2;
  // let arr1_3;
  // let arr1_4;

  // let is_same_1;
  // let is_same_2;
  // let is_same_3;
  // let is_same_4;

  // const arr = [arr1, arr2, arr3, arr4];
  // const arre = [arr1_1, arr1_2, arr1_3, arr1_4];
  // const same = [is_same_1, is_same_2, is_same_3, is_same_4];
  // const aa = [a1, a2, a3, a4];

  // for(let k = 0; k < 4; k++){
  //   arr[k].forEach((_,i) => {
  //     if(arr[k][i - 1] === arr[k][i]){
  //       arr[k][i - 1] = Number(arr[k][i]) + Number(arr[k][i - 1]);
  //       console.log(arr[k]);
  //       score = score + Number(arr[k][i - 1]);
  //       scorePoints.textContent = `Score : ${score}`;
  //       delete arr[k][i];
  //     }
  //   })
  
  //   arre[k] = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  //   arre[k].length = 4;
  //   for(let i = 0; i < 4; i++) {
  //     if(arre[k] === undefined) arre[k][i] = "";
  //   }
  //   same[k] = ((aa[k].length == arre[k].length) && aa[k].every((e, i) => e === arre[k]));
  // }

  arr1.forEach((_,i) => {
    if(arr1[i - 1] === arr1[i]){
      arr1[i - 1] = Number(arr1[i]) + Number(arr1[i - 1]);
      score = score + Number(arr1[i - 1]);
      scorePoints.textContent = `Score : ${score}`;
      delete arr1[i];
    }
  })

  const arr1_1 = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_1.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_1[i] === undefined) arr1_1[i] = "";
  }
  const is_same_1 = ((a1.length == arr1_1.length) && a1.every((e, i) => e === arr1_1[i]));

  arr2.forEach((_,i) => {
    if(arr2[i - 1] === arr2[i]){
      arr2[i - 1] = Number(arr2[i]) + Number(arr2[i - 1]);
      score = score + Number(arr2[i - 1]);
      scorePoints.textContent = `Score : ${score}`;
      delete arr2[i];
    }
  })

  const arr1_2 = arr2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_2.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_2[i] === undefined) arr1_2[i] = "";
  }
  const is_same_2 = ((a2.length == arr1_2.length) && a2.every((e, i) => e === arr1_2[i]));
  

  arr3.forEach((_,i) => {
    if(arr3[i - 1] === arr3[i]){
      arr3[i - 1] = Number(arr3[i]) + Number(arr3[i - 1]);
      score = score + Number(arr3[i - 1]);
      scorePoints.textContent = `Score : ${score}`;
      delete arr3[i];
    }
  })

  const arr1_3 = arr3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_3.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_3[i] === undefined) arr1_3[i] = "";
  }
  const is_same_3 = ((a3.length == arr1_3.length) && a3.every((e, i) => e === arr1_3[i]));
  

  arr4.forEach((_,i) => {
    if(arr4[i - 1] === arr4[i]){
      arr4[i - 1] = Number(arr4[i]) + Number(arr4[i - 1]);
      score = score + Number(arr4[i - 1]);
      scorePoints.textContent = `Score : ${score}`;
      delete arr4[i];
    }
  })

  const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_4.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_4[i] === undefined) arr1_4[i] = "";
  }
  const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));


  const tru = [true, true, true, true];
  const is_same_ = [is_same_1, is_same_2, is_same_3, is_same_4];
  const is_same_5 = ((tru.length == is_same_.length) && tru.every((e, i) => e === is_same_[i]));
  chiave = !is_same_5;

  return [arr1_1, arr1_2, arr1_3, arr1_4];
}

function setLeft(){
  
  let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent];
  let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent];
  let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent];
  let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent];

  setSquares();

  const element = move(a1, a2, a3, a4);

  for(let k = 0, j = 0; j < 4; k += 4, j++){
    element[j].forEach( (e,i) => {
      setNumberSize(Number(e), s[i + k]);
      setNumberColor(Number(e), s[i + k]);
      s[i + k].innerHTML = e;
    })
  }
}

function setLeftDemo(){
  let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent];
  let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent];
  let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent];
  let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent];
  let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);

  arr1.forEach((_,i) => {
    if(arr1[i - 1] === arr1[i]){
      arr1[i - 1] = Number(arr1[i]) + Number(arr1[i - 1]);
      delete arr1[i];
    }
  })

  const arr1_1 = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_1.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_1[i] === undefined) arr1_1[i] = "";
  }
  const is_same_1 = ((a1.length == arr1_1.length) && a1.every((e, i) => e === arr1_1[i]));

  arr2.forEach((_,i) => {
    if(arr2[i - 1] === arr2[i]){
      arr2[i - 1] = Number(arr2[i]) + Number(arr2[i - 1]);
      delete arr2[i];
    }
  })

  const arr1_2 = arr2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_2.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_2[i] === undefined) arr1_2[i] = "";
  }
  const is_same_2 = ((a2.length == arr1_2.length) && a2.every((e, i) => e === arr1_2[i]));
  

  arr3.forEach((_,i) => {
    if(arr3[i - 1] === arr3[i]){
      arr3[i - 1] = Number(arr3[i]) + Number(arr3[i - 1]);
      delete arr3[i];
    }
  })

  const arr1_3 = arr3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_3.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_3[i] === undefined) arr1_3[i] = "";
  }
  const is_same_3 = ((a3.length == arr1_3.length) && a3.every((e, i) => e === arr1_3[i]));
  

  arr4.forEach((_,i) => {
    if(arr4[i - 1] === arr4[i]){
      arr4[i - 1] = Number(arr4[i]) + Number(arr4[i - 1]);
      delete arr4[i];
    }
  })

  const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_4.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_4[i] === undefined) arr1_4[i] = "";
  }
  const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));

  const tru = [true, true, true, true];
  const is_same_ = [is_same_1, is_same_2, is_same_3, is_same_4];
  const is_same_5 = ((tru.length == is_same_.length) && tru.every((e, i) => e === is_same_[i]));
  return !is_same_5;
}

function setRight(){
  let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent].reverse();
  let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent].reverse();
  let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent].reverse();
  let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent].reverse();

  setSquares();

  const element = move(a1, a2, a3, a4);

  for(let k = 3, j = 0; j < 4; k += 4, j++){
    element[j].forEach( (e,i) => {
      setNumberSize(Number(e), s[k - i]);
      setNumberColor(Number(e), s[k - i]);
      s[k - i].innerHTML = e;
    })
  }
}

function setRightDemo(){
  let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent].reverse();
  let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent].reverse();
  let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent].reverse();
  let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent].reverse();
  let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);

  arr1.forEach((_,i) => {
    if(arr1[i - 1] === arr1[i]){
      arr1[i - 1] = Number(arr1[i]) + Number(arr1[i - 1]);
      delete arr1[i];
    }
  })

  const arr1_1 = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_1.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_1[i] === undefined) arr1_1[i] = "";
  }
  const is_same_1 = ((a1.length == arr1_1.length) && a1.every((e, i) => e === arr1_1[i]));

  arr2.forEach((_,i) => {
    if(arr2[i - 1] === arr2[i]){
      arr2[i - 1] = Number(arr2[i]) + Number(arr2[i - 1]);
      delete arr2[i];
    }
  })

  const arr1_2 = arr2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_2.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_2[i] === undefined) arr1_2[i] = "";
  }
  const is_same_2 = ((a2.length == arr1_2.length) && a2.every((e, i) => e === arr1_2[i]));

  arr3.forEach((_,i) => {
    if(arr3[i - 1] === arr3[i]){
      arr3[i - 1] = Number(arr3[i]) + Number(arr3[i - 1]);
      delete arr3[i]
    }
  })

  const arr1_3 = arr3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_3.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_3[i] === undefined) arr1_3[i] = "";
  }
  const is_same_3 = ((a3.length == arr1_3.length) && a3.every((e, i) => e === arr1_3[i]));

  arr4.forEach((_,i) => {
    if(arr4[i - 1] === arr4[i]){
      arr4[i - 1] = Number(arr4[i]) + Number(arr4[i - 1]);
      delete arr4[i];
    }
  })

  const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_4.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_4[i] === undefined) arr1_4[i] = "";
  }
  const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));

  const tru = [true, true, true, true];
  const is_same = [is_same_1, is_same_2, is_same_3, is_same_4];
  const is_same_5 = ((tru.length == is_same.length) && tru.every((e, i) => e === is_same[i]));
  return !is_same_5;
}

function setUp(){

  let a1 = [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent];
  let a2 = [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent];
  let a3 = [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent];
  let a4 = [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent];
  
  setSquares();

  const element = move(a1, a2, a3, a4);

  for(let k = 0; k < 4; k++){
    element[k].forEach( (e,i) => {
      setNumberSize(Number(e), s[i*4 + k]);
      setNumberColor(Number(e), s[i*4 + k]);
      s[i*4 + k].innerHTML = e;
    })
  }
}

function setUpDemo(){

  let a1 = [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent];
  let a2 = [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent];
  let a3 = [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent];
  let a4 = [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent];
  let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);


  arr1.forEach((_,i) => {
    if(arr1[i - 1] === arr1[i]){
      arr1[i - 1] = Number(arr1[i]) + Number(arr1[i - 1]);
      delete arr1[i];
    }
  })

  const arr1_1 = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_1.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_1[i] === undefined) arr1_1[i] = "";
  }
  const is_same_1 = ((a1.length == arr1_1.length) && a1.every((e, i) => e === arr1_1[i]));

  arr2.forEach((_,i) => {
    if(arr2[i - 1] === arr2[i]){
      arr2[i - 1] = Number(arr2[i]) + Number(arr2[i - 1]);
      delete arr2[i];
    }
  })

  const arr1_2 = arr2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_2.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_2[i] === undefined) arr1_2[i] = "";
  }
  const is_same_2 = ((a2.length == arr1_2.length) && a2.every((e, i) => e === arr1_2[i]));

  arr3.forEach((_,i) => {
    if(arr3[i - 1] === arr3[i]){
      arr3[i - 1] = Number(arr3[i]) + Number(arr3[i - 1]);
      delete arr3[i];
    }
  })

  const arr1_3 = arr3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_3.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_3[i] === undefined) arr1_3[i] = "";
  }
  const is_same_3 = ((a3.length == arr1_3.length) && a3.every((e, i) => e === arr1_3[i]));

  arr4.forEach((_,i) => {
    if(arr4[i - 1] === arr4[i]){
      arr4[i - 1] = Number(arr4[i]) + Number(arr4[i - 1]);
      delete arr4[i];
    }
  })

  const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_4.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_4[i] === undefined) arr1_4[i] = "";
  }
  const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));

  const tru = [true, true, true, true];
  const is_same = [is_same_1, is_same_2, is_same_3, is_same_4];
  const is_same_5 = ((tru.length == is_same.length) && tru.every((e, i) => e === is_same[i]));
  return !is_same_5;
}

function setDown(){

  let a1 = [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent].reverse();
  let a2 = [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent].reverse();
  let a3 = [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent].reverse();
  let a4 = [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent].reverse();

  setSquares();

  const element = move(a1, a2, a3, a4);

  for(let k = 0; k < 4; k++){
    element[k].forEach( (e,i) => {
      setNumberSize(Number(e), s[12 + k - i*4]);
      setNumberColor(Number(e), s[12 + k - i*4]);
      s[12 + k - i*4].innerHTML = e;
    })
  }
}

function setDownDemo(){

  let a1 = [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent].reverse();
  let a2 = [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent].reverse();
  let a3 = [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent].reverse();
  let a4 = [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent].reverse();
  let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);


  arr1.forEach((_,i) => {
    if(arr1[i - 1] === arr1[i]){
      arr1[i - 1] = Number(arr1[i]) + Number(arr1[i - 1]);
      delete arr1[i];
    }
  })

  const arr1_1 = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_1.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_1[i] === undefined) arr1_1[i] = "";
  }
  const is_same_1 = ((a1.length == arr1_1.length) && a1.every((e, i) => e === arr1_1[i]));
  // console.log("is_same_1 : " + is_same_1);

  arr2.forEach((_,i) => {
    if(arr2[i - 1] === arr2[i]){
      arr2[i - 1] = Number(arr2[i]) + Number(arr2[i - 1]);
      delete arr2[i];
    }
  })

  const arr1_2 = arr2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_2.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_2[i] === undefined) arr1_2[i] = "";
  }
  const is_same_2 = ((a2.length == arr1_2.length) && a2.every((e, i) => e === arr1_2[i]));
  // console.log("is_same_2 : " + is_same_2);

  arr3.forEach((_,i) => {
    if(arr3[i - 1] === arr3[i]){
      arr3[i - 1] = Number(arr3[i]) + Number(arr3[i - 1]);
      delete arr3[i];
    }
  })

  const arr1_3 = arr3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_3.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_3[i] === undefined) arr1_3[i] = "";
  }
  const is_same_3 = ((a3.length == arr1_3.length) && a3.every((e, i) => e === arr1_3[i]));

  arr4.forEach((_,i) => {
    if(arr4[i - 1] === arr4[i]){
      arr4[i - 1] = Number(arr4[i]) + Number(arr4[i - 1]);
      delete arr4[i];
    }
  })

  const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_4.length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_4[i] === undefined) arr1_4[i] = "";
  }
  const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));
  
  const tru = [true, true, true, true];
  const is_same = [is_same_1, is_same_2, is_same_3, is_same_4];
  const is_same_5 = ((tru.length == is_same.length) && tru.every((e, i) => e === is_same[i]));
  return !is_same_5;
}


//////////////////////////////////////////////////////////////////////

function checkGameOver(){
  let c1 = setLeftDemo();
  let c2 = setRightDemo();
  let c3 = setUpDemo();
  let c4 = setDownDemo();
  const c = [c1, c2, c3, c4]; 
  
  const check = [false, false, false, false];
  const tt = ((check.length == c.length) && check.every((e, i) => e === c[i]));
  // console.log(tt);
  return tt;
}

function newRandomSpotNumber(){
  let num = Math.floor(Math.random() * 16);

  while(s[num].textContent !== ""){
    num = Math.floor(Math.random() * 16);
    // console.log(num);
  }

  const numeri = [2, 4];
  const t = (Math.random() * 1);
  const numero = numeri[t > 0.8 ? 1 : 0];
  s[num].innerHTML = numero;
  setNumberSize(numero, s[num]);
  setNumberColor(numero, s[num]);
}

window.addEventListener("keydown", function (e) {
  // console.log(e.key);
  e.preventDefault();
  checkGameOver();

  if(checkGameOver()) {
     console.log("check Game Over is working");
     nascosta.classList.remove("hidden");
     if(Number(score) > Number(best_score)) bestScore.innerHTML = `Best Score : ${score}`;
  }
  
  if(e.key === "ArrowLeft") {
    setLeft();
  }
  if(e.key === "ArrowRight") {
    setRight();
  }
  if(e.key === "ArrowUp") {
    setUp();
  }
  if(e.key === "ArrowDown") {
    setDown();
  }
  // console.log(chiave);
  if(chiave) setTimeout(newRandomSpotNumber, 150);
  // if(Number(score) > Number(best_score)) bestScore.innerHTML = `Best Score : ${score}`;
  // console.log(score);
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
})
