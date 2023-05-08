//Sätter variabler för att kunna spela
let roundPlay = 0;
let computerPoint = 0;
let playerPoint = 0;
let roundWinner = "";
let playerChoose = "";
let computerChoose = "";
const computerScore = document.querySelector("#computer-score");
const playerScore = document.querySelector("#player-score");
const playArea = document.getElementById("playArea");
const endResultContainer = document.getElementById("endResultContainer");
const roundMsg = document.getElementById("gameScore");

//Display the game view if the btn play is pressed
const playbtn = document.getElementById("gamebtn-el");
playbtn.addEventListener("click", function () {
  const computerHeadline = document.getElementById("headline-computerChoice");
  computerHeadline.textContent = "COMPUTER CHOOSE";
  const playerHeadline = document.getElementById("headline-playerChoice");
  playerHeadline.textContent = "PICK YOUR WEAPON";
});

//Listen to what the player choose
const playerBtns = document.querySelectorAll(".playerbtns button img");

playerBtns.forEach((img) => {
  img.addEventListener("click", (event) => {
    const imgAlt = event.target.getAttribute("alt");
    playGame(imgAlt);
  });
});

//computer choose a alternative and wright img is displayed
function getComputerChoice() {
  const gameAlternatives = ["paper", "rock", "scissors"];
  const randomChoice = Math.floor(Math.random() * gameAlternatives.length);
  const computerChoose = gameAlternatives[randomChoice];
  document.getElementById("img-choice").src = computerChoose + ".png";
  document.getElementById("showCompChoice").textContent = computerChoose;

  return computerChoose;
}

// Spelar spelet
function playGame(playerChoose) {
  this.playerChoose = playerChoose;
  computerChoose = getComputerChoice();
  console.log("-----------");
  console.log("datornsval: ", computerChoose);
  console.log("spelare valde: ", playerChoose);
  if (
    (computerChoose == "rock" && playerChoose == "scissors") ||
    (computerChoose == "scissors" && playerChoose == "paper") ||
    (computerChoose == "paper" && playerChoose == "rock")
  ) {
    computerPoint++;
    roundWinner = "computer";
  }

  if (
    (playerChoose == "rock") & (computerChoose == "scissors") ||
    (playerChoose == "scissor" && computerChoose == "paper") ||
    (playerChoose == "paper" && computerChoose == "rock")
  ) {
    playerPoint++;
    roundWinner = "player";
  }

  if (computerChoose === playerChoose) {
    roundWinner = "Tie";
  }

  roundPlay++;
  if (roundPlay === 5) {
    presentFinalScore(computerPoint, playerPoint);
  }
  ScoreUpdate(roundWinner, computerPoint, playerPoint);
}

//Uppdaterar poängen under speletsgång
function ScoreUpdate(roundWinner, computerPoint, playerPoint) {
  if (roundWinner === "computer") {
    document.getElementById("computer-score").textContent = computerPoint;
    roundMsg.textContent = "Computer Won +1pt";
  } else if (roundWinner === "player") {
    document.getElementById("player-score").textContent = playerPoint;
    roundMsg.textContent = "You Won +1pt";
  } else if (roundWinner === "Tie") {
    roundMsg.textContent = "Its a tie";
  }
}

//Presenterar finalScore
function presentFinalScore(computerPoint, playerPoint) {
  endResultContainer.style.display = "block";
  playArea.style.display = "none";
  roundMsg.style.display = "none";
  const gameWinner = document.getElementById("displayWinner");
  console.log("den går till presentFinalScore");

  if (computerPoint > playerPoint) {
    document.getElementById("winnerImg").src = "MrComputer.png";
    gameWinner.textContent = "COMPUTER WON";
    console.log("DATORN VANN");
  } else if (playerPoint > computerPoint) {
    document.getElementById("winnerImg").src = "MrPlayer.png";
    gameWinner.textContent = "YOU WON!";
    console.log("spelaren vann");
  } else {
    document.getElementById("winnerImg").src = "Tie.png";
    gameWinner.textContent = "IT´S A TIE";
    console.log("DET BLEV OAVGJORT");
  }
}

function endGame() {
  roundPlay = 0;
  computerPoint = 0;
  playerPoint = 0;
  // detta bör ske när vi trycker på att starta om spelet
  computerScore.innerHTML = 0;
  playerScore.innerHTML = 0;
}
