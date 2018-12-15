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
let theChosenOneTest = document.getElementById('theWordTest-text')


function writeDOM() {
  // write to DOM
  wordBlanks.textContent = wordBlanks.join('');
  guessedLettersText.textContent = guessedLetters.join('');
  guessesRemainText.textContent = guessesRemain;
  instructionText.textContent = instructions;
  theChosenOneTest.textContent = theChosenOne
}

function start() {
  // init start values
  redo();
  chooseWord();
  makeWordBlanks();
}

function redo() {
  // reset values
  guessedLetters = [];
  guessesRemain = 5;
  instructions = 'Press any key to start';
}

function chooseWord() {
  // choose word
  theChosenOne = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(theChosenOne);
}

function makeWordBlanks() {
  theChosenOne.split('')

  for (let i=0; i < theChosenOne.length; i++) {
    wordBlanks.push('_');
  }
  console.log(wordBlanks)
}

document.onkeyup = function(event) {
  // respond to key press
  chosenLetter = event.key;
  console.log(chosenLetter)
  keyCheckTrue(chosenLetter);
};

function keyCheckTrue(letter) {
  // key is in word
  if (theChosenOne.includes(letter)) {
    console.log('I check if true')
    replaceLetter(letter)
  }
}

function keyCheckFalse() {
  // key not in word
}

function replaceLetter(letter) {
  // show right letters in blanks
  // example: blankArray[i] = keyPress
  let blankIndex = theChosenOne.indexOf(letter)
  console.log(blankIndex)
  wordBlanks[blankIndex] = letter 
  console.log(wordBlanks)
  // test = letter
  // console.log(test)
}

function youLose() {
  // you lose
  oneDown();
  redo();
}

function youWin() {
  // you win
  oneUp();
  redo()
}

function oneUp() {
  wins++;
}

function oneDown() {
  loses--;
}

//

//Start Game
start();

