const options = [ 'rock', 'paper', 'scissors' ];

//Initialize the scores:

let humanScore = 0;
let computerScore = 0;

//Write the logic to play a game round:

const buttons = document.querySelector(".buttons");
const myImage = document.querySelector("#myChoice");
const theirImage = document.querySelector("#theirChoice");

buttons.addEventListener("click", (event) => {
    let humanChoice = 
    event.target.textContent.toLowerCase();
    switch (humanChoice) {
        case "rock":
            myImage.setAttribute("src", "https://img.freepik.com/fotos-premium/piedra-natural-aislado-sobre-fondo-blanco_153912-10386.jpg");
            break;
        case "paper":
            myImage.setAttribute("src", "https://st4.depositphotos.com/11634452/21820/i/450/depositphotos_218200610-stock-photo-white-paper-sheet-grid-line.jpg");
            break;
        case "scissors":
            myImage.setAttribute("src", "https://www.parnassa.com.ar/product_images/b/197/tijera_7.5_.___86713_std.jpg");
            break;
    }
});

buttons.addEventListener("click", playRound);

function playRound(event) {

    let roundResult;
    let humanChoice = 
        event.target.textContent.toLowerCase();
    let computerChoice = 
        options[Math.floor(Math.random()*3)];

        switch (computerChoice) {
            case "rock":
                theirImage.setAttribute("src", "https://img.freepik.com/fotos-premium/piedra-natural-aislado-sobre-fondo-blanco_153912-10386.jpg");
                break;
            case "paper":
                theirImage.setAttribute("src", "https://st4.depositphotos.com/11634452/21820/i/450/depositphotos_218200610-stock-photo-white-paper-sheet-grid-line.jpg");
                break;
            case "scissors":
                theirImage.setAttribute("src", "https://www.parnassa.com.ar/product_images/b/197/tijera_7.5_.___86713_std.jpg");
                break;
        }


    let choices = 
        [`Your choice: ${humanChoice}`, `Your opponent's choice: ${computerChoice}`]; 
    console.log(choices);
    const spanChoices = document.querySelector(".choices");
    spanChoices.textContent = choices.join(" & ");

    if (humanChoice === computerChoice) {
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

    if (roundResult === 'You won! :D') {
        humanScore++;

    } else if (roundResult === 'You lost :(') {
        computerScore++;
    }

    const score = [humanScore, computerScore];
    const myScore = document.querySelector(".myScore");
    const theirScore = document.querySelector(".theirScore");
    myScore.textContent = score[0];
    theirScore.textContent = score[1];

    let finalGameResult;

if (humanScore === 5 && humanScore > computerScore) {
    finalGameResult = 'You beat your opponent!';
    humanScore = 0;
    computerScore = 0;
} else if (computerScore === 5 && computerScore > humanScore) {
    finalGameResult = 'You were defeated...';
    humanScore = 0;
    computerScore = 0;
}
console.log(finalGameResult);
const spanFinal = document.querySelector(".final");
spanFinal.textContent = finalGameResult;
}