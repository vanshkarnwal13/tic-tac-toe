var start = document.getElementById("start-game");
var squares = document.getElementsByClassName("square");
var turn = document.getElementById("turn");
var currentPlayer = "X";
var score1 = document.getElementById("scorex");
var score2 = document.getElementById("scoreo");
score1.innerHTML = 0;
score2.innerHTML = 0;
var counter = 0;

function resetScore(){
  score1.innerHTML = 0;
  score2.innerHTML = 0;
}

function modifyPlayer(){
    turn.innerText = currentPlayer;
}

function startGame() {
  start.innerHTML = "Restart Game!";
  counter = 0;
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
    squares[i].addEventListener("click", draw);
    currentPlayer = "X";
    modifyPlayer();
  }
}

start.addEventListener("click", startGame);

function addListenerToSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", draw);
  }
}

function swapTurn() {
  if (currentPlayer == "X") {
    currentPlayer = "O";
    } else {
    currentPlayer = "X";
    }
modifyPlayer();
}

function draw() {
  this.innerText = currentPlayer;
  this.removeEventListener("click", draw);
  counter++;
  swapTurn();
  checkWinner();
  }

function checkWinner(){
  if(winnerX() == true ){
    alert("X Won,party de");
    startGame()
    score1.innerHTML++;
  }
  else if (winnerO() == true){
    alert("O Won,party de");
    startGame()
    score2.innerHTML++;
  }
  else if(counter == 9){
    alert("Game Tied. GG!");
    startGame()
  }
}

function winnerX(){
    for(var i = 0; i <= squares.length;i++){
    if(squares[0].textContent =="X" 
      && squares[1].textContent =="X"
      && squares[2].textContent =="X"){
        return true;
    }
    else if(squares[3].textContent =="X"
      && squares[4].textContent =="X"
      && squares[5].textContent =="X"){
        return true;
    }
    else if(squares[6].textContent =="X"
      && squares[7].textContent =="X"
      && squares[8].textContent =="X"){
        return true;
    }
   else if(squares[0].textContent =="X"
      && squares[3].textContent =="X"
      && squares[6].textContent =="X"){
        return true;
    }
    else if(squares[1].textContent =="X"
      && squares[4].textContent =="X"
      && squares[7].textContent =="X"){
        return true;
    }
   else if(squares[2].textContent =="X"
      && squares[5].textContent =="X"
      && squares[8].textContent =="X"){
        return true;
    }
    else if(squares[0].textContent =="X"
      && squares[4].textContent =="X"
      && squares[8].textContent =="X"){
        return true;
    }
   else if(squares[2].textContent =="X"
      && squares[4].textContent =="X"
      && squares[6].textContent =="X"){
        return true;
    }
    else {
      return false;
    }
}

}

function winnerO(){
  for(var i = 0; i <= squares.length;i++){
      if(squares[0].textContent == "O"
    && squares[1].textContent == "O"
    && squares[2].textContent == "O"){
      return true;
  }
 else if(squares[3].textContent == "O"
    && squares[4].textContent == "O"
    && squares[5].textContent == "O"){
      return true;
  }
  else if(squares[6].textContent == "O"
    && squares[7].textContent == "O"
    && squares[8].textContent == "O"){
      return true;
  }
 else if(squares[0].textContent == "O"
    && squares[3].textContent == "O"
    && squares[6].textContent == "O"){
      return true;
  }
  else if(squares[1].textContent == "O"
    && squares[4].textContent == "O"
    && squares[7].textContent == "O"){
      return true;
  }
 else if(squares[2].textContent == "O"
    && squares[5].textContent == "O"
    && squares[8].textContent == "O"){
      return true;
  }
  else if(squares[0].textContent == "O"
    && squares[4].textContent == "O"
    && squares[8].textContent == "O"){
      return true;
  }
 else if(squares[2].textContent == "O"
    && squares[4].textContent == "O"
    && squares[6].textContent == "O"){
      return true;
  }
  else {
    return false;
  }
  }

}

