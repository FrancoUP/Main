const s = document.querySelectorAll(".s");
const scorePoints = document.querySelector(".score");
const bestScore = document.querySelector(".best-score")
const new_game = document.querySelector(".new-game");
const nascosta = document.querySelector(".overlay");
const btn_under = document.querySelector(".btn-understood");
const agree = document.querySelector(".agreement");
const main = document.querySelector(".main-square");
let score = 0;
let best_score = 0;
let chiave = true;
const freq = 7;

// Inserire la funzione che imposta il numero random dentro la fine setIterval di ogni condizione.
// Trovare il modo di impostare il tasto dove va il numero prima che finisca setInterval

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

function setLeft(){
  let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent];
  let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent];
  let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent];
  let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent];
  let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr1_demo = [...arr1];
  const dim_1 = 0;
  const dim_2 = arr1.length;

  let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr2_demo = [...arr2];
  const dim_3 = arr1.length + arr2.length;

  let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr3_demo = [...arr3];
  const dim_4 = arr1.length + arr2.length + arr3.length;

  let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr4_demo = [...arr4];

  setSquares();

  const x = main.getBoundingClientRect().left;
  const y = main.getBoundingClientRect().top;
  const arrIndex = [];
  let count = 0;

  let t_1 = 0;
  let t_2 = 0;
  let t_3 = 0;
  let t_4 = 0;

  const arrS_1 = [];
  const arrS_2 = [];
  const arrS_3 = [];
  const arrS_4 = [];

  const a = [a1,a2,a3,a4];
  const arr = [arr1,arr2,arr3,arr4];
  const arr_demo = [arr1_demo,arr2_demo,arr3_demo,arr4_demo];
  const dim = [dim_1,dim_2,dim_3,dim_4];
  const t = [t_1,t_2,t_3,t_4];
  const arrS = [arrS_1,arrS_2,arrS_3,arrS_4];

  let is_same_1;
  let is_same_2;
  let is_same_3;
  let is_same_4;

  let arr1_1 = [];
  let arr1_2 = [];
  let arr1_3 = [];
  let arr1_4 = [];

  const arr1_ = [arr1_1,arr1_2,arr1_3,arr1_4]
  const is_same_ = [is_same_1, is_same_2, is_same_3, is_same_4];
  const pos = [0,4,8,12]; 

  for(let k = 0; k < 4; k++){

    a[k].forEach( (e,i) => {
      if(e !== ""){
      // console.log(s[i].getBoundingClientRect());
      const x1 = s[i + pos[k]].getBoundingClientRect().left;
      arrS[k].push(x1);
      // console.log(x1);
      const y1 = s[i + pos[k]].getBoundingClientRect().top;
      // console.log(y1);
      const html = `<div class=moving-l${count}></div>`;
      // console.log(`moving-${count}`);
      main.insertAdjacentHTML("afterbegin", html);
      const mov = document.querySelector(`.moving-l${count}`);
      // console.log("mov : " + mov);
      setNumberSize(Number(e), mov);
      setNumberColor(Number(e), mov);
      mov.textContent = e;
      mov.style.fontFamily = "Roboto,Arial";
      mov.style.fontWeight = "bold";
      mov.style.display = "flex";
      mov.style.justifyContent = "center";
      mov.style.alignItems = "center";
      mov.style.position = "absolute";
      mov.style.backgroundColor.zIndex = "500";
      mov.style.width = "109px";
      mov.style.height = "109px";
      mov.style.top = `${Number(y1) - Number(y) - 8}px`;
      mov.style.left = `${Number(x1) - Number(x) - 8}px`;

      // document.querySelector(`.moving-${count}`).style.backgroundColor = "green";
      
      arrIndex.push(count);
      // console.log("Sezione-1 count = " + count);
      
      count++;
    }
    });



    arr[k].forEach( (_,i) => {
      // console.log(e);

      t[k] = 0;
      let minPoint = s[i + pos[k]].getBoundingClientRect().left - Number(x) - 8;
      // console.log(minPoint);

        if(arr_demo[k][i - 1] === "&" && arr_demo[k][i - 2] === "&"){
          console.log("Partito l'if : " + arr_demo[k][i]);
          arr[k][i] = Number(arr[k][i]) + Number(arr[k][i - 1]);
          score = score + Number(arr[k][i]);
          scorePoints.textContent = `Score : ${score}`;
          const interval = setInterval(function(){
            t[k] = t[k] + freq;
            let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
            minPoint = s[i - 2  + pos[k]].getBoundingClientRect().left - Number(x) - 8;
            document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

            if(variation < minPoint) {
              clearInterval(interval);
              document.querySelector(`.moving-l${i + dim[k]}`).remove();
              setNumberSize(Number(arr[k][i]), s[i - 2 + pos[k]]);
              setNumberColor(Number(arr[k][i]), s[i - 2 + pos[k]]);
              s[i - 2 + pos[k]].innerHTML = arr[k][i];
            };
          },1);
        } else if(arr_demo[k][i - 1] === "&" && arr_demo[k][i] === arr_demo[k][i + 1]){
          console.log("Partito l'else if 1 : " + arr_demo[k][i]);
          const interval = setInterval(function(){
            t[k] = t[k] + freq;
            let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
            minPoint = s[i - 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
            document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

            if(variation < minPoint) {
              clearInterval(interval);
              document.querySelector(`.moving-l${i + dim[k]}`).remove();
              setNumberSize(Number(arr[k][i]), s[i - 1 + pos[k]]);
              setNumberColor(Number(arr[k][i]), s[i - 1 + pos[k]]);
              s[i - 1 + pos[k]].innerHTML = arr[k][i];
            };
          },1);
          arr_demo[k][i] = "&";
        console.log(arr_demo[k][i]);
        } else if((arr_demo[k][i - 1] === "&") && (arr_demo[k][i + 1] !== arr_demo[k][i])){
          console.log("Partito l'else if 2 : " + arr_demo[k][i]);
          const interval = setInterval(function(){
            t[k] = t[k] + freq;
            let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
            minPoint = s[i - 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
            document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

            if(variation < minPoint) {
              clearInterval(interval);
              document.querySelector(`.moving-l${i + dim[k]}`).remove();
              setNumberSize(Number(arr[k][i]), s[i - 1 + pos[k]]);
              setNumberColor(Number(arr[k][i]), s[i - 1 + pos[k]]);
              s[i - 1 + pos[k]].innerHTML = arr[k][i];
            };
          },1);
        } else if((arr_demo[k][i - 2] === "&") && (arr_demo[k][i - 1] !== arr_demo[k][i])){
          console.log("Partito l'else if 3 : " + arr_demo[k][i]);
          // console.log(arr1_demo[i]);
          const interval = setInterval(function(){
            t[k] = t[k] + freq;
            let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
            minPoint = s[i - 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
            document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

            if(variation < minPoint) {
              clearInterval(interval);
              document.querySelector(`.moving-l${i + dim[k]}`).remove();
              setNumberSize(Number(arr[k][i]), s[i - 1 + pos[k]]);
              setNumberColor(Number(arr[k][i]), s[i - 1 + pos[k]]);
              s[i - 1 + pos[k]].innerHTML = arr[k][i];
            };
          },1);
        } else if(arr_demo[k][i] === arr_demo[k][i - 1]){
          console.log("Partito l'else if 4 : " + arr_demo[k][i]);
          arr[k][i] = Number(arr[k][i]) + Number(arr[k][i - 1]);
          score = score + Number(arr[k][i]);
          scorePoints.textContent = `Score : ${score}`;
          const interval = setInterval(function(){
            t[k] = t[k] + freq;
            let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
            minPoint = s[i - 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
            document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

            if(variation < minPoint) {
              clearInterval(interval);
              document.querySelector(`.moving-l${i + dim[k]}`).remove();
              // s[i - 1].style.fontSize = "10px";
              setNumberSize(Number(arr[k][i]), s[i - 1 + pos[k]]);
              setNumberColor(Number(arr[k][i]), s[i - 1 + pos[k]]);
              s[i - 1 + pos[k]].innerHTML = arr[k][i];
              
            };
          },1);
          arr_demo[k][i] = "&";
          console.log(arr_demo[k][i]);
        } else  {
          console.log("Partito l'else : " + arr_demo[k][i]);
            const interval = setInterval(function(){
            t[k] = t[k] + freq;
            let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 - t[k];
            document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

            if(variation < minPoint) {
              clearInterval(interval);
              document.querySelector(`.moving-l${i + dim[k]}`).remove();
              setNumberSize(Number(arr[k][i]), s[i + pos[k]]);
              setNumberColor(Number(arr[k][i]), s[i + pos[k]]);
              s[i + pos[k]].innerHTML = arr[k][i];
              console.log(`s[i + pos[k]] : ${i + pos[k]}`);
              console.log(`arr[k][i] : ${arr[k][i]}`);
              console.log(`k : ${k}`);
              console.log(`i : ${i}`);
              console.log(`arr[k] : ${arr[k]}`);
              console.log(`a[k] : ${a[k]}`);
            };
            },1);
        }
        // if( i === 0 && arr1[i] !== arr1[i + 1])
      

    })

    // arr[k].forEach((_,i) => {
    //   if(arr[k][i - 1] === arr[i][i]){
    //     arr[k][i - 1] = Number(arr4[i]) + Number(arr[k][i - 1]);
    //     delete arr[k][i];
    //   }
    // })
    
    arr1_[k] = arr[k].filter( (e) => Number(e) !== null && Number(e) !== 0);
    arr1_[k].length = 4;
    for(let i = 0; i < 4; i++) {
      if(arr1_[k][i] === undefined) arr1_[k][i] = "";
    }
    is_same_[k] = ((a[k].length == arr1_[k].length) && a[k].every((e, i) => e === arr1_[k][i]));
  }


  const tru = [true, true, true, true];
  const is_same_5 = ((tru.length == is_same_.length) && tru.every((e, i) => e === is_same_[i]));
  chiave = !is_same_5;
  
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
  let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr1_demo = [...arr1];
  const dim_1 = 0;
  const dim_2 = arr1.length;

  let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr2_demo = [...arr2];
  const dim_3 = arr1.length + arr2.length;

  let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr3_demo = [...arr3];
  const dim_4 = arr1.length + arr2.length + arr3.length;

  let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr4_demo = [...arr4];

  setSquares();

  const x = main.getBoundingClientRect().left;
  const y = main.getBoundingClientRect().top;
  const arrIndex = [];
  let count = 0;

  let t_1 = 0;
  let t_2 = 0;
  let t_3 = 0;
  let t_4 = 0;

  const arrS_1 = [];
  const arrS_2 = [];
  const arrS_3 = [];
  const arrS_4 = [];

  const a = [a1,a2,a3,a4];
  const arr = [arr1,arr2,arr3,arr4];
  const arr_demo = [arr1_demo,arr2_demo,arr3_demo,arr4_demo];
  const dim = [dim_1,dim_2,dim_3,dim_4];
  const t = [t_1,t_2,t_3,t_4];
  const arrS = [arrS_1,arrS_2,arrS_3,arrS_4];

  let is_same_1;
  let is_same_2;
  let is_same_3;
  let is_same_4;

  let arr1_1 = [];
  let arr1_2 = [];
  let arr1_3 = [];
  let arr1_4 = [];

  const arr1_ = [arr1_1,arr1_2,arr1_3,arr1_4]
  const is_same_ = [is_same_1, is_same_2, is_same_3, is_same_4];
  const pos = [3,7,11,15]; 

  for(let k = 0; k < 4; k++){

  a[k].forEach( (e,i) => {
    if(e !== ""){
    // console.log(s[i].getBoundingClientRect());
    const x1 = s[ - i + pos[k]].getBoundingClientRect().left;
    arrS[k].push(x1);
    // console.log(x1);
    const y1 = s[ - i + pos[k]].getBoundingClientRect().top;
    // console.log(y1);
    const html = `<div class=moving-l${count}></div>`;
    // console.log(`moving-${count}`);
    main.insertAdjacentHTML("afterbegin", html);
    const mov = document.querySelector(`.moving-l${count}`);
    // console.log("mov : " + mov);
    setNumberSize(Number(e), mov);
    setNumberColor(Number(e), mov);
    mov.textContent = e;
    mov.style.fontFamily = "Roboto,Arial";
    mov.style.fontWeight = "bold";
    mov.style.display = "flex";
    mov.style.justifyContent = "center";
    mov.style.alignItems = "center";
    mov.style.position = "absolute";
    mov.style.backgroundColor.zIndex = "500";
    mov.style.width = "109px";
    mov.style.height = "109px";
    mov.style.top = `${Number(y1) - Number(y) - 8}px`;
    mov.style.left = `${Number(x1) - Number(x) - 8}px`;

    // document.querySelector(`.moving-${count}`).style.backgroundColor = "green";
    
    arrIndex.push(count);
    // console.log("Sezione-1 count = " + count);
    
    count++;
  }
  });



  arr[k].forEach( (_,i) => {
    // console.log(e);

    t[k] = 0;
    let minPoint = s[ - i + pos[k]].getBoundingClientRect().left - Number(x) - 8;
    // console.log(minPoint);

      if(arr_demo[k][i - 1] === "&" && arr_demo[k][i - 2] === "&"){
        console.log("Partito l'if : " + arr_demo[k][i]);
        arr[k][i] = Number(arr[k][i]) + Number(arr[k][i - 1]);
        score = score + Number(arr[k][i]);
        scorePoints.textContent = `Score : ${score}`;
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
          minPoint = s[ - i + 2  + pos[k]].getBoundingClientRect().left - Number(x) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[ - i + 2 + pos[k]]);
            setNumberColor(Number(arr[k][i]), s[ - i + 2 + pos[k]]);
            s[ - i + 2 + pos[k]].innerHTML = arr[k][i];
          };
        },1);
      } else if(arr_demo[k][i - 1] === "&" && arr_demo[k][i] === arr_demo[k][i + 1]){
        console.log("Partito l'else if 1 : " + arr_demo[k][i]);
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
          minPoint = s[ - i + 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[ - i + 1 + pos[k]]);
            setNumberColor(Number(arr[k][i]), s[ - i + 1 + pos[k]]);
            s[ - i + 1 + pos[k]].innerHTML = arr[k][i];
          };
        },1);
        arr_demo[k][i] = "&";
      console.log(arr_demo[k][i]);
      } else if((arr_demo[k][i - 1] === "&") && (arr_demo[k][i + 1] !== arr_demo[k][i])){
        console.log("Partito l'else if 2 : " + arr_demo[k][i]);
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
          minPoint = s[ - i + 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[ - i + 1 + pos[k]]);
            setNumberColor(Number(arr[k][i]), s[ - i + 1 + pos[k]]);
            s[ - i + 1 + pos[k]].innerHTML = arr[k][i];
          };
        },1);
      } else if((arr_demo[k][i - 2] === "&") && (arr_demo[k][i - 1] !== arr_demo[k][i])){
        console.log("Partito l'else if 3 : " + arr_demo[k][i]);
        // console.log(arr1_demo[i]);
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
          minPoint = s[ - i + 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[ - i + 1 + pos[k]]);
            setNumberColor(Number(arr[k][i]), s[ - i + 1 + pos[k]]);
            s[ - i + 1 + pos[k]].innerHTML = arr[k][i];
          };
        },1);
      } else if(arr_demo[k][i] === arr_demo[k][i - 1]){
        console.log("Partito l'else if 4 : " + arr_demo[k][i]);
        arr[k][i] = Number(arr[k][i]) + Number(arr[k][i - 1]);
        score = score + Number(arr[k][i]);
        scorePoints.textContent = `Score : ${score}`;
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
          minPoint = s[ - i + 1 + pos[k]].getBoundingClientRect().left - Number(x) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            // s[i - 1].style.fontSize = "10px";
            setNumberSize(Number(arr[k][i]), s[ - i + 1 + pos[k]]);
            setNumberColor(Number(arr[k][i]), s[ - i + 1 + pos[k]]);
            s[ - i + 1 + pos[k]].innerHTML = arr[k][i];
            
          };
        },1);
        arr_demo[k][i] = "&";
        console.log(arr_demo[k][i]);
      } else  {
        console.log("Partito l'else : " + arr_demo[k][i]);
          const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(x) - 8 + t[k];
          document.querySelector(`.moving-l${i + dim[k]}`).style.left = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[ - i + pos[k]]);
            setNumberColor(Number(arr[k][i]), s[ - i + pos[k]]);
            s[ - i + pos[k]].innerHTML = arr[k][i];
            console.log(`s[i + pos[k]] : ${i + pos[k]}`);
            console.log(`arr[k][i] : ${arr[k][i]}`);
            console.log(`k : ${k}`);
            console.log(`i : ${i}`);
            console.log(`arr[k] : ${arr[k]}`);
            console.log(`a[k] : ${a[k]}`);
          };
          },1);
      }
      // if( i === 0 && arr1[i] !== arr1[i + 1])
    

  })

  // arr[k].forEach((_,i) => {
  //   if(arr[k][i - 1] === arr[i][i]){
  //     arr[k][i - 1] = Number(arr4[i]) + Number(arr[k][i - 1]);
  //     delete arr[k][i];
  //   }
  // })
  
  arr1_[k] = arr[k].filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_[k].length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_[k][i] === undefined) arr1_[k][i] = "";
  }
  is_same_[k] = ((a[k].length == arr1_[k].length) && a[k].every((e, i) => e === arr1_[k][i]));
    
 }


  const tru = [true, true, true, true];
  const is_same_5 = ((tru.length == is_same_.length) && tru.every((e, i) => e === is_same_[i]));
  chiave = !is_same_5;


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

  let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr1_demo = [...arr1];
  const dim_1 = 0;
  const dim_2 = arr1.length;

  let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr2_demo = [...arr2];
  const dim_3 = arr1.length + arr2.length;

  let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr3_demo = [...arr3];
  const dim_4 = arr1.length + arr2.length + arr3.length;

  let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr4_demo = [...arr4];

  setSquares();

  const x = main.getBoundingClientRect().left;
  const y = main.getBoundingClientRect().top;
  const arrIndex = [];
  let count = 0;

  let t_1 = 0;
  let t_2 = 0;
  let t_3 = 0;
  let t_4 = 0;

  const arrS_1 = [];
  const arrS_2 = [];
  const arrS_3 = [];
  const arrS_4 = [];

  const a = [a1,a2,a3,a4];
  const arr = [arr1,arr2,arr3,arr4];
  const arr_demo = [arr1_demo,arr2_demo,arr3_demo,arr4_demo];
  const dim = [dim_1,dim_2,dim_3,dim_4];
  const t = [t_1,t_2,t_3,t_4];
  const arrS = [arrS_1,arrS_2,arrS_3,arrS_4];

  let is_same_1;
  let is_same_2;
  let is_same_3;
  let is_same_4;

  let arr1_1 = [];
  let arr1_2 = [];
  let arr1_3 = [];
  let arr1_4 = [];

  const arr1_ = [arr1_1,arr1_2,arr1_3,arr1_4]
  const is_same_ = [is_same_1, is_same_2, is_same_3, is_same_4];
  const pos = [0,1,2,3]; 

  for(let k = 0; k < 4; k++){

  a[k].forEach( (e,i) => {
    if(e !== ""){
    // console.log(s[i].getBoundingClientRect());
    const x1 = s[i*4 + k].getBoundingClientRect().left;
    // console.log(x1);
    const y1 = s[i*4 + k].getBoundingClientRect().top;
    arrS[k].push(y1);
    // console.log(y1);
    const html = `<div class=moving-l${count}></div>`;
    // console.log(`moving-${count}`);
    main.insertAdjacentHTML("afterbegin", html);
    const mov = document.querySelector(`.moving-l${count}`);
    // console.log("mov : " + mov);
    setNumberSize(Number(e), mov);
    setNumberColor(Number(e), mov);
    mov.textContent = e;
    mov.style.fontFamily = "Roboto,Arial";
    mov.style.fontWeight = "bold";
    mov.style.display = "flex";
    mov.style.justifyContent = "center";
    mov.style.alignItems = "center";
    mov.style.position = "absolute";
    mov.style.backgroundColor.zIndex = "500";
    mov.style.width = "109px";
    mov.style.height = "109px";
    mov.style.top = `${Number(y1) - Number(y) - 8}px`;
    mov.style.left = `${Number(x1) - Number(x) - 8}px`;

    // document.querySelector(`.moving-${count}`).style.backgroundColor = "green";
    
    arrIndex.push(count);
    // console.log("Sezione-1 count = " + count);
    
    count++;
  }
  });



  arr[k].forEach( (_,i) => {
    // console.log(e);

    t[k] = 0;
    let minPoint = s[i*4 + k].getBoundingClientRect().top - Number(y) - 8;
    // console.log(minPoint);

      if(arr_demo[k][i - 1] === "&" && arr_demo[k][i - 2] === "&"){
        console.log("Partito l'if : " + arr_demo[k][i]);
        arr[k][i] = Number(arr[k][i]) + Number(arr[k][i - 1]);
        score = score + Number(arr[k][i]);
        scorePoints.textContent = `Score : ${score}`;
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
          minPoint = s[(i - 2)*4 + k].getBoundingClientRect().top - Number(y) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation < minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[(i - 2)*4 + k]);
            setNumberColor(Number(arr[k][i]), s[(i - 2)*4 + k]);
            s[(i - 2)*4 + k].innerHTML = arr[k][i];
          };
        },1);
      } else if(arr_demo[k][i - 1] === "&" && arr_demo[k][i] === arr_demo[k][i + 1]){
        console.log("Partito l'else if 1 : " + arr_demo[k][i]);
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
          minPoint = s[(i - 1)*4 + k].getBoundingClientRect().top - Number(y) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation < minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[(i - 1)*4 + k]);
            setNumberColor(Number(arr[k][i]), s[(i - 1)*4 + k]);
            s[(i - 1)*4 + k].innerHTML = arr[k][i];
          };
        },1);
        arr_demo[k][i] = "&";
      console.log(arr_demo[k][i]);
      } else if((arr_demo[k][i - 1] === "&") && (arr_demo[k][i + 1] !== arr_demo[k][i])){
        console.log("Partito l'else if 2 : " + arr_demo[k][i]);
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
          minPoint = s[(i - 1)*4 + k].getBoundingClientRect().top - Number(y) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation < minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[(i - 1)*4 + k]);
            setNumberColor(Number(arr[k][i]), s[(i - 1)*4 + k]);
            s[(i - 1)*4 + k].innerHTML = arr[k][i];
          };
        },1);
      } else if((arr_demo[k][i - 2] === "&") && (arr_demo[k][i - 1] !== arr_demo[k][i])){
        console.log("Partito l'else if 3 : " + arr_demo[k][i]);
        // console.log(arr1_demo[i]);
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
          minPoint = s[(i - 1)*4 + k].getBoundingClientRect().top - Number(y) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation < minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[(i - 1)*4 + k]);
            setNumberColor(Number(arr[k][i]), s[(i - 1)*4 + k]);
            s[(i - 1)*4 + k].innerHTML = arr[k][i];
          };
        },1);
      } else if(arr_demo[k][i] === arr_demo[k][i - 1]){
        console.log("Partito l'else if 4 : " + arr_demo[k][i]);
        arr[k][i] = Number(arr[k][i]) + Number(arr[k][i - 1]);
        score = score + Number(arr[k][i]);
        scorePoints.textContent = `Score : ${score}`;
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
          minPoint = s[(i - 1)*4 + k].getBoundingClientRect().top - Number(y) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation < minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            // s[i - 1].style.fontSize = "10px";
            setNumberSize(Number(arr[k][i]), s[(i - 1)*4 + k]);
            setNumberColor(Number(arr[k][i]), s[(i - 1)*4 + k]);
            s[(i - 1)*4 + k].innerHTML = arr[k][i];
            
          };
        },1);
        arr_demo[k][i] = "&";
        console.log(arr_demo[k][i]);
      } else  {
        console.log("Partito l'else : " + arr_demo[k][i]);
          const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 - t[k];
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation < minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[i*4 + k]);
            setNumberColor(Number(arr[k][i]), s[i*4 + k]);
            s[i*4 + k].innerHTML = arr[k][i];
            console.log(`s[i + pos[k]] : ${i + pos[k]}`);
            console.log(`arr[k][i] : ${arr[k][i]}`);
            console.log(`k : ${k}`);
            console.log(`i : ${i}`);
            console.log(`arr[k] : ${arr[k]}`);
            console.log(`a[k] : ${a[k]}`);
          };
          },1);
      }
      // if( i === 0 && arr1[i] !== arr1[i + 1])
    

  })

  // arr[k].forEach((_,i) => {
  //   if(arr[k][i - 1] === arr[i][i]){
  //     arr[k][i - 1] = Number(arr4[i]) + Number(arr[k][i - 1]);
  //     delete arr[k][i];
  //   }
  // })
  
  arr1_[k] = arr[k].filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_[k].length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_[k][i] === undefined) arr1_[k][i] = "";
  }
  is_same_[k] = ((a[k].length == arr1_[k].length) && a[k].every((e, i) => e === arr1_[k][i]));
    
  

  }


  const tru = [true, true, true, true];
  const is_same_5 = ((tru.length == is_same_.length) && tru.every((e, i) => e === is_same_[i]));
  chiave = !is_same_5;
  
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

  let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr1_demo = [...arr1];
  const dim_1 = 0;
  const dim_2 = arr1.length;

  let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr2_demo = [...arr2];
  const dim_3 = arr1.length + arr2.length;

  let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr3_demo = [...arr3];
  const dim_4 = arr1.length + arr2.length + arr3.length;

  let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);
  const arr4_demo = [...arr4];

  setSquares();

  const x = main.getBoundingClientRect().left;
  const y = main.getBoundingClientRect().top;
  const arrIndex = [];
  let count = 0;

  let t_1 = 0;
  let t_2 = 0;
  let t_3 = 0;
  let t_4 = 0;

  const arrS_1 = [];
  const arrS_2 = [];
  const arrS_3 = [];
  const arrS_4 = [];

  const a = [a1,a2,a3,a4];
  const arr = [arr1,arr2,arr3,arr4];
  const arr_demo = [arr1_demo,arr2_demo,arr3_demo,arr4_demo];
  const dim = [dim_1,dim_2,dim_3,dim_4];
  const t = [t_1,t_2,t_3,t_4];
  const arrS = [arrS_1,arrS_2,arrS_3,arrS_4];

  let is_same_1;
  let is_same_2;
  let is_same_3;
  let is_same_4;

  let arr1_1 = [];
  let arr1_2 = [];
  let arr1_3 = [];
  let arr1_4 = [];

  const arr1_ = [arr1_1,arr1_2,arr1_3,arr1_4]
  const is_same_ = [is_same_1, is_same_2, is_same_3, is_same_4];
  const pos = [0,1,2,3]; 

  for(let k = 0; k < 4; k++){

  a[k].forEach( (e,i) => {
    if(e !== ""){
    // console.log(s[i].getBoundingClientRect());
    const x1 = s[12 + k -i*4].getBoundingClientRect().left;
    // console.log(x1);
    const y1 = s[12 + k -i*4].getBoundingClientRect().top;
    arrS[k].push(y1);
    // console.log(y1);
    const html = `<div class=moving-l${count}></div>`;
    // console.log(`moving-${count}`);
    main.insertAdjacentHTML("afterbegin", html);
    const mov = document.querySelector(`.moving-l${count}`);
    // console.log("mov : " + mov);
    setNumberSize(Number(e), mov);
    setNumberColor(Number(e), mov);
    mov.textContent = e;
    mov.style.fontFamily = "Roboto,Arial";
    mov.style.fontWeight = "bold";
    mov.style.display = "flex";
    mov.style.justifyContent = "center";
    mov.style.alignItems = "center";
    mov.style.position = "absolute";
    mov.style.backgroundColor.zIndex = "500";
    mov.style.width = "109px";
    mov.style.height = "109px";
    mov.style.top = `${Number(y1) - Number(y) - 8}px`;
    mov.style.left = `${Number(x1) - Number(x) - 8}px`;

    // document.querySelector(`.moving-${count}`).style.backgroundColor = "green";
    
    arrIndex.push(count);
    // console.log("Sezione-1 count = " + count);
    
    count++;
  }
  });



  arr[k].forEach( (_,i) => {
    // console.log(e);

    t[k] = 0;
    let minPoint = s[12 + k -i*4].getBoundingClientRect().top - Number(y) - 8;
    // console.log(minPoint);

      if(arr_demo[k][i - 1] === "&" && arr_demo[k][i - 2] === "&"){
        console.log("Partito l'if : " + arr_demo[k][i]);
        arr[k][i] = Number(arr[k][i]) + Number(arr[k][i - 1]);
        score = score + Number(arr[k][i]);
        scorePoints.textContent = `Score : ${score}`;
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
          minPoint = s[12 + k -(i - 2)*4].getBoundingClientRect().top - Number(y) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[12 + k -(i - 2)*4]);
            setNumberColor(Number(arr[k][i]), s[12 + k -(i - 2)*4]);
            s[12 + k -(i - 2)*4].innerHTML = arr[k][i];
          };
        },1);
      } else if(arr_demo[k][i - 1] === "&" && arr_demo[k][i] === arr_demo[k][i + 1]){
        console.log("Partito l'else if 1 : " + arr_demo[k][i]);
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
          minPoint = s[12 + k -(i - 1)*4].getBoundingClientRect().top - Number(y) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[12 + k -(i - 1)*4]);
            setNumberColor(Number(arr[k][i]), s[12 + k -(i - 1)*4]);
            s[12 + k -(i - 1)*4].innerHTML = arr[k][i];
          };
        },1);
        arr_demo[k][i] = "&";
      console.log(arr_demo[k][i]);
      } else if((arr_demo[k][i - 1] === "&") && (arr_demo[k][i + 1] !== arr_demo[k][i])){
        console.log("Partito l'else if 2 : " + arr_demo[k][i]);
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
          minPoint = s[12 + k -(i - 1)*4].getBoundingClientRect().top - Number(y) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[12 + k -(i - 1)*4]);
            setNumberColor(Number(arr[k][i]), s[12 + k -(i - 1)*4]);
            s[12 + k -(i - 1)*4].innerHTML = arr[k][i];
          };
        },1);
      } else if((arr_demo[k][i - 2] === "&") && (arr_demo[k][i - 1] !== arr_demo[k][i])){
        console.log("Partito l'else if 3 : " + arr_demo[k][i]);
        // console.log(arr1_demo[i]);
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
          minPoint = s[12 + k -(i - 1)*4].getBoundingClientRect().top - Number(y) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[12 + k -(i - 1)*4]);
            setNumberColor(Number(arr[k][i]), s[12 + k -(i - 1)*4]);
            s[12 + k -(i - 1)*4].innerHTML = arr[k][i];
          };
        },1);
      } else if(arr_demo[k][i] === arr_demo[k][i - 1]){
        console.log("Partito l'else if 4 : " + arr_demo[k][i]);
        arr[k][i] = Number(arr[k][i]) + Number(arr[k][i - 1]);
        score = score + Number(arr[k][i]);
        scorePoints.textContent = `Score : ${score}`;
        const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
          minPoint = s[12 + k -(i - 1)*4].getBoundingClientRect().top - Number(y) - 8;
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            // s[i - 1].style.fontSize = "10px";
            setNumberSize(Number(arr[k][i]), s[12 + k -(i - 1)*4]);
            setNumberColor(Number(arr[k][i]), s[12 + k -(i - 1)*4]);
            s[12 + k -(i - 1)*4].innerHTML = arr[k][i];
            
          };
        },1);
        arr_demo[k][i] = "&";
        console.log(arr_demo[k][i]);
      } else  {
        console.log("Partito l'else : " + arr_demo[k][i]);
          const interval = setInterval(function(){
          t[k] = t[k] + freq;
          let variation = Number(`${arrS[k][i]}`) - Number(y) - 8 + t[k];
          document.querySelector(`.moving-l${i + dim[k]}`).style.top = `${variation}px`;

          if(variation > minPoint) {
            clearInterval(interval);
            document.querySelector(`.moving-l${i + dim[k]}`).remove();
            setNumberSize(Number(arr[k][i]), s[12 + k -i*4]);
            setNumberColor(Number(arr[k][i]), s[12 + k -i*4]);
            s[12 + k -i*4].innerHTML = arr[k][i];
            console.log(`s[i + pos[k]] : ${i + pos[k]}`);
            console.log(`arr[k][i] : ${arr[k][i]}`);
            console.log(`k : ${k}`);
            console.log(`i : ${i}`);
            console.log(`arr[k] : ${arr[k]}`);
            console.log(`a[k] : ${a[k]}`);
          };
          },1);
      }
      // if( i === 0 && arr1[i] !== arr1[i + 1])
    

  })

  // arr[k].forEach((_,i) => {
  //   if(arr[k][i - 1] === arr[i][i]){
  //     arr[k][i - 1] = Number(arr4[i]) + Number(arr[k][i - 1]);
  //     delete arr[k][i];
  //   }
  // })
  
  arr1_[k] = arr[k].filter( (e) => Number(e) !== null && Number(e) !== 0);
  arr1_[k].length = 4;
  for(let i = 0; i < 4; i++) {
    if(arr1_[k][i] === undefined) arr1_[k][i] = "";
  }
  is_same_[k] = ((a[k].length == arr1_[k].length) && a[k].every((e, i) => e === arr1_[k][i]));
    
  

  }


  const tru = [true, true, true, true];
  const is_same_5 = ((tru.length == is_same_.length) && tru.every((e, i) => e === is_same_[i]));
  chiave = !is_same_5;
  
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
    //  console.log("check Game Over is working");
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
  
  if(chiave) setTimeout(newRandomSpotNumber, 150);
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


