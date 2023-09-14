let xo = document.querySelectorAll(".xo");
let newStyle = document.head.appendChild(document.createElement("style"));
let popCont = document.querySelector(`[class="contpop"]`);
let Pop = document.querySelector(`[class="pop"]`);
let winPlayer = document.querySelector(`[class="player"]`);
let score1 = document.querySelector(`[class="score1"]`);
let score2 = document.querySelector(`[class="score2"]`);
let name1 = document.querySelector(`[class="name1"]`);
let name2 = document.querySelector(`[class="name2"]`);
let cancel = document.querySelector(`[class="cancel"]`);
let playerTurn1 = document.querySelector(`[class="player p1"]`);
let playerTurn2 = document.querySelector(`[class="player p2"]`);
let playerName1;
let playerName2;
let players = document.querySelector(`[class="players"]`);
let contname1 = document.querySelector(`[class="contname1"]`);
let contname2 = document.querySelector(`[class="contname2"]`);
let n1 = document.querySelector(`[id="n1"]`);
let n2 = document.querySelector(`[id="n2"]`);
let done1 = document.querySelector(`[id="d1"]`);
let done2 = document.querySelector(`[id="d2"]`);
let again = document.querySelector(`[class="again"]`);

done1.addEventListener("click", () => {
  if (n1.value.trim() != "") {
    localStorage.name1 = n1.value;
    playerName1 = localStorage.name1;
    contname1.style.display = "none";
    contname2.style.display = "flex";
  }
});
done2.addEventListener("click", () => {
  if (n2.value.trim() != "") {
    localStorage.name2 = n2.value;
    playerName2 = localStorage.name2;
    contname2.style.display = "none";
    players.style.display = "flex";
  }
  name1.innerHTML = `${playerName1}`;
  name2.innerHTML = `${playerName2}`;
  localStorage.xo = "X";
  if (!localStorage.x) {
    localStorage.x = 0;
  }
  if (!localStorage.o) {
    localStorage.o = 0;
  }
  score1.innerHTML = `${localStorage.x}`;
  score2.innerHTML = `${localStorage.o}`;
  again.style.display = "block";
});

if (!localStorage.name1 && !localStorage.name2) {
  players.style.display = "none";
  contname1.style.display = "flex";
} else {
  playerName1 = localStorage.name1;
  playerName2 = localStorage.name2;
  name1.innerHTML = `${playerName1}`;
  name2.innerHTML = `${playerName2}`;
  localStorage.xo = "X";
  if (!localStorage.x) {
    localStorage.x = 0;
  }
  if (!localStorage.o) {
    localStorage.o = 0;
  }
  score1.innerHTML = `${localStorage.x}`;
  score2.innerHTML = `${localStorage.o}`;
  again.style.display = "block";
}

playerTurn1.style.cssText = `opacity:100%;
border: 4px solid black;`;
playerTurn2.style.cssText = `opacity:50%;
border: 4px solid #00dcff;`;
//Play XO
xo.forEach((element) => {
  element.addEventListener("click", (el) => {
    let p = el.target.children[0];
    let word = localStorage.xo;
    let txt = document.createTextNode(`${word}`);
    p.appendChild(txt);
    element.appendChild(p);
    element.style.pointerEvents = "none";
    if (word == "X") {
      p.classList.remove("o");
      p.classList.add("x");
      localStorage.xo = "O";
      playerTurn1.style.cssText = `opacity:50%;
                                  border: 4px solid #00dcff;`;
      playerTurn2.style.cssText = `opacity:100%;
                                  border: 4px solid black;`;
    } else {
      p.classList.remove("x");
      p.classList.add("o");
      localStorage.xo = "X";
      playerTurn1.style.cssText = `opacity:100%;
                                  border: 4px solid black;`;
      playerTurn2.style.cssText = `opacity:50%;
                                  border: 4px solid #00dcff;`;
    }
  });
});

