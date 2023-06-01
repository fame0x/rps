const options = ["Rock", "Paper", "Scissors"];
const computerScoreDisplay = document.getElementById("_computerScoreDisplay");
const playerScoreDisplay = document.getElementById("_playerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
let round = 1;
let highScore = 0;
let gameLog = ["Ready to start"];

function randomNumber() {
  let rng = Math.floor(Math.random() * 3);
  return rng;
}

function givePoints(who) {
  if (who == "player") {
    playerScore++;
    return playerScore;
  } else {
    computerScore++;
    return computerScore;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  gameLog = ["Ready to start"];
  console.log("++++GAME RESET++++");
  checkScore();
}

function getComputerChoice() {
  return options[randomNumber()];
}

function getPlayerChoice(choice) {
  let computerChoice = getComputerChoice();
  let playerChoice = choice;
  console.log(
    "Computer picked: " + computerChoice + ", Player picked: " + playerChoice
  );
  getGameWinner(computerChoice, playerChoice);
  computerScoreDisplay.innerHTML = "Computer: " + computerScore;
  playerScoreDisplay.innerHTML = "Player: " + playerScore;
}

function checkScore() {
  if (playerScore >= 5) {
    console.log("Player has won the game");
    resetGame();
  }
  if (computerScore >= 5) {
    console.log("Computer has won the game");
    resetGame();
  }
}
function showPoints() {
  console.log("Player: " + playerScore + " - Computer: " + computerScore);
}
function getGameWinner(computerChoice, playerChoice) {
  if (computerChoice == "Rock" && playerChoice == "Paper") {
    console.log("Player wins the round");
    givePoints("player");
    showPoints();
    checkScore();
    return;
  }
  if (computerChoice == "Rock" && playerChoice == "Scissors") {
    console.log("Computer wins the round");
    givePoints("Computer");
    showPoints();
    checkScore();
    return;
  }
  if (computerChoice == "Paper" && playerChoice == "Scissors") {
    console.log("Player wins the round");
    givePoints("player");
    showPoints();
    checkScore();
    return;
  }
  if (computerChoice == "Paper" && playerChoice == "Rock") {
    console.log("Computer wins the round");
    givePoints("Computer");
    showPoints();
    checkScore();
    return;
  }
  if (computerChoice == "Scissors" && playerChoice == "Paper") {
    console.log("Computer wins the round");
    givePoints("Computer");
    showPoints();
    checkScore();
    return;
  }
  if (computerChoice == "Scissors" && playerChoice == "Rock") {
    console.log("Player wins the round");
    givePoints("player");
    showPoints();
    checkScore();
    return;
  }
  if (computerChoice == "Scissors" && playerChoice == "Scissors") {
    console.log("Push");
    return;
  }
  if (computerChoice == "Paper" && playerChoice == "Paper") {
    console.log("Push");
    return;
  }
  if (computerChoice == "Rock" && playerChoice == "Rock") {
    console.log("Push");
    return;
  }
}