////////////////////////////////////////////////////////////////////////////////





























// PRIMO TENTATIVO

// const s = document.querySelectorAll(".s");
// const scorePoints = document.querySelector(".score");
// const bestScore = document.querySelector(".best-score")
// const new_game = document.querySelector(".new-game");
// const nascosta = document.querySelector(".overlay");
// const btn_under = document.querySelector(".btn-understood");
// const agree = document.querySelector(".agreement");
// let score = 0;
// let best_score = 0;
// let chiave = true;

// function setNumberSize(num, cel){
//    if(num < 9) {
//      cel.style.fontSize = "60px";
//    } else if(num > 9 && num < 99) {
//      cel.style.fontSize = "50px";
//    } else {
//      cel.style.fontSize = "45px";
//    }
// }

// function setNumberColor(num, cel){
//   if(num === 2) {
//     cel.style.backgroundColor = "rgb(237, 237, 237)";
//     cel.style.color = "grey";
//   }
//   if(num === 4) {
//     cel.style.backgroundColor = "rgb(225, 225, 225)";
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
//     cel.style.backgroundColor = "rgb(3, 255, 3)";
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

// // function copy(){
  
// //   let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent];
// //   let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent];
// //   let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent];
// //   let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent];
// //   let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
// //   let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
// //   let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
// //   let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);

  
// //   const oo = a1.filter((e) => Number(e) !== null && Number(e) !== 0);
// //   console.log(oo[0]);
// //   const rr = a1.lastIndexOf(oo[0]);
// //   console.log(rr); 
// //   console.log(arr1);
// //   const ee = arr1.lastIndexOf(oo[0]);
// //   console.log(ee);

