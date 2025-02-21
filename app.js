let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const num = Math.floor(Math.random() * 3) + 1;
  let v = ``;
  if (num == 1) {
    v = `rock`;
    return v;
  } else if (num == 2) {
    v = `paper`;
    return v;
  } else if (num == 3) {
    v = `scissors`;
    return v;
  } else {
  }
}

function disableButtons() {
  const paper = document.querySelector(".paper");
  paper.disabled = "true";
  const rock = document.querySelector(".rock");
  rock.disabled = "true";
  const scissors = document.querySelector(".scissors");
  scissors.disabled = "true";
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = ``;
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    humanScore++;
    result = `you win ${playerSelection} beats ${computerSelection}
            Player Score:${humanScore} ComputerScore: ${computerScore}`;
    if (humanScore == 5) {
      result = `you win the game reload to try again`;
      disableButtons();
    }
  } else if (playerSelection == computerSelection) {
    result = `Its a tie You both chose ${computerSelection}
            Player Score: ${humanScore} ComputerScore: ${computerScore}`;
  } else {
    computerScore++;
    result = `you lose ${computerSelection} beats  ${playerSelection}
            Player Score: ${humanScore} ComputerScore: ${computerScore}`;
    if (computerScore == 5) {
      result = `you lose the game reload to try again`;
      disableButtons();
    }
  }
  const finalResult = document.querySelector(".result");
  finalResult.textContent = result;
}

const paper = document.querySelector(".paper");
paper.addEventListener("click", function () {
  playRound("paper");
});

const rock = document.querySelector(".rock");
rock.addEventListener("click", function () {
  playRound("rock");
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", function () {
  playRound("scissors");
});
