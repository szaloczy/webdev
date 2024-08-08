const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
    
    switch(randomNumber){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3: 
            computerChoice = 'scissors';
            break;
        default:
             console.log("invalid value");
        break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'it is a draw';
    } 
    if(computerChoice === 'rock' && userChoice === "scissors"){
        result = 'you lose';
    }
    if(computerChoice === 'rock' && userChoice === "paper"){
        result = 'you win';
    }
    if(computerChoice === 'paper' && userChoice === "scissors"){
        result = 'you win';
    }
    if(computerChoice === 'paper' && userChoice === "rock"){
        result = 'you lose';
    }
    if(computerChoice === 'scissors' && userChoice === "rock"){
        result = 'you win';
    }
    if(computerChoice === 'scissors' && userChoice === "paper"){
        result = 'you lose';
    }
    resultDisplay.innerHTML = result;
}