// //   for(let i = rr - 1; i >= ee ; i--) {
// //     console.log("For is working");
// //     setTimeout(setNumberSize, 1000);
// //     setTimeout(setNumberColor, 1000);
// //     // setNumberSize(Number(oo[0]), s[i]);
// //     // setNumberColor(Number(oo[0]), s[i]);
// //     s[i].innerHTML = oo[0];
// //   }

  

// //   arr1.forEach( (e,i) => {
// //     setNumberSize(Number(e), s[i]);
// //     setNumberColor(Number(e), s[i]);
// //     s[i].innerHTML = e;
// //   })

// //   setSquares();

// //   arr1.forEach((_,i) => {
// //     if(arr1[i - 1] === arr1[i]){
// //       arr1[i - 1] = Number(arr1[i]) + Number(arr1[i - 1]);
// //       score = score + Number(arr1[i - 1]);
// //       scorePoints.textContent = `Score : ${score}`;
// //       delete arr1[i];
// //     }
// //   })

// //   const arr1_1 = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
// //   arr1_1.length = 4;
// //   for(let i = 0; i < 4; i++) {
// //     if(arr1_1[i] === undefined) arr1_1[i] = "";
// //   }
// //   const is_same_1 = ((a1.length == arr1_1.length) && a1.every((e, i) => e === arr1_1[i]));

