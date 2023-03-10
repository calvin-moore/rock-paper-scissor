let computerSelection;
let playerSelection;
let roundWinner;
let computerScore;
let playerScore;


// - computer makes choice between rock, paper and scissor. //
function getComputerChoice () {
    let randomNumber = Math.random();

    if (randomNumber < (1/3)) {
        computerSelection = "Rock";
    }
    else if (randomNumber < (2/3)) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissor";
    }
    return computerSelection;
}

// - user makes choice between rock, paper and scissor. //
function getPLayerChoice() {
    let userInput = prompt("Rock, Paper or Scissors ?", "");
    lowerCasePlayerSelection = userInput.toUpperCase().toLowerCase();
    let firstLetter = lowerCasePlayerSelection.slice(0, 1).toUpperCase();
    let remainingLetters = lowerCasePlayerSelection.slice(1);
    playerSelection = firstLetter + remainingLetters;
    return playerSelection;
}

// - both choices are compared and winner gets announced. //
function compareSelections () {
    if (computerSelection === playerSelection) {
        roundWinner = "nobody";
        console.log(`It's a tie! ${playerSelection} does't beat or lose to ${computerSelection}`);
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissor") {
        roundWinner = "Computer";
        console.log(`${roundWinner} wins! ${computerSelection} beats ${playerSelection}!`);
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
        roundWinner = "Computer";
        console.log(`${roundWinner} wins! ${computerSelection} beats ${playerSelection}!`);
    }
    else if (computerSelection === "Scissor" && playerSelection === "Paper") {
        roundWinner = "Computer";
        console.log(`${roundWinner} wins! ${computerSelection} beats ${playerSelection}!`);
    }
    else if (computerSelection === "Rock" && playerSelection === "Paper") {
        roundWinner = "Player";
        console.log(`${roundWinner} wins! ${playerSelection} beats ${computerSelection}!`);
    }
    else if (computerSelection === "Paper" && playerSelection === "Scissor") {
        roundWinner = "Player";
        console.log(`${roundWinner} wins! ${playerSelection} beats ${computerSelection}!`);
    }
    else if (computerSelection === "Scissor" && playerSelection === "Rock") {
        roundWinner = "Player";
        console.log(`${roundWinner} wins! ${playerSelection} beats ${computerSelection}!`);
    }
   
}

function playRound() {
    getComputerChoice();
    getPLayerChoice();
    compareSelections();
}

function game () {
    computerScore = 0;
    playerScore = 0;

    for (i = 0; i < 5; i++) {
        playRound();
        updateScore();
        updateScoreBoard();
    }
}

function updateScore() {
    if (roundWinner === "Computer") {
        computerScore++;
    }
    else if (roundWinner === "Player") {
        playerScore++;
    }
    else {
        return;
    }
}

function updateScoreBoard() {
    console.log(`Player = ${playerScore} : Computer = ${computerScore}`);
}

game();