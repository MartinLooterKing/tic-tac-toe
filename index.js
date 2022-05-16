const emptyString = '  ';
const boardData = Array(9).fill(emptyString);
const players = {
  1: 'x',
  2: 'o',
};
const winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];

let currentPlayer = players[1];

function drawBoard(positions) {
  console.log(`
    ${positions[0]} | ${positions[1]} | ${positions[2]}
    -----------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
    -----------
    ${positions[6]} | ${positions[7]} | ${positions[8]}
  `);
}



function showTutorial() {
  console.log(`
  ### Escolha a posiçao que deseja jogar baseado no tabuleiro abaixo ###

     0 | 1 | 2
    -----------
     3 | 4 | 5
    -----------
     6 | 7 | 8

  ######################################################################
  `);
}

function isEmpty(position) {
  return boardData[position] === emptyString;
}

function changePlayer() {
  if (currentPlayer === players[1]) {
    currentPlayer = players[2];
  } else {
    currentPlayer = players[1];
  }
}

function setPlayerMovement(position) {
  if (isEmpty(position)) {
    boardData[position] = currentPlayer;
    changePlayer();
  } else {
    console.log(`A posição ${position} já foi usada`);
  }
}

// showTutorial();
setPlayerMovement(0);
setPlayerMovement(1);
setPlayerMovement(2);
setPlayerMovement(3);
setPlayerMovement(4);
setPlayerMovement(5);
setPlayerMovement(6);
setPlayerMovement(7);
setPlayerMovement(8);

drawBoard(boardData);

showWinner();

function showWinner(){

if(players[1] == winner){

  console.log(`Player 1 é o vencedor`);

} else if(players[2] == winner){
  console.log(`Player 2 é o vencedor`);
}  else{

  console.log(`Deu velha`);

}

}