// //   arr2.forEach((_,i) => {
// //     if(arr2[i - 1] === arr2[i]){
// //       arr2[i - 1] = Number(arr2[i]) + Number(arr2[i - 1]);
// //       score = score + Number(arr2[i - 1]);
// //       scorePoints.textContent = `Score : ${score}`;
// //       delete arr2[i];
// //     }
// //   })

// //   const arr1_2 = arr2.filter( (e) => Number(e) !== null && Number(e) !== 0);
// //   arr1_2.length = 4;
// //   for(let i = 0; i < 4; i++) {
// //     if(arr1_2[i] === undefined) arr1_2[i] = "";
// //   }
// //   const is_same_2 = ((a2.length == arr1_2.length) && a2.every((e, i) => e === arr1_2[i]));
  

// //   arr3.forEach((_,i) => {
// //     if(arr3[i - 1] === arr3[i]){
// //       arr3[i - 1] = Number(arr3[i]) + Number(arr3[i - 1]);
// //       score = score + Number(arr3[i - 1]);
// //       scorePoints.textContent = `Score : ${score}`;
// //       delete arr3[i];
// //     }
// //   })

// //   const arr1_3 = arr3.filter( (e) => Number(e) !== null && Number(e) !== 0);
// //   arr1_3.length = 4;
// //   for(let i = 0; i < 4; i++) {
// //     if(arr1_3[i] === undefined) arr1_3[i] = "";
// //   }
// //   const is_same_3 = ((a3.length == arr1_3.length) && a3.every((e, i) => e === arr1_3[i]));
  

