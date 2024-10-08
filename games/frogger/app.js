const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');

let currentIndex = 76;
const width = 9;

function moveFrog(e){
    squares[currentIndex].classList.remove('frog');
    switch(e.key) {
        case 'ArrowLeft':
        if(currentIndex % width !== 0) currentIndex -= 1;
        break;
        
        case 'ArrowRight':
        if(currentIndex % width < width -1) currentIndex += 1;
        break;
        
        case 'ArrowUp':
        if(currentIndex - width >= 0) currentIndex -= width;
        break;
        
        case 'ArrowDown':
        if(currentIndex + width < width * width) currentIndex += width;
        break;
    }
    squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog);

function autoMoveElements() {
    logsLeft.forEach(logleft => moveLogLeft(logleft));
    logsRight.forEach(logRight => moveLogRight(logRight));
    carsLeft.forEach(carLeft => moveCarLeft(carLeft));
    carsRight.forEach(carRight => moveCarRight(carRight));
}

function moveLogLeft(logleft) {
    switch(true) {
        case logleft.classList.contains('l1'):
            logleft.classList.remove('l1');
            logleft.classList.add('l2');
            break;
        case logleft.classList.contains('l2'):
             logleft.classList.remove('l2');
            logleft.classList.add('l3');
            break;
        case logleft.classList.contains('l3'):
            logleft.classList.remove('l3');
            logleft.classList.add('l4');
            break;
        case logleft.classList.contains('l4'):
             logleft.classList.remove('l4');
            logleft.classList.add('l5');
            break;
        case logleft.classList.contains('l5'):
            logleft.classList.remove('l5');
            logleft.classList.add('l1');
            break;
    }
}

function moveLogRight(logRight) {
    switch(true) {
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1');
            logRight.classList.add('l5');
            break;
        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2');
            logRight.classList.add('l1');
            break;
        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3');
            logRight.classList.add('l2');
            break;
        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4');
            logRight.classList.add('l3');
            break;
        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5');
            logRight.classList.add('l4');
            break;
    }
}

function moveCarLeft(carLeft) {
    switch(true) {
        case 
            carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1');
            carLeft.classList.add('c2');
            break;
        case 
            carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2');
            carLeft.classList.add('c3');
            break; 
        case 
            carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3');
            carLeft.classList.add('c1');
            break;
    
    }
}

function moveCarRight(carRight) {
    switch(true) {
        case 
            carRight.classList.contains('c1'):
            carRight.classList.remove('c1');
            carRight.classList.add('c3');
            break;
        case 
            carRight.classList.contains('c2'):
            carRight.classList.remove('c2');
            carRight.classList.add('c1');
            break;
        case 
            carRight.classList.contains('c3'):
            carRight.classList.remove('c3');
            carRight.classList.add('c2');
            break;
    }
}

setInterval(autoMoveElements, 1000);