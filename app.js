let playerSelection = "";
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const container = document.querySelector("#container");
const p = document.querySelector("p");
const reset = document.querySelector("#reset");
const scoreDisplay = document.querySelector("#score");
const winnerDisplay = document.querySelector("#winner");
const scoreReset = document.querySelector("#scoreReset");

//Event listeners

//player choice buttons
for (var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    playerSelection = this.value;
    game();
    for (var a = 0; a < choices.length; a++) {
      choices[a].classList.add("hideButton");
      if (playerScore !== 5 && computerScore !== 5) {
        reset.classList.remove("hideButton");
      }
    }
  });
}

//play again
reset.addEventListener("click", function() {
  playerSelection = "";
  computerSelection = computerPlay();
  p.textContent = "";
  reset.classList.add("hideButton");
  for (var a = 0; a < choices.length; a++) {
    choices[a].classList.remove("hideButton");
  }
});

//reset score
scoreReset.addEventListener("click", function() {
  resetScore();
  scoreDisplay.textContent = "Score: Player: 0 Computer: 0";
});

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
  if (playerWin(playerSelection, computerSelection)) {
    playerScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (computerWin(playerSelection, computerSelection)) {
    computerScore += 1;
    return `You lose... ${computerSelection} beats ${playerSelection}`;
  } else {
    return `Draw! You both selected ${computerSelection}!`;
  }
}

function playerWin(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
  ) {
    return true;
  } else return false;
}

function computerWin(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
  ) {
    return true;
  } else return false;
}

function game() {
  p.textContent = playRound(playerSelection, computerSelection);
  scoreDisplay.textContent = `Score: Player: ${playerScore} Computer: ${computerScore}`;
  if (playerScore === 5) {
    winnerDisplay.textContent = "Winner!!!";
    //reset.classList.add("hideButton");
  }
  if (computerScore === 5) {
    winnerDisplay.textContent = "Computer wins";
    //reset.classList.add("hideButton");
  }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  winnerDisplay.textContent = "";
  for (var a = 0; a < choices.length; a++) {
    choices[a].classList.remove("hideButton");
  }
}

//cases
//player rock comp scissors - win
//player paper comp rock - win
//player scissors comp paper - win

//player rock comp paper - lose
//player scissors comp rock - lose
//player paper comp scissors - lose

//player === comp - draw
