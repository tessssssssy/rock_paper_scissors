function computerPlay() {
  var randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 1) {
    return "Rock";
  }
  if (randomNumber === 2) {
    return "Paper";
  }
  if (randomNumber === 3) {
    return "Scissors";
  }
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
  if (playerSelection > computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection < computerSelection) {
    return `You lose... ${computerSelection} beats ${playerSelection}`;
  } else {
    return `Draw! You both selected ${playerSelection}!`;
  }
}

const playerSelection = 'rock'
const computerSelection = computerPlay()

function game() {
    if 
}