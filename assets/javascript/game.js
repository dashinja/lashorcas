// ID Dump
// wins-text
// loses-text
// guessedLetters-text
// guessesRemain-text
// winOrLose-text

// Variable Dump
let keyPress;
// let userGuess = event.key;
let wordList = [];
let wordBlanks;
let wins = 0;
let loses = 0;
let guessedLetters;
let guessesRemain;
const winCondition = 5;

// Function Dump

// For to capture keypress
// document.onkeyup = function(event) {
// }

wordList = ['Byron', 'Cedric', 'Dominoes'];
wordBlankChoice = wordList[Math.floor(Math.random() * wordList.length)];
console.log(wordBlankChoice);
wordBlanks = function() {
  let holder = [];
  for (let i = 0; i < wordBlankChoice.length; i++) {
    holder.push(`_`);
  }
  wordblanks = holder.join(' ')
  return wordblanks;
};
