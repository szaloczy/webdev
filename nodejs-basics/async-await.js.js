//Async : makes a function return a promise
//Await : makes an asnyc function wait for a promise 

/*
    Allows you write asynchronous code in a synchronous manner
    Async doesn't have resolve or reject parameters
    Everything after Await is placed in an event queue
*/

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isWalked = true;
            if (isWalked) {
                resolve("You walk the dog")
            } else {
                reject("Your a not walk the dog")
            }
        }, 1500)
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isCleaned = true;
            if (isCleaned) {
                resolve("The kitchen is cleaned")
            } else {
                reject("The kithcen is messy")
            }
        }, 2500)
    })
}


function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isTaken = false;
            if (isTaken) {
                resolve("The trahs is out")
            } else {
                reject("The trash is still in")
            }
        }, 500)
    })
}

async function doChores(){
    try{
        const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
    } catch(err) {
        console.log(err);
    }
    
}

doChores();

/* walkDog().then(msg => {console.log(msg); return cleanKitchen()})
          .then(msg =>{ console.log(msg); return takeOutTrash()})
          .then(msg => { console.log(msg); console.log("You finished");})
          .catch(err => console.log(err))*/