// //   arr4.forEach((_,i) => {
// //     if(arr4[i - 1] === arr4[i]){
// //       arr4[i - 1] = Number(arr4[i]) + Number(arr4[i - 1]);
// //       score = score + Number(arr4[i - 1]);
// //       scorePoints.textContent = `Score : ${score}`;
// //       delete arr4[i];
// //     }
// //   })

// //   const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
// //   arr1_4.length = 4;
// //   for(let i = 0; i < 4; i++) {
// //     if(arr1_4[i] === undefined) arr1_4[i] = "";
// //   }
// //   const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));



// //   arr1_1.forEach( (e,i) => {
// //     setNumberSize(Number(e), s[i]);
// //     setNumberColor(Number(e), s[i]);
// //     s[i].innerHTML = e;
// //   })

// //   arr1_2.forEach( (e,i) => {
// //     setNumberSize(Number(e), s[i + 4]);
// //     setNumberColor(Number(e), s[i + 4]);
// //     s[i + 4].innerHTML = e;
// //   })

// //   arr1_3.forEach( (e,i) => {
// //     setNumberSize(Number(e), s[i + 8]);
// //     setNumberColor(Number(e), s[i + 8]);
// //     s[i + 8].innerHTML = e;
// //   })

// //   arr1_4.forEach( (e,i) => {
// //     setNumberSize(Number(e), s[i + 12]);
// //     setNumberColor(Number(e), s[i + 12]);
// //     s[i + 12].innerHTML = e;
// //   })

// //   const tru = [true, true, true, true];
// //   const is_same_ = [is_same_1, is_same_2, is_same_3, is_same_4];
// //   const is_same_5 = ((tru.length == is_same_.length) && tru.every((e, i) => e === is_same_[i]));
// //   chiave = !is_same_5;
// // }

// function move(a1, a2, a3, a4){

//   let arr1 = a1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr2 = a2.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr3 = a3.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   let arr4 = a4.filter( (e) => Number(e) !== null && Number(e) !== 0);

//   // let arr1_1;
//   // let arr1_2;
//   // let arr1_3;
//   // let arr1_4;

//   // let is_same_1;
//   // let is_same_2;
//   // let is_same_3;
//   // let is_same_4;

//   // const arr = [arr1, arr2, arr3, arr4];
//   // const arre = [arr1_1, arr1_2, arr1_3, arr1_4];
//   // const same = [is_same_1, is_same_2, is_same_3, is_same_4];
//   // const aa = [a1, a2, a3, a4];

//   // for(let k = 0; k < 4; k++){
//   //   arr[k].forEach((_,i) => {
//   //     if(arr[k][i - 1] === arr[k][i]){
//   //       arr[k][i - 1] = Number(arr[k][i]) + Number(arr[k][i - 1]);
//   //       console.log(arr[k]);
//   //       score = score + Number(arr[k][i - 1]);
//   //       scorePoints.textContent = `Score : ${score}`;
//   //       delete arr[k][i];
//   //     }
//   //   })
  
//   //   arre[k] = arr1.filter( (e) => Number(e) !== null && Number(e) !== 0);
//   //   arre[k].length = 4;
//   //   for(let i = 0; i < 4; i++) {
//   //     if(arre[k] === undefined) arre[k][i] = "";
//   //   }
//   //   same[k] = ((aa[k].length == arre[k].length) && aa[k].every((e, i) => e === arre[k]));
//   // }

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


//   const tru = [true, true, true, true];
//   const is_same_ = [is_same_1, is_same_2, is_same_3, is_same_4];
//   const is_same_5 = ((tru.length == is_same_.length) && tru.every((e, i) => e === is_same_[i]));
//   chiave = !is_same_5;

//   return [arr1_1, arr1_2, arr1_3, arr1_4];
// }

// function setLeft(){
  
//   let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent];
//   let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent];
//   let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent];
//   let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent];

//   setSquares();

//   const element = move(a1, a2, a3, a4);

//   for(let k = 0, j = 0; j < 4; k += 4, j++){
//     element[j].forEach( (e,i) => {
//       setNumberSize(Number(e), s[i + k]);
//       setNumberColor(Number(e), s[i + k]);
//       s[i + k].innerHTML = e;
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
//   let a1 = [s[0].textContent, s[1].textContent, s[2].textContent, s[3].textContent].reverse();
//   let a2 = [s[4].textContent, s[5].textContent, s[6].textContent, s[7].textContent].reverse();
//   let a3 = [s[8].textContent, s[9].textContent, s[10].textContent, s[11].textContent].reverse();
//   let a4 = [s[12].textContent, s[13].textContent, s[14].textContent, s[15].textContent].reverse();

//   setSquares();

//   const element = move(a1, a2, a3, a4);

//   for(let k = 3, j = 0; j < 4; k += 4, j++){
//     element[j].forEach( (e,i) => {
//       setNumberSize(Number(e), s[k - i]);
//       setNumberColor(Number(e), s[k - i]);
//       s[k - i].innerHTML = e;
//     })
//   }
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

//   let a1 = [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent];
//   let a2 = [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent];
//   let a3 = [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent];
//   let a4 = [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent];
  
//   setSquares();

//   const element = move(a1, a2, a3, a4);

//   for(let k = 0; k < 4; k++){
//     element[k].forEach( (e,i) => {
//       setNumberSize(Number(e), s[i*4 + k]);
//       setNumberColor(Number(e), s[i*4 + k]);
//       s[i*4 + k].innerHTML = e;
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

//   let a1 = [s[0].textContent, s[4].textContent, s[8].textContent, s[12].textContent].reverse();
//   let a2 = [s[1].textContent, s[5].textContent, s[9].textContent, s[13].textContent].reverse();
//   let a3 = [s[2].textContent, s[6].textContent, s[10].textContent, s[14].textContent].reverse();
//   let a4 = [s[3].textContent, s[7].textContent, s[11].textContent, s[15].textContent].reverse();

//   setSquares();

//   const element = move(a1, a2, a3, a4);

//   for(let k = 0; k < 4; k++){
//     element[k].forEach( (e,i) => {
//       setNumberSize(Number(e), s[12 + k - i*4]);
//       setNumberColor(Number(e), s[12 + k - i*4]);
//       s[12 + k - i*4].innerHTML = e;
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
// }

// window.addEventListener("keydown", function (e) {
//   // console.log(e.key);
//   e.preventDefault();
//   checkGameOver();

//   if(checkGameOver()) {
//      console.log("check Game Over is working");
//      nascosta.classList.remove("hidden");
//      if(Number(score) > Number(best_score)) bestScore.innerHTML = `Best Score : ${score}`;
//   }
  
//   if(e.key === "ArrowLeft") {
//     setLeft();
//   }
//   if(e.key === "ArrowRight") {
//     setRight();
//   }
//   if(e.key === "ArrowUp") {
//     setUp();
//   }
//   if(e.key === "ArrowDown") {
//     setDown();
//   }
//   // console.log(chiave);
//   if(chiave) setTimeout(newRandomSpotNumber, 150);
//   // if(Number(score) > Number(best_score)) bestScore.innerHTML = `Best Score : ${score}`;
//   // console.log(score);
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

// })

// btn_under.addEventListener("click", function(){
//    agree.classList.add("hidden-agree");
// })

























//////////////////////////////////////////////////////////////////////////////////////
// LEFT SIDE

///////////////////////////////////////////////////////////////////////////////
  // PARTE 1
  
//   let t_1 = 0;
//   const arrS_1 = [];

//   a1.forEach( (e,i) => {
//     if(e !== ""){
//     // console.log(s[i].getBoundingClientRect());
//     const x1 = s[i].getBoundingClientRect().left;
//     arrS_1.push(x1);
//     // console.log(x1);
//     const y1 = s[i].getBoundingClientRect().top;
//     // console.log(y1);
//     const html = `<div class=moving-l${count}></div>`;
//     // console.log(`moving-${count}`);
//     main.insertAdjacentHTML("afterbegin", html);
//     const mov = document.querySelector(`.moving-l${count}`);
//     // console.log("mov : " + mov);
//     setNumberSize(Number(e), mov);
//     setNumberColor(Number(e), mov);
//     mov.textContent = e;
//     mov.style.fontFamily = "Roboto,Arial";
//     mov.style.fontWeight = "bold";
//     mov.style.display = "flex";
//     mov.style.justifyContent = "center";
//     mov.style.alignItems = "center";
//     mov.style.position = "absolute";
//     mov.style.backgroundColor.zIndex = "500";
//     mov.style.width = "109px";
//     mov.style.height = "109px";
//     mov.style.top = `${Number(y1) - Number(y) - 8}px`;
//     mov.style.left = `${Number(x1) - Number(x) - 8}px`;

