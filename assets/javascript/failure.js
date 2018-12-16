'use strict';
// Variable Pieces
const wordList = [
  'Rojo',
  'Amarillo',
  'Azul',
  'Verde',
  'Naranja',
  'Negro',
  'Blanco'
];

let correctLetterCount = 0;
let wins = 0;
let loses = 0;
let theChosenOne;
let chosenLetter;
let wordBlanks = [];
let guessedLetters = [];
let guessesRemain = 5;
let instructions = 'Press any key to start';

// Word blank tools
let wordBlanksText = document.getElementById('wordBlanks-text');

// Guessed letter tools
let guessedLettersText = document.getElementById('guessedLetters-text');

// Guess count tools
let guessesRemainText = document.getElementById('guessesRemain-text');

// Instruction tools
let instructionText = document.getElementById('instruction-text');

// The Word Dev tool test
let theChosenOneTest = document.getElementById('theWordTest-text');

let winsText = document.getElementById('wins-text');

let losesText = document.getElementById('loses-text');

function writeDOM() {
  // write to DOM
  guessedLettersText.textContent = guessedLetters.join(' ').toUpperCase()
  guessesRemainText.textContent = guessesRemain;
  instructionText.textContent = instructions;
  theChosenOneTest.textContent = theChosenOne; // <--- wut?
  winsText.textContent = wins;
  losesText.textContent = loses;
}

function writeWordBlanks(writables) {
  wordBlanksText.textContent = writables.join(' ');
}

function start() {
  // init start values
  redo();
  chooseWord();
  makeWordBlanks();
  writeWordBlanks(wordBlanks);
  writeDOM();
}

function redo() {
  // reset values
  correctLetterCount = 0;
  theChosenOne;
  chosenLetter;
  wordBlanks = [];
  guessedLetters = [];
  guessesRemain = 5;
  instructions = 'Press any key to start';
  //Function Resets
  chooseWord();
  writeWordBlanks(wordBlanks);

  // writeDOM();
}

function chooseWord() {
  // choose word
  theChosenOne = wordList[
    Math.floor(Math.random() * wordList.length)
  ].toLowerCase();
  console.log(theChosenOne);
}

function makeWordBlanks() {
  theChosenOne.split('');

  for (let i = 0; i < theChosenOne.length; i++) {
    wordBlanks.push('_');
  }
  // writeWordBlanks(wordBlanks)
  // console.log(writeWordBlanks(wordBlanks));
}

document.onkeyup = function(event) {
  // respond to key press
  chosenLetter = event.key;

  if (guessedLetters.includes(chosenLetter)) {
    instructionText.textContent = `You already pressed ${chosenLetter}`;
    guessesRemain--
    writeDOM();
    gameStatus()
  } else {
    writeDOM()
    keyCheckTrue(chosenLetter);
  }
};

function keyCheckTrue(letter) {
  // key is in word
  if (theChosenOne.includes(letter)) {
    console.log('I check if true');
    replaceLetter(letter);
    gameStatus();
  } else {
    // key not in word
    console.log("I'm letter before keyCheckFalse(): ", letter);
    keyCheckFalse(letter);
    gameStatus()
  }
}

function keyCheckFalse(letter) {
  // key not in word
  // post to the DOM wrong letters

  // DECREMENT guesses remaining
  if (!theChosenOne.includes(letter) && guessesRemain !== 0) {
    guessesRemain--;
    // console.log("I'm letter before the push: ", letter);
    guessedLetters.push(letter);
    
    // console.log('I am guessedLetters: ', guessedLetters);
    writeDOM();
  } else if (guessesRemain === 0) {
    youLose();
  }
}

function replaceLetter(letter) {
  // show right letters in blanks

  for (let i = 0; i < theChosenOne.length; i++) {
    if (theChosenOne[i] === letter) {
      wordBlanks[i] = letter;
      correctLetterCount++;
      console.log(wordBlanks);
    }
  }
  console.log('correctLetterCount: ', correctLetterCount);

  writeWordBlanks(wordBlanks);
  gameStatus();
  // console.log(wordBlanks)
  // test = letter
  // console.log(test)
}

function gameStatus() {
  switch (correctLetterCount === theChosenOne.length) {
    case true:
      youWin();

      break;

    default:
      instructions = 'Keep going!';
  }

  if (guessesRemain < 1) {
    youLose();
  } else if (correctLetterCount > theChosenOne.length) {
    youLose()
  }
}

function youLose() {
  // you lose
  oneDown();
}

function youWin() {
  // you win
  oneUp();
}

function oneUp() {
  wins++;
  instructionText.textContent = 'Great: You pass the turing test...sorta. Play more.';
  // 5 seconds after winning, the game resets.
  setTimeout(() => {
   
   redo();
 }, 5000);

}

function oneDown() {
  loses++;
  instructionText.textContent = 'Jerk! You lost to a bot. Bro... do you even Turing!?!?';

  // alert('Jerk');
  // $('#myModalLose').modal(show)

  // 5 seconds after winning, the game resets.
  setTimeout(() => {
    redo();
    
  }, 5000);


}

//

//Start Game
start();
