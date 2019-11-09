function computerPlay() {
  var randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 1) {
    return "rock";
  }
  if (randomNumber === 2) {
    return "paper";
  }
  if (randomNumber === 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
  ) {
    return `You lose... ${computerSelection} beats ${playerSelection}`;
  } else {
    return `Draw! You both selected ${computerSelection}!`;
  }
}

function game() {
  const playerSelection = prompt("Rock, paper or scissors?");
  const computerSelection = computerPlay();

  //playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
}

game();

//cases
//player rock comp scissors - win
//player paper comp rock - win
//player scissors comp paper - win

//player rock comp paper - lose
//player scissors comp rock - lose
//player paper comp scissors - lose

//player === comp - draw
