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
function getHumanChoice() {
  const userInput = prompt("Please enter rock, paper or scissors");
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else if (computerChoice == "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else {
      console.log("tie");
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      console.log("You lose! scissors beats paper");
      computerScore++;
    } else if (computerChoice == "rock") {
      console.log("You win! paper beats rock");
      humanScore++;
    } else {
      console.log("tie");
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log("You lose! rock beats scissors");
      computerScore++;
    } else if (computerChoice == "paper") {
      console.log("You win! paper beats scissors");
      humanScore++;
    } else {
      console.log("tie");
    }
  } else {
    console.log("Invalid Input");
  }
}
function playGame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  if (humanScore > computerScore) console.log("You win");
  else if (humanScore < computerScore) console.log("computer wins");
  else console.log("Tie");
}
playGame();
