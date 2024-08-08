const cardArray = [
    {
        name:'fries',
        img: 'images/fries.png',
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name:'cheesburger',
        img: 'images/cheesburger.png'
    },
    {
        name:'blank',
        img: 'images/blank.png'
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
    },
]

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const gredDisplay = document.querySelector('#grid');

function createBoard() {
    for(let i = 0; i < 12; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        gredDisplay.append(card)
    }
}

createBoard();