//     // document.querySelector(`.moving-${count}`).style.backgroundColor = "green";
    
//     arrIndex.push(count);
//     // console.log("Sezione-1 count = " + count);
    
//     count++;
//   }
//   });



//   arr1.forEach( (e,i) => {
//     // console.log(e);

//     t_1 = 0;
//     let minPoint = s[i].getBoundingClientRect().left - Number(x) - 8;
//     // console.log(minPoint);

//       if(arr1_demo[i - 1] === "&" && arr1_demo[i - 2] === "&"){
//         console.log("Partito l'if : " + arr1_demo[i]);
//         arr1[i] = Number(arr1[i]) + Number(arr1[i - 1]);
//         score = score + Number(arr1[i]);
//         scorePoints.textContent = `Score : ${score}`;
//         const interval = setInterval(function(){
//           t_1 = t_1 + freq;
//           let variation = Number(`${arrS_1[i]}`) - Number(x) - 8 - t_1;
//           minPoint = s[i - 2].getBoundingClientRect().left - Number(x) - 8;
//           document.querySelector(`.moving-l${i}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i}`).remove();
//             setNumberSize(Number(arr1[i]), s[i - 2]);
//             setNumberColor(Number(arr1[i]), s[i - 2]);
//             s[i - 2].innerHTML = arr1[i];
//           };
//         },1);
//       } else if(arr1_demo[i - 1] === "&" && arr1_demo[i] === arr1_demo[i + 1]){
//         console.log("Partito l'else if 1 : " + arr1_demo[i]);
//         const interval = setInterval(function(){
//           t_1 = t_1 + freq;
//           let variation = Number(`${arrS_1[i]}`) - Number(x) - 8 - t_1;
//           minPoint = s[i - 1].getBoundingClientRect().left - Number(x) - 8;
//           document.querySelector(`.moving-l${i}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i}`).remove();
//             setNumberSize(Number(arr1[i]), s[i - 1]);
//             setNumberColor(Number(arr1[i]), s[i - 1]);
//             s[i - 1].innerHTML = arr1[i];
//           };
//         },1);
//       arr1_demo[i] = "&";
//       console.log(arr1_demo[i]);
//       } else if((arr1_demo[i - 1] === "&") && (arr1_demo[i + 1] !== arr1_demo[i])){
//         console.log("Partito l'else if 2 : " + arr1_demo[i]);
//         const interval = setInterval(function(){
//           t_1 = t_1 + freq;
//           let variation = Number(`${arrS_1[i]}`) - Number(x) - 8 - t_1;
//           minPoint = s[i - 1].getBoundingClientRect().left - Number(x) - 8;
//           document.querySelector(`.moving-l${i}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i}`).remove();
//             setNumberSize(Number(arr1[i]), s[i - 1]);
//             setNumberColor(Number(arr1[i]), s[i - 1]);
//             s[i - 1].innerHTML = arr1[i];
//           };
//         },1);
//       } else if((arr1_demo[i - 2] === "&") && (arr1_demo[i - 1] !== arr1_demo[i])){
//         console.log("Partito l'else if 3 : " + arr1_demo[i]);
//         // console.log(arr1_demo[i]);
//         const interval = setInterval(function(){
//           t_1 = t_1 + freq;
//           let variation = Number(`${arrS_1[i]}`) - Number(x) - 8 - t_1;
//           minPoint = s[i - 1].getBoundingClientRect().left - Number(x) - 8;
//           document.querySelector(`.moving-l${i}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i}`).remove();
//             setNumberSize(Number(arr1[i]), s[i - 1]);
//             setNumberColor(Number(arr1[i]), s[i - 1]);
//             s[i - 1].innerHTML = arr1[i];
//           };
//         },1);
//       } else if(arr1_demo[i] === arr1_demo[i - 1]){
//         console.log("Partito l'else if 4 : " + arr1_demo[i]);
//         arr1[i] = Number(arr1[i]) + Number(arr1[i - 1]);
//         score = score + Number(arr1[i]);
//         scorePoints.textContent = `Score : ${score}`;
//         const interval = setInterval(function(){
//           t_1 = t_1 + freq;
//           let variation = Number(`${arrS_1[i]}`) - Number(x) - 8 - t_1;
//           minPoint = s[i - 1].getBoundingClientRect().left - Number(x) - 8;
//           document.querySelector(`.moving-l${i}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i}`).remove();
//             // s[i - 1].style.fontSize = "10px";
//             setNumberSize(Number(arr1[i]), s[i - 1]);
//             setNumberColor(Number(arr1[i]), s[i - 1]);
//             s[i - 1].innerHTML = arr1[i];
            
//           };
//         },1);
//         arr1_demo[i] = "&";
//         console.log(arr1_demo[i]);
//       } else  {
//         console.log("Partito l'else : " + arr1_demo[i]);
//           const interval = setInterval(function(){
//           t_1 = t_1 + freq;
//           let variation = Number(`${arrS_1[i]}`) - Number(x) - 8 - t_1;
//           document.querySelector(`.moving-l${i}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i}`).remove();
//             setNumberSize(Number(arr1[i]), s[i]);
//             setNumberColor(Number(arr1[i]), s[i]);
//             s[i].innerHTML = arr1[i];
//           };
//           },1);
//       }
//       // if( i === 0 && arr1[i] !== arr1[i + 1])
    

//   })

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
//   //////////////////////////////////////////////////////////////////////////////////
//   // PARTE 2

//   let t_2 = 0;
//   const arrS_2 = [];
  

//   a2.forEach( (e,i) => {
//     if(e !== ""){
//     // console.log(s[i].getBoundingClientRect());
//     const x1 = s[i + 4].getBoundingClientRect().left; // CAMBIO i di s + 4
//     arrS_2.push(x1);
//     // console.log(x1);
//     const y1 = s[i + 4].getBoundingClientRect().top; // CAMBIO i di s + 4
//     // console.log(y1);
//     const html = `<div class=moving-l${count}></div>`;
//     // console.log(`moving-${count}`);
//     main.insertAdjacentHTML("afterbegin", html);
//     const mov = document.querySelector(`.moving-l${count}`);
//     // console.log("mov : " + mov);
//     setNumberSize(Number(e), mov);
//     setNumberColor(Number(e), mov);
//     mov.textContent = e;
//     mov.style.fontFamily = "Roboto,Arial";
//     mov.style.fontWeight = "bold";
//     mov.style.display = "flex";
//     mov.style.justifyContent = "center";
//     mov.style.alignItems = "center";
//     mov.style.position = "absolute";
//     mov.style.backgroundColor.zIndex = "500";
//     mov.style.width = "109px";
//     mov.style.height = "109px";
//     mov.style.top = `${Number(y1) - Number(y) - 8}px`;
//     mov.style.left = `${Number(x1) - Number(x) - 8}px`;

//     // document.querySelector(`.moving-${count}`).style.backgroundColor = "green";
    
    
//     count++;
//   }
//   });



//   arr2.forEach( (e,i) => {
//     // console.log(e);

//     t_2 = 0;
//     let minPoint = s[i + 4].getBoundingClientRect().left - Number(x) - 8;
//     // console.log(minPoint);