//Who Win?!
xo.forEach((element) => {
  element.addEventListener("click", () => {
    let x1 = xo[0].children[0].innerHTML;
    let x2 = xo[1].children[0].innerHTML;
    let x3 = xo[2].children[0].innerHTML;
    let x4 = xo[3].children[0].innerHTML;
    let x5 = xo[4].children[0].innerHTML;
    let x6 = xo[5].children[0].innerHTML;
    let x7 = xo[6].children[0].innerHTML;
    let x8 = xo[7].children[0].innerHTML;
    let x9 = xo[8].children[0].innerHTML;
    if (x1 == x2 && x2 == x3 && x1 == "X") {
      localStorage.x = +localStorage.x + 1;
      //Win
      win("xo1", "xo2", "xo3");
      //Pop Up How win !?
      pop(playerName1, localStorage.x);
      //Clear
    } else if (x4 == x5 && x5 == x6 && x4 == "X") {
      localStorage.x = +localStorage.x + 1;
      //Win
      win("xo4", "xo5", "xo6");
      //Pop Up How win !?
      pop(playerName1, localStorage.x);
      //Clear
    } else if (x7 == x8 && x8 == x9 && x7 == "X") {
      localStorage.x = +localStorage.x + 1;
      //Win
      win("xo7", "xo8", "xo9");
      //Pop Up How win !?
      pop(playerName1, localStorage.x);
      //Clear
    } else if (x1 == x4 && x4 == x7 && x1 == "X") {
      localStorage.x = +localStorage.x + 1;
      //Win
      win("xo1", "xo4", "xo7");
      //Rotat
      newStyle.innerHTML = `
              #xo1:before {
                    animation-name: xo3;
                    top: 6px;
                    left: 50%;
                    transform-origin: top left;
                    transform: rotate(90deg);
              }
              #xo1{
                      background-color: #777;
              }
              #xo4{
                      background-color: #777;
              }
              #xo7{
                      background-color: #777;
              `;
      //Pop Up How win !?
      pop(playerName1, localStorage.x);
      //Clear
    } else if (x2 == x5 && x5 == x8 && x2 == "X") {
      localStorage.x = +localStorage.x + 1;
      //Win
      win("xo2", "xo5", "xo8");
      //Rotat
      newStyle.innerHTML = `
              #xo2:before {
                    animation-name: xo3;
                    top: 6px;
                    left: 50%;
                    transform-origin: top left;
                    transform: rotate(90deg);
              }
              #xo2{
                      background-color: #777;
              }
              #xo5{
                      background-color: #777;
              }
              #xo8{
                      background-color: #777;
              `;
      //Pop Up How win !?
      pop(playerName1, localStorage.x);
      //Clear
    } else if (x3 == x6 && x6 == x9 && x3 == "X") {
      localStorage.x = +localStorage.x + 1;
      //Win
      win("xo3", "xo6", "xo9");
      //Rotat
      newStyle.innerHTML = `
              #xo3:before {
                    animation-name: xo3;
                    top: 6px;
                    left: 50%;
                    transform-origin: top left;
                    transform: rotate(90deg);
              }
              #xo3{
                      background-color: #777;
              }
              #xo6{
                      background-color: #777;
              }
              #xo9{
                      background-color: #777;
              `;
      //Pop Up How win !?
      pop(playerName1, localStorage.x);
      //Clear
    } else if (x1 == x5 && x5 == x9 && x1 == "X") {
      localStorage.x = +localStorage.x + 1;
      //Win
      win("xo1", "xo5", "xo9");
      //Rotat
      newStyle.innerHTML = `
              #xo1:before {
                transform: rotate(41deg);
                transform-origin: top left;        
                animation-name: xo2;
                top: 0px;
                left: -4px;
              }
              #xo1{
                      background-color: #777;
              }
              #xo5{
                      background-color: #777;
              }
              #xo9{
                      background-color: #777;
              `;
      //Pop Up How win !?
      pop(playerName1, localStorage.x);
      //Clear
    } else if (x3 == x5 && x5 == x7 && x3 == "X") {
      localStorage.x = +localStorage.x + 1;
      //Win
      win("xo3", "xo5", "xo7");
      //Rotat
      newStyle.innerHTML = `
              #xo3:before {
                transform: rotate(316deg);
                transform-origin: top right;
                animation-name: xo2;
                top: 0px;
                right: 21px;
                left: unset;
              }
              #xo3{
                      background-color: #777;
              }
              #xo5{
                      background-color: #777;
              }
              #xo7{
                      background-color: #777;
              `;
      //Pop Up How win !?
      pop(playerName1, localStorage.x);
      //Clear
    } else if (
      x1 != "" &&
      x2 != "" &&
      x3 != "" &&
      x4 != "" &&
      x5 != "" &&
      x6 != "" &&
      x7 != "" &&
      x8 != "" &&
      x9 != ""
    ) {
      pop3();
    } else if (x1 == x2 && x2 == x3 && x1 == "O") {
      localStorage.o = +localStorage.o + 1;
      //Win
      win("xo1", "xo2", "xo3");
      //Pop Up How win !?
      pop2(playerName2, localStorage.o);
      //Clear
    } else if (x4 == x5 && x5 == x6 && x4 == "O") {
      localStorage.o = +localStorage.o + 1;
      //Win
      win("xo4", "xo5", "xo6");
      //Pop Up How win !?
      pop2(playerName2, localStorage.o);
      //Clear
    } else if (x7 == x8 && x8 == x9 && x7 == "O") {
      localStorage.o = +localStorage.o + 1;
      //Win
      win("xo7", "xo8", "xo9");
      //Pop Up How win !?
      pop2(playerName2, localStorage.o);
      //Clear
    } else if (x1 == x4 && x4 == x7 && x1 == "O") {
      localStorage.o = +localStorage.o + 1;
      //Win
      win("xo1", "xo4", "xo7");
      //Rotat
      newStyle.innerHTML = `
              #xo1:before {
                    animation-name: xo3;
                    top: 6px;
                    left: 50%;
                    transform-origin: top left;
                    transform: rotate(90deg);
              }
              #xo1{
                      background-color: #777;
              }
              #xo4{
                      background-color: #777;
              }
              #xo7{
                      background-color: #777;
              `;
      //Pop Up How win !?
      pop2(playerName2, localStorage.o);
      //Clear
    } else if (x2 == x5 && x5 == x8 && x2 == "O") {
      localStorage.o = +localStorage.o + 1;
      //Win
      win("xo2", "xo5", "xo8");
      //Rotat
      newStyle.innerHTML = `
              #xo2:before {
                    animation-name: xo3;
                    top: 6px;
                    left: 50%;
                    transform-origin: top left;
                    transform: rotate(90deg);
              }
              #xo2{
                      background-color: #777;
              }
              #xo5{
                      background-color: #777;
              }
              #xo8{
                      background-color: #777;
              `;
      //Pop Up How win !?
      pop2(playerName2, localStorage.o);
      //Clear
    } else if (x3 == x6 && x6 == x9 && x3 == "O") {
      localStorage.o = +localStorage.o + 1;
      //Win
      win("xo3", "xo6", "xo9");
      //Rotat
      newStyle.innerHTML = `
              #xo3:before {
                    animation-name: xo3;
                    top: 6px;
                    left: 50%;
                    transform-origin: top left;
                    transform: rotate(90deg);
              }
              #xo3{
                      background-color: #777;
              }
              #xo6{
                      background-color: #777;
              }
              #xo9{
                      background-color: #777;
              `;
      //Pop Up How win !?
      pop2(playerName2, localStorage.o);
      //Clear
    } else if (x1 == x5 && x5 == x9 && x1 == "O") {
      localStorage.o = +localStorage.o + 1;
      //Win
      win("xo1", "xo5", "xo9");
      //Rotat
      newStyle.innerHTML = `
              #xo1:before {
                transform: rotate(41deg);
                transform-origin: top left;        
                animation-name: xo2;
                top: 0px;
                left: -4px;
              }
              #xo1{
                      background-color: #777;
              }
              #xo5{
                      background-color: #777;
              }
              #xo9{
                      background-color: #777;
              `;
      //Pop Up How win !?
      pop2(playerName2, localStorage.o);
      //Clear
    } else if (x3 == x5 && x5 == x7 && x3 == "O") {
      localStorage.o = +localStorage.o + 1;
      //Win
      win("xo3", "xo5", "xo7");
      //Rotat
      newStyle.innerHTML = `
              #xo3:before {
                transform: rotate(316deg);
                transform-origin: top right;
                animation-name: xo2;
                top: 0px;
                right: 21px;
                left: unset;
              }
              #xo3{
                      background-color: #777;
              }
              #xo5{
                      background-color: #777;
              }
              #xo7{
                      background-color: #777;
              `;
      //Pop Up How win !?
      pop2(playerName2, localStorage.o);
      //Clear
    } else if (
      x1 != "" &&
      x2 != "" &&
      x3 != "" &&
      x4 != "" &&
      x5 != "" &&
      x6 != "" &&
      x7 != "" &&
      x8 != "" &&
      x9 != ""
    ) {
      pop3();
    }
  });
});

