//Write the logic to get the computer choice:

const choices = [ 'rock', 'paper', 'scissors' ];

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice
}

//Write the logic to get the human choice:

function getHumanChoice() {
    let humanChoice = prompt( 'Rock, paper or scissors?', 'rock' ).toLowerCase();
    return humanChoice
}

//Initialize the scores:

let humanScore = 0;
let computerScore = 0;

//Write the logic to play a game round:

function playRound(humanChoice,computerChoice) { 

    let roundResult;

    if (humanChoice != 'rock' && 'paper' && 'scissors') {
        roundResult = 'Please, enter a valid option.';
    } else if (humanChoice === computerChoice) {
        roundResult = 'It is a tie :0';
    } else if (
        humanChoice === 'rock' && computerChoice === 'scissors' || 
        humanChoice === 'paper' && computerChoice === 'rock' || 
        humanChoice === 'scissors' && computerChoice === 'paper'
    )
        {
        roundResult = 'You won! :D';
    } else {
        roundResult = 'You lost :(';
    }

    let selectedChoices = [humanChoice, computerChoice]; 
    console.log(selectedChoices);

    if (roundResult === 'You won! :D') {
        humanScore++;
    } else if (roundResult === 'You lost :(') {
        computerScore++;
    }

    return roundResult
}

//Play the game five times, keep track of the scores and declare a winner at the end.

for (let i = 0; i <= 4; i++) {
    console.log( playRound( getHumanChoice(), getComputerChoice() ) );
    console.log(`Human Score: ${humanScore}; Computer Score: ${computerScore}`);
}

let finalGameResult;

if (humanScore === computerScore) {
    finalGameResult = 'Nobody won';
} else if (humanScore > computerScore) {
    finalGameResult = 'You beat you opponent!';
} else {
    finalGameResult = 'You were defeated...';
}

console.log(finalGameResult);