//Dice Roll Function

const diceNumber = {
    1: "1.png",
    2: "2.png",
    3: "3.png",
    4: "4.png",
    5: "5.png",
    6: "6.png"
};

const questions = {
   "learnQuestions": [
   {"id": 1, "question": "Is the font Monsterrat with or without ms ?","answer": "Without", "score": 0.5},
    {"id": 2, "question": "Is the font Helvetica with or without ms ?","answer": "Without", "score": 0.5},
    {"id": 3, "question": "Is the font Roboto with or without ms ?","answer": "Without", "score": 0.5},
    {"id": 4, "question": "Is the font Comic sans ms with or without ms ?","answer": "Without", "score": 0.5},
    {"id": 5, "question": "Is the font Arial with or without ms ?","answer": "Without", "score": 0.5},
    {"id": 6, "question": "Is the font Times New Roman with or without ms ?","answer": "With", "score": 0.5},
    {"id": 7, "question": "Is Lacoste logo a mascot logo or an abstract ?","answer": "Mascot", "score": 1},
    {"id": 8, "question": "Is Uber a wordmark logo or an abstract logo ?", "answer": "Wordmark", "score": 1},
    {"id": 9, "question": "Give 5 environment friendly brands names", "answer": "Example of answer : Center Parcs, Ciao Kombucha, Veja, EcoVadis, Plum Energie", "score": 2},
    {"id": 10, "question": "Are with serif typographies serious or fun use typographies ?", "answer": "Serious", "score": 2},
    {"id": 11, "question": "What’s the difference between RGB and CMYK colors ?","answer": "RGB colors are most used for digital devices, CMYK colors are most used for print.", "score": 2},
    {"id": 12, "question": "Which brand powerd collective perception of Santa Claud in red since 1964 ?", "answer": "Coca-Cola", "score": 0.5},
    {"id": 13, "question": "Which kids toys brand had huge success in 2023 after the cinematographique adaptation of one of their bestseller product ?", "answer": "Mattel with Barbie", "score": 2},
    {"id": 14, "question": "Which fast-food brand is known for their their fun and accurate communication agency on social media ?", "answer": 'Burger King', "score": 0.5},
    {"id": 15, "question": "Is the logo Ferrari an emblem logo or a monogram logo ?", "score": 1},
    {"id": 16, "question": "What was the main color of McDonald’s their 2009 rebranding ?", "score": 0.5},
    ],

   "challengeQuestions": [
    {"id": 17, "question": "Create your logo in 1 min", "success": "Move 2 squares forward", "fail": "Pass your turn next challenge"},
    {"id": 18, "question": "Create your palette in 30 sec", "success": "Move 2 squares forward", "fail": "You pass your turn next challenge"},
    {"id": 19, "question": "Determine your moodboard in 45 sec", "success": "You can choose the feature the player of your choice loses", "fail": "You lose all your features"},
    {"id": 20, "question": "Determine your moodboard in 45 sec", "success": "Move 2 squares forward", "fail": "Move 2 squares backward"},
    {"id": 21, "question": "Determine your moodboard in 45 sec ( you can use your phone )", "success": "Move 2 squares forward", "fail": "Move 2 squares backward"},
    {"id": 22, "question": "Select your typography in 30 sec", "success": "Move 2 squares forward", "fail": "Next challenge you pass your turn"},
    {"id": 23, "question": "Create your logo in 1 min", "success": "Choose a team/player that will lose their logo", "fail": "Nothing happens"},
    {"id": 24, "question": "Determine your motto in 30 sec", "success": "Choose a player who loses his/her motto", "fail": "Go back to the start line"},
    {"id": 25, "question": "Select your typography in 30 sec", "success": "You can choose a feature another player will lose", "fail": "You lose all your features"},
    {"id": 26, "question": "Determine your moodboard in 45 sec", "success": "Move 2 squares forward", "fail": "Next challenge you pass your turn"},
    {"id": 27, "question": "Determine your motto in 30 sec", "success": "Move 2 squares forward", "fail": "Move 2 squares backward"},
    {"id": 28, "question": "Find your brand name in 15 sec", "success": "Move 1 square forward", "fail": "Move 2 squares backward"},
    {"id": 29, "question": "Determine your motto in 30 sec", "success": "Move 2 squares forward", "fail": "Move 2 squares backward"},
    {"id": 30, "question": "Determine your moodboard in 45 sec", "success": "Roll dices and move your pawn forward according to the result displayed", "fail": "Roll dices and move your pawn backward according to the result displayed"},
    {"id": 31, "question": "Select your typography in 30 sec", "success": "Roll dices and move your pawn forward according to the result displayed", "fail": "Roll dices and move your pawn backward according to the result displayed"},
    {"id": 32, "question": "Create your logo in 1 min", "success": "You can keep this card in the case you lose one of your features", "fail": "You must give the feature the player on your right want to him/her"},
    {"id": 33, "question": "Create your palette in 30 sec", "success": "The player of your choice loses the feature you want", "fail": "Your opponent chose the feature of their choice"},
    {"id": 34, "question": "Create your brand name in 15 sec", "success": "Move 1 squares forward", "fail": "Move 2 squares backward"},
    {"id": 35, "question": "Select your typography in 30 sec", "success": "Keep this card in case you might lose a feature", "fail": "Nothing happens"},
    {"id": 36, "question": "Create your palette in 30 sec", "success": "You can choose the feature you want next challenge", "fail": "Move 2 squares backward"},
    {"id": 37, "question": "Create your palette in 30 sec", "success": "Steal 1 color from anotherplayer’s palette", "fail": "Another player choose 1 of your colors"},
    {"id": 38, "question": "Select your typography in 30 sec", "success": "Keep this card as protection if you lose a feature later", "fail": "The group assigns you a random typography"},
    {"id": 39, "question": "Draw your logo in 30 sec", "success": "Move 1 square forward", "fail": "Move 3 squares backward"},
    {"id": 40, "question": "Find a slogan in 20 sec", "success": "Choose 1 player who will move 1 square backward", "fail": "Move 1 square backward"}
   ]
}


// Le Dé
const diceButton = document.querySelector('.dicebutton');
const imgDice = document.querySelector('.dicebox img');

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // Changer l'image du dé
    imgDice.setAttribute('src', diceNumber[randomNumber]);
}

diceButton.addEventListener('click', rollDice);

// Le Challenge
const challengeButton = document.querySelector('.challengebutton');
const challengeQuestion = document.querySelector('.challengequestion');
const successChallenge = document.querySelector('.challengeSuccessText');
const failChallenge = document.querySelector('.challengeFailText');

function askChallengeQuestion() {
    const challengeQuestions = questions.challengeQuestions;
    let randomChallengeQuestion = Math.floor(Math.random() * challengeQuestions.length);
    
    return challengeQuestions[randomChallengeQuestion];
}

challengeButton.addEventListener('click', function() {
    const question = askChallengeQuestion();
    challengeQuestion.innerHTML = question.question;
    successChallenge.innerHTML = question.success;
    failChallenge.innerHTML = question.fail;
});

// Appeler la fonction pour tester
const learnButton = document.querySelector('.learnbutton');
const learnQuestion = document.querySelector('.learnquestion');
const answer = document.querySelector('.answerQuestion'); 
const learnPoint = document.querySelector('.pointQuestion');

function randomLearnQuestion() {
    const learnQuestions = questions.learnQuestions;
    let randomLearnQuestion = Math.floor(Math.random() * learnQuestions.length);

    return learnQuestions[randomLearnQuestion];
}

learnButton.addEventListener('click', function() {
    const question = randomLearnQuestion();
    learnQuestion.innerHTML = question.question;
    answer.innerHTML = question.answer;
    learnPoint.innerHTML = question.score.toString();
});



// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     console.log(randomNumber);
//     console.log(diceNumber[randomNumber]);
    
//     // Changer l'image du dé
//     imgDice.setAttribute('src', diceNumber[randomNumber]);
// }

// diceButton.addEventListener('click', rollDice);