//Functions

// Kill Function
function Kill() {
  xo.forEach((element) => {
    element.style.pointerEvents = "initial";
    // element.style.backgroundColor = "initial";
    element.children[0].innerHTML = "";
  });
  newStyle.innerHTML = "";
  playerTurn1.style.cssText = `opacity:100%;
border: 4px solid black;`;
  playerTurn2.style.cssText = `opacity:50%;
border: 4px solid #00dcff;`;
}

// Win Function
function win(xo1, xo2, xo3) {
  newStyle.innerHTML = `
  #${xo1}:before {
    animation-name: xo1;        
  }
  #${xo1}{
    background-color: #777;
  }
  #${xo2}{
    background-color: #777;
  }
    #${xo3}{
      background-color: #777;
      }`;
}

// Pop Function
function pop(x, y) {
  popCont.style.display = "flex";
  setTimeout(() => {
    Pop.style.display = "flex";
    winPlayer.innerHTML = `${x} WIN`;
    score1.innerHTML = `${y}`;
  }, 1400);
  localStorage.xo = "X";
}
function pop2(x, y) {
  popCont.style.display = "flex";
  setTimeout(() => {
    Pop.style.display = "flex";
    winPlayer.innerHTML = `${x} WIN`;
    score2.innerHTML = `${y}`;
  }, 1400);
  localStorage.xo = "X";
}
function pop3() {
  popCont.style.display = "flex";
  setTimeout(() => {
    Pop.style.display = "flex";
    winPlayer.innerHTML = `Draw`;
  }, 1000);
  localStorage.xo = "X";
}

cancel.addEventListener("click", () => {
  popCont.style.display = "none";
  Pop.style.display = "none";
  Kill();
});

again.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload("Refresh");
});
