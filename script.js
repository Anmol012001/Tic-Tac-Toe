console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let nextturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isover = false;

const changeturn = () => {
  return turn === "X" ? "0" : "X";
};

const checkwin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isover = true;
      document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  // let boxtext = element.getElementsByClassName("boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeturn();
      nextturn.play();
      checkwin();
      if (!isover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

//for clearing out everything

reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach((element)=>{
        element.innerText='';
    })
    turn = "X";
    isover = false;
    document.getElementsByClassName("info")[0].innerText =  "Turn for " + turn;
    document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width = "0px";
})
