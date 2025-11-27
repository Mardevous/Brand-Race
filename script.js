//Dice Roll Function

const diceNumber = {
    1: "1.png",
    2: "2.png",
    3: "3.png",
    4: "4.png",
    5: "5.png",
    6: "6.png"
};

const diceButton = document.querySelector('.dicebutton');
const imgDice = document.querySelector('.dicebox img');

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    console.log(diceNumber[randomNumber]);
    
    // Changer l'image du dé
    imgDice.setAttribute('src', diceNumber[randomNumber]);
}

diceButton.addEventListener('click', rollDice);

//Challenge Card Function

const challengeButton = document.querySelector('.challengebutton');

const challengeCards = window.prompt(challengeButton);


diceButton.addEventListener('click', challengeCards);