//       if(arr2_demo[i - 1] === "&" && arr2_demo[i - 2] === "&"){
//         console.log("Partito l'if : " + arr2_demo[i]);
//         arr2[i] = Number(arr2[i]) + Number(arr2[i - 1]);
//         score = score + Number(arr2[i]);
//         scorePoints.textContent = `Score : ${score}`;
//         const interval = setInterval(function(){
//           t_2 = t_2 + freq;
//           let variation = Number(`${arrS_2[i]}`) - Number(x) - 8 - t_2;
//           minPoint = s[i - 2 + 4].getBoundingClientRect().left - Number(x) - 8;
//           document.querySelector(`.moving-l${i + dim_1}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i + dim_1}`).remove();
//             setNumberSize(Number(arr2[i]), s[i - 2 + 4]);
//             setNumberColor(Number(arr2[i]), s[i - 2 + 4]);
//             s[i - 2 + 4].innerHTML = arr2[i];
//           };
//         },1);
//       } else if(arr2_demo[i - 1] === "&" && arr2_demo[i] === arr2_demo[i + 1]){
//         console.log("Partito l'else if 1 : " + arr2_demo[i]);
//         const interval = setInterval(function(){
//           t_2 = t_2 + freq;
//           let variation = Number(`${arrS_2[i]}`) - Number(x) - 8 - t_2;
//           minPoint = s[i - 1 + 4].getBoundingClientRect().left - Number(x) - 8;
//           document.querySelector(`.moving-l${i + dim_1}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i + dim_1}`).remove();
//             setNumberSize(Number(arr2[i]), s[i - 1 + 4]);
//             setNumberColor(Number(arr2[i]), s[i - 1 + 4]);
//             s[i - 1 + 4].innerHTML = arr2[i];
//           };
//         },1);
//       arr2_demo[i] = "&";
//       console.log(arr2_demo[i]);
//       } else if((arr2_demo[i - 1] === "&") && (arr2_demo[i + 1] !== arr2_demo[i])){
//         console.log("Partito l'else if 2 : " + arr2_demo[i]);
//         const interval = setInterval(function(){
//           t_2 = t_2 + freq;
//           let variation = Number(`${arrS_2[i]}`) - Number(x) - 8 - t_2;
//           minPoint = s[i - 1 + 4].getBoundingClientRect().left - Number(x) - 8;
//           document.querySelector(`.moving-l${i + dim_1}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i + dim_1}`).remove();
//             setNumberSize(Number(arr2[i]), s[i - 1 + 4]);
//             setNumberColor(Number(arr2[i]), s[i - 1 + 4]);
//             s[i - 1 + 4].innerHTML = arr2[i];
//           };
//         },1);
//       } else if((arr2_demo[i - 2] === "&") && (arr2_demo[i - 1] !== arr2_demo[i])){
//         console.log("Partito l'else if 3 : " + arr2_demo[i]);
//         // console.log(arr2_demo[i]);
//         const interval = setInterval(function(){
//           t_2 = t_2 + freq;
//           let variation = Number(`${arrS_2[i]}`) - Number(x) - 8 - t_2;
//           minPoint = s[i - 1 + 4].getBoundingClientRect().left - Number(x) - 8;
//           document.querySelector(`.moving-l${i + dim_1}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i + dim_1}`).remove();
//             setNumberSize(Number(arr2[i]), s[i - 1 + 4]);
//             setNumberColor(Number(arr2[i]), s[i - 1 + 4]);
//             s[i - 1 + 4].innerHTML = arr2[i];
//           };
//         },1);
//       } else if(arr2_demo[i] === arr2_demo[i - 1]){
//         console.log("Partito l'else if 4 : " + arr2_demo[i]);
//         arr2[i] = Number(arr2[i]) + Number(arr2[i - 1]);
//         score = score + Number(arr2[i]);
//         scorePoints.textContent = `Score : ${score}`;
//         const interval = setInterval(function(){
//           t_2 = t_2 + freq;
//           let variation = Number(`${arrS_2[i]}`) - Number(x) - 8 - t_2;
//           minPoint = s[i - 1 + 4].getBoundingClientRect().left - Number(x) - 8;
//           document.querySelector(`.moving-l${i + dim_1}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i + dim_1}`).remove();
//             // s[i - 1].style.fontSize = "10px";
//             setNumberSize(Number(arr2[i]), s[i - 1 + 4]);
//             setNumberColor(Number(arr2[i]), s[i - 1 + 4]);
//             s[i - 1 + 4].innerHTML = arr2[i];
            
//           };
//         },1);
//         arr2_demo[i] = "&";
//         console.log(arr2_demo[i]);
//       } else  {
//         console.log("Partito l'else : " + arr2_demo[i]);
//           const interval = setInterval(function(){
//           t_2 = t_2 + freq;
//           let variation = Number(`${arrS_2[i]}`) - Number(x) - 8 - t_2;
//           document.querySelector(`.moving-l${i + dim_1}`).style.left = `${variation}px`;

//           if(variation < minPoint) {
//             clearInterval(interval);
//             document.querySelector(`.moving-l${i + dim_1}`).remove();
//             setNumberSize(Number(arr2[i]), s[i + 4]);
//             setNumberColor(Number(arr2[i]), s[i + 4]);
//             s[i + 4].innerHTML = arr2[i];
//           };
//           },1);
//       }
//       // if( i === 0 && arr1[i] !== arr1[i + 1])
    

//   })

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
//   ////////////////////////////////////////////////////////////////////////////////
//   // PARTE 3

// let t_3 = 0;
// const arrS_3 = [];


// a3.forEach( (e,i) => {
//   if(e !== ""){
//   // console.log(s[i].getBoundingClientRect());
//   const x1 = s[i + 8].getBoundingClientRect().left; // CAMBIO i di s + 4
//   arrS_3.push(x1);
//   // console.log(x1);
//   const y1 = s[i + 8].getBoundingClientRect().top; // CAMBIO i di s + 4
//   // console.log(y1);
//   const html = `<div class=moving-l${count}></div>`;
//   // console.log(`moving-${count}`);
//   main.insertAdjacentHTML("afterbegin", html);
//   const mov = document.querySelector(`.moving-l${count}`);
//   // console.log("mov : " + mov);
//   setNumberSize(Number(e), mov);
//   setNumberColor(Number(e), mov);
//   mov.textContent = e;
//   mov.style.fontFamily = "Roboto,Arial";
//   mov.style.fontWeight = "bold";
//   mov.style.display = "flex";
//   mov.style.justifyContent = "center";
//   mov.style.alignItems = "center";
//   mov.style.position = "absolute";
//   mov.style.backgroundColor.zIndex = "500";
//   mov.style.width = "109px";
//   mov.style.height = "109px";
//   mov.style.top = `${Number(y1) - Number(y) - 8}px`;
//   mov.style.left = `${Number(x1) - Number(x) - 8}px`;

//   // document.querySelector(`.moving-${count}`).style.backgroundColor = "green";
  
  
//   count++;
// }
// });



// arr3.forEach( (e,i) => {
//   // console.log(e);

//   t_3 = 0;
//   let minPoint = s[i + 8].getBoundingClientRect().left - Number(x) - 8;
//   // console.log(minPoint);

//     if(arr3_demo[i - 1] === "&" && arr3_demo[i - 2] === "&"){
//       console.log("Partito l'if : " + arr3_demo[i]);
//       arr3[i] = Number(arr3[i]) + Number(arr3[i - 1]);
//       score = score + Number(arr3[i]);
//       scorePoints.textContent = `Score : ${score}`;
//       const interval = setInterval(function(){
//         t_3 = t_3 + freq;
//         let variation = Number(`${arrS_3[i]}`) - Number(x) - 8 - t_3;
//         minPoint = s[i - 2 + 8].getBoundingClientRect().left - Number(x) - 8;
//         document.querySelector(`.moving-l${i + dim_2}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_2}`).remove();
//           setNumberSize(Number(arr3[i]), s[i - 2 + 8]);
//           setNumberColor(Number(arr3[i]), s[i - 2 + 8]);
//           s[i - 2 + 8].innerHTML = arr3[i];
//         };
//       },1);
//     } else if(arr3_demo[i - 1] === "&" && arr3_demo[i] === arr3_demo[i + 1]){
//       console.log("Partito l'else if 1 : " + arr3_demo[i]);
//       const interval = setInterval(function(){
//         t_3 = t_3 + freq;
//         let variation = Number(`${arrS_3[i]}`) - Number(x) - 8 - t_3;
//         minPoint = s[i - 1 + 8].getBoundingClientRect().left - Number(x) - 8;
//         document.querySelector(`.moving-l${i + dim_2}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_2}`).remove();
//           setNumberSize(Number(arr3[i]), s[i - 1 + 8]);
//           setNumberColor(Number(arr3[i]), s[i - 1 + 8]);
//           s[i - 1 + 8].innerHTML = arr3[i];
//         };
//       },1);
//     arr3_demo[i] = "&";
//     console.log(arr3_demo[i]);
//     } else if((arr3_demo[i - 1] === "&") && (arr3_demo[i + 1] !== arr3_demo[i])){
//       console.log("Partito l'else if 2 : " + arr3_demo[i]);
//       const interval = setInterval(function(){
//         t_3 = t_3 + freq;
//         let variation = Number(`${arrS_3[i]}`) - Number(x) - 8 - t_3;
//         minPoint = s[i - 1 + 8].getBoundingClientRect().left - Number(x) - 8;
//         document.querySelector(`.moving-l${i + dim_2}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_2}`).remove();
//           setNumberSize(Number(arr3[i]), s[i - 1 + 8]);
//           setNumberColor(Number(arr3[i]), s[i - 1 + 8]);
//           s[i - 1 + 8].innerHTML = arr3[i];
//         };
//       },1);
//     } else if((arr3_demo[i - 2] === "&") && (arr3_demo[i - 1] !== arr3_demo[i])){
//       console.log("Partito l'else if 3 : " + arr3_demo[i]);
//       // console.log(arr2_demo[i]);
//       const interval = setInterval(function(){
//         t_3 = t_3 + freq;
//         let variation = Number(`${arrS_3[i]}`) - Number(x) - 8 - t_3;
//         minPoint = s[i - 1 + 8].getBoundingClientRect().left - Number(x) - 8;
//         document.querySelector(`.moving-l${i + dim_2}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_2}`).remove();
//           setNumberSize(Number(arr3[i]), s[i - 1 + 8]);
//           setNumberColor(Number(arr3[i]), s[i - 1 + 8]);
//           s[i - 1 + 8].innerHTML = arr3[i];
//         };
//       },1);
//     } else if(arr3_demo[i] === arr3_demo[i - 1]){
//       console.log("Partito l'else if 4 : " + arr3_demo[i]);
//       arr3[i] = Number(arr3[i]) + Number(arr3[i - 1]);
//       score = score + Number(arr3[i]);
//       scorePoints.textContent = `Score : ${score}`;
//       const interval = setInterval(function(){
//         t_3 = t_3 + freq;
//         let variation = Number(`${arrS_3[i]}`) - Number(x) - 8 - t_3;
//         minPoint = s[i - 1 + 8].getBoundingClientRect().left - Number(x) - 8;
//         document.querySelector(`.moving-l${i + dim_2}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_2}`).remove();
//           // s[i - 1].style.fontSize = "10px";
//           setNumberSize(Number(arr3[i]), s[i - 1 + 8]);
//           setNumberColor(Number(arr3[i]), s[i - 1 + 8]);
//           s[i - 1 + 8].innerHTML = arr3[i];
          
