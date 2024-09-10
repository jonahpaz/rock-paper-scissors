//Write the logic to get the computer choice:

const choices = [ 'Rock', 'Paper', 'Scissors' ];

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice
}

//Write the logic to get the human choice:

function getHumanChoice() {
    let humanChoice = prompt( 'Rock, paper or scissors?', 'Rock' );
    return humanChoice
}

//Write the logic to play a game round:

function gameRound() {
    let selectedChoices = [getComputerChoice(), getHumanChoice()];  
    let gameResult;

    switch (selectedChoices.toString()) {
        case 'Rock,Rock':
            gameResult = 'It is a tie :0';
            break;
        case 'Rock,Paper':
            gameResult = 'You won! :D';
            break;
        case 'Rock,Scissors':
            gameResult = 'You lost :(';
            break;
        case 'Paper,Rock':
            gameResult = 'You lost :(';
            break;
        case 'Paper,Paper':
            gameResult = 'It is a tie :0';
            break;
        case 'Paper,Scissors':
            gameResult = 'You won! :D';
            break;
        case 'Scissors,Rock':
            gameResult = 'You won! :D';
            break;
        case 'Scissors,Paper':
            gameResult = 'You lost :(';
            break;
        case 'Scissors,Scissors':
            gameResult = 'It is a tie :0';
            break;
        default:
            gameResult = 'Please, input a valid choice.';
    }
    
    return gameResult
}

//Initialize the scores:

let humanScore = 0;
let computerScore = 0;

// Write the logic to play an entire game (I decided to make a two out of three kind of game):

while ( (humanScore < 2) && (computerScore < 2) ) {
    switch (gameRound()) {
        case 'You won! :D':
            humanScore++;
            break;
        case 'You lost :(':
            computerScore++;
            break;
        case 'It is a tie :0':
            break;
        case 'Please, input a valid choice.':
            break;
        }
        console.log(humanScore);
        console.log(computerScore);
}

//Write the logic get the final scores:

if (humanScore>computerScore) {
    console.log('Congratulations, you won the game.');
} else {
        console.log('I am sorry, you lost.');
    }

    console.log(humanScore);
    console.log(computerScore);
