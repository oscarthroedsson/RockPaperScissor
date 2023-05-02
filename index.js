
let computerPoint = 0;
let playerPoint = 0;
let roundWinner = "";
let playerChoose = "";
let computerChoose = "";
game()

function playGame(playerChoose, computerChoose) {
    if ((computerChoose == "Rock" && playerChoose == "Scissor") ||
        (computerChoose == "Scissor" && playerChoose == "Paper") ||
        (computerChoose == "Paper" && playerChoose == "Rock")
    ) {
        computerPoint++;
        roundWinner = "computer";
    }

    if ((playerChoose == "Rock" & computerChoose == "Scissor") ||
        (playerChoose == "Scissor" && computerChoose == "Paper") ||
        (playerChoose == "Paper" && computerChoose == "Rock")
    ) {
        playerPoint++;
        roundWinner = "player";
    }

    if (computerChoose === playerChoose) {
        roundWinner = "Tie";
    }
    ScoreUpdate(roundWinner, computerPoint, playerPoint);
}


function game() {
    for (i = 0; i <= 4; i++) {
        computerChoose = getComputerChoice();
        playerChoose = playerChoice()
        playGame(playerChoose, computerChoose);
    }
    finalScore(computerPoint, playerPoint);
}


function playerChoice() {
    let PlayerMove = window.prompt("Choose your move (Rock, Paper or Scissor)")
    return PlayerMove;
}

function getComputerChoice() {
    let alternatives = ["Rock", "Paper", "Scissor"]
    let compMove = alternatives[Math.floor(Math.random() * alternatives.length)];
    console.log(compMove)
    return compMove;
}


function finalScore(computerPoint, playerPoint) {
    if (computerPoint > playerPoint) {
        console.log("Computer won - Game done!")
    } else if (playerPoint > computerPoint) {
        console.log("You won! - Game done!")
    } else {
        console.log("it is a tie!! - Game done!")
    }

}



function ScoreUpdate(roundWinner) {

    if (roundWinner === "computer") {
        console.log("Dangit, computer won")
        console.log("Computer: " + computerPoint + "\n You: " + playerPoint)

    } else if (roundWinner === "player") {
        console.log("Good you won!");
        console.log("Computer: " + computerPoint + "\n You: " + playerPoint)
    } else {
        console.log("It is a tie")
        console.log("Computer: " + computerPoint + "\n You: " + playerPoint)
    }
}