//         };
//       },1);
//       arr3_demo[i] = "&";
//       console.log(arr3_demo[i]);
//     } else  {
//       console.log("Partito l'else : " + arr3_demo[i]);
//         const interval = setInterval(function(){
//         t_3 = t_3 + freq;
//         let variation = Number(`${arrS_3[i]}`) - Number(x) - 8 - t_3;
//         document.querySelector(`.moving-l${i + dim_2}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_2}`).remove();
//           setNumberSize(Number(arr3[i]), s[i + 8]);
//           setNumberColor(Number(arr3[i]), s[i + 8]);
//           s[i + 8].innerHTML = arr3[i];
//         };
//         },1);
//     }
//     // if( i === 0 && arr1[i] !== arr1[i + 1])
  

// })


// arr3.forEach((_,i) => {
//   if(arr3[i - 1] === arr3[i]){
//     arr3[i - 1] = Number(arr3[i]) + Number(arr3[i - 1]);
//     delete arr3[i];
//   }
// })


// const arr1_3 = arr3.filter( (e) => Number(e) !== null && Number(e) !== 0);
// arr1_3.length = 4;
// for(let i = 0; i < 4; i++) {
//   if(arr1_3[i] === undefined) arr1_3[i] = "";
// }
// const is_same_3 = ((a3.length == arr1_3.length) && a3.every((e, i) => e === arr1_3[i]));

// //////////////////////////////////////////////////////////////////////////////////////////////
// // PARTE 4

// let t_4 = 0;
// const arrS_4 = [];


// a4.forEach( (e,i) => {
//   if(e !== ""){
//   // console.log(s[i].getBoundingClientRect());
//   const x1 = s[i + 12].getBoundingClientRect().left; // CAMBIO i di s + 4
//   arrS_4.push(x1);
//   // console.log(x1);
//   const y1 = s[i + 12].getBoundingClientRect().top; // CAMBIO i di s + 4
//   // console.log(y1);
//   const html = `<div class=moving-l${count}></div>`;
//   // console.log(`moving-${count}`);
//   main.insertAdjacentHTML("afterbegin", html);
//   const mov = document.querySelector(`.moving-l${count}`);
//   // console.log("mov : " + mov);
//   setNumberSize(Number(e), mov);
//   setNumberColor(Number(e), mov);
//   mov.textContent = e;
//   mov.style.fontFamily = "Roboto,Arial";
//   mov.style.fontWeight = "bold";
//   mov.style.display = "flex";
//   mov.style.justifyContent = "center";
//   mov.style.alignItems = "center";
//   mov.style.position = "absolute";
//   mov.style.backgroundColor.zIndex = "500";
//   mov.style.width = "109px";
//   mov.style.height = "109px";
//   mov.style.top = `${Number(y1) - Number(y) - 8}px`;
//   mov.style.left = `${Number(x1) - Number(x) - 8}px`;

//   // document.querySelector(`.moving-${count}`).style.backgroundColor = "green";
  
  
//   count++;
// }
// });



// arr4.forEach( (e,i) => {
//   // console.log(e);

//   t_4 = 0;
//   let minPoint = s[i + 12].getBoundingClientRect().left - Number(x) - 8;
//   // console.log(minPoint);

//     if(arr4_demo[i - 1] === "&" && arr4_demo[i - 2] === "&"){
//       console.log("Partito l'if : " + arr4_demo[i]);
//       arr4[i] = Number(arr4[i]) + Number(arr4[i - 1]);
//       score = score + Number(arr4[i]);
//       scorePoints.textContent = `Score : ${score}`;
//       const interval = setInterval(function(){
//         t_4 = t_4 + freq;
//         let variation = Number(`${arrS_4[i]}`) - Number(x) - 8 - t_4;
//         minPoint = s[i - 2 + 12].getBoundingClientRect().left - Number(x) - 8;
//         document.querySelector(`.moving-l${i + dim_3}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_3}`).remove();
//           setNumberSize(Number(arr4[i]), s[i - 2 + 12]);
//           setNumberColor(Number(arr4[i]), s[i - 2 + 12]);
//           s[i - 2 + 12].innerHTML = arr4[i];
//         };
//       },1);
//     } else if(arr4_demo[i - 1] === "&" && arr4_demo[i] === arr4_demo[i + 1]){
//       console.log("Partito l'else if 1 : " + arr4_demo[i]);
//       const interval = setInterval(function(){
//         t_4 = t_4 + freq;
//         let variation = Number(`${arrS_4[i]}`) - Number(x) - 8 - t_4;
//         minPoint = s[i - 1 + 12].getBoundingClientRect().left - Number(x) - 8;
//         document.querySelector(`.moving-l${i + dim_3}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_3}`).remove();
//           setNumberSize(Number(arr4[i]), s[i - 1 + 12]);
//           setNumberColor(Number(arr4[i]), s[i - 1 + 12]);
//           s[i - 1 + 12].innerHTML = arr4[i];
//         };
//       },1);
//     arr4_demo[i] = "&";
//     console.log(arr4_demo[i]);
//     } else if((arr4_demo[i - 1] === "&") && (arr4_demo[i + 1] !== arr4_demo[i])){
//       console.log("Partito l'else if 2 : " + arr4_demo[i]);
//       const interval = setInterval(function(){
//         t_4 = t_4 + freq;
//         let variation = Number(`${arrS_4[i]}`) - Number(x) - 8 - t_4;
//         minPoint = s[i - 1 + 12].getBoundingClientRect().left - Number(x) - 8;
//         document.querySelector(`.moving-l${i + dim_3}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_3}`).remove();
//           setNumberSize(Number(arr4[i]), s[i - 1 + 12]);
//           setNumberColor(Number(arr4[i]), s[i - 1 + 12]);
//           s[i - 1 + 12].innerHTML = arr4[i];
//         };
//       },1);
//     } else if((arr4_demo[i - 2] === "&") && (arr4_demo[i - 1] !== arr4_demo[i])){
//       console.log("Partito l'else if 3 : " + arr4_demo[i]);
//       // console.log(arr2_demo[i]);
//       const interval = setInterval(function(){
//         t_4 = t_4 + freq;
//         let variation = Number(`${arrS_4[i]}`) - Number(x) - 8 - t_4;
//         minPoint = s[i - 1 + 12].getBoundingClientRect().left - Number(x) - 8;
//         document.querySelector(`.moving-l${i + dim_3}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_3}`).remove();
//           setNumberSize(Number(arr4[i]), s[i - 1 + 12]);
//           setNumberColor(Number(arr4[i]), s[i - 1 + 12]);
//           s[i - 1 + 12].innerHTML = arr4[i];
//         };
//       },1);
//     } else if(arr4_demo[i] === arr4_demo[i - 1]){
//       console.log("Partito l'else if 4 : " + arr4_demo[i]);
//       arr4[i] = Number(arr4[i]) + Number(arr4[i - 1]);
//       score = score + Number(arr4[i]);
//       scorePoints.textContent = `Score : ${score}`;
//       const interval = setInterval(function(){
//         t_4 = t_4 + freq;
//         let variation = Number(`${arrS_4[i]}`) - Number(x) - 8 - t_4;
//         minPoint = s[i - 1 + 12].getBoundingClientRect().left - Number(x) - 8;
//         document.querySelector(`.moving-l${i + dim_3}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_3}`).remove();
//           // s[i - 1].style.fontSize = "10px";
//           setNumberSize(Number(arr4[i]), s[i - 1 + 12]);
//           setNumberColor(Number(arr4[i]), s[i - 1 + 12]);
//           s[i - 1 + 12].innerHTML = arr4[i];
          
//         };
//       },1);
//       arr4_demo[i] = "&";
//       console.log(arr4_demo[i]);
//     } else  {
//       console.log("Partito l'else : " + arr4_demo[i]);
//         const interval = setInterval(function(){
//         t_4 = t_4 + freq;
//         let variation = Number(`${arrS_4[i]}`) - Number(x) - 8 - t_4;
//         document.querySelector(`.moving-l${i + dim_3}`).style.left = `${variation}px`;

//         if(variation < minPoint) {
//           clearInterval(interval);
//           document.querySelector(`.moving-l${i + dim_3}`).remove();
//           setNumberSize(Number(arr4[i]), s[i + 12]);
//           setNumberColor(Number(arr4[i]), s[i + 12]);
//           s[i + 12].innerHTML = arr4[i];
//         };
//         },1);
//     }
//     // if( i === 0 && arr1[i] !== arr1[i + 1])
  

// })


// arr4.forEach((_,i) => {
//   if(arr4[i - 1] === arr4[i]){
//     arr4[i - 1] = Number(arr4[i]) + Number(arr4[i - 1]);
//     delete arr4[i];
//   }
// })

// const arr1_4 = arr4.filter( (e) => Number(e) !== null && Number(e) !== 0);
// arr1_4.length = 4;
// for(let i = 0; i < 4; i++) {
//   if(arr1_4[i] === undefined) arr1_4[i] = "";
// }
// const is_same_4 = ((a4.length == arr1_4.length) && a4.every((e, i) => e === arr1_4[i]));


// /////////////////////////////////////////////////////////////////////////////////////
  


//   // const element = [arr1_1, arr1_2, arr1_3, arr1_4];


//   // for(let k = 0, j = 0; j < 4; k += 4, j++){
//   //   element[j].forEach( (e,i) => {
//   //     setNumberSize(Number(e), s[i + k]);
//   //     setNumberColor(Number(e), s[i + k]);
//   //     s[i + k].innerHTML = e;
//   //   })
//   // }