'use strict'

// Variable Pieces
const wordList = [
  'Rojo',
  'Amarillo',
  'Azul',
  'Verde',
  'Naranja',
  'Negro',
  'Blanco',
  'proscribir',
  'delincuente',
  'peligro',
  'linchamiento',
  'cuerda',
  'ejecucion',
  'justicia',
]

const themeArray = [
  'proscribir',
  'delincuente',
  'peligro',
  'linchamiento',
  'cuerda',
  'ejecucion',
  'justicia',
]

let correctLetterCount = 0
let wins = 0
let loses = 0
let theChosenOne
let chosenLetter
let wordBlanks = []
let guessedLetters = []
let guessesRemain = 5
let instructions = 'Press any key to start'

// Key Validation
const alpha = /[A-Za-z\^\cA-\cZ]/i
const validateKey = RegExp(alpha)

// Word blank tools
let wordBlanksText = document.getElementById('wordBlanks-text')

// Guessed letter tools
let guessedLettersText = document.getElementById('guessedLetters-text')

// Guess count tools
let guessesRemainText = document.getElementById('guessesRemain-text')

// Instruction tools
let instructionText = document.getElementById('instruction-text')

// The Word Dev tool test

let winsText = document.getElementById('wins-text')

let losesText = document.getElementById('loses-text')

function writeDOM() {
  // write to DOM
  guessedLettersText.textContent = guessedLetters.join(' ').toUpperCase()
  guessesRemainText.textContent = guessesRemain
  instructionText.textContent = instructions
  winsText.textContent = wins
  losesText.textContent = loses
}

function writeWordBlanks(writables) {
  wordBlanksText.textContent = writables.join(' ')
}

function start() {
  // init start values
  redo()
  chooseWord()
  makeWordBlanks()
  writeWordBlanks(wordBlanks)
  writeDOM()
}

function redo() {
  correctLetterCount = 0
  chosenLetter
  wordBlanks = []
  guessedLetters = []
  guessesRemain = 5
  instructions = 'Press any key to start'
}

function chooseWord() {
  theChosenOne = wordList[
    Math.floor(Math.random() * wordList.length)
  ].toLowerCase()
}

function makeWordBlanks() {
  theChosenOne.split('').forEach(letter => wordBlanks.push("_"))
}

document.onkeyup = function(event) {
  // respond to key press
  chosenLetter = event.key
  const betterValidation = event.keyCode >= 65 && event.keyCode <= 90

  if (betterValidation) {
    chosenLetter = chosenLetter.toLowerCase()
    if (guessedLetters.includes(chosenLetter)) {
      instructionText.textContent = `You already pressed ${chosenLetter}`
      guessesRemain--
      writeDOM()
      gameStatus()
    } 
    else {
      writeDOM()
      keyCheckTrue(chosenLetter)
    }
  } 
  else {
    instructions = `You did not press a letter! What a bot!!`
    writeDOM()
    gameStatus()
  }
}

function keyCheckTrue(letter) {
  // key is in word
  if (theChosenOne.includes(letter)) {
    replaceLetter(letter)
    gameStatus()
  } else {
    // key not in word
    keyCheckFalse(letter)
    gameStatus()
  }
}

function keyCheckFalse(letter) {
  // key not in word
  // post to the DOM incorrect letters

  // DECREMENT guesses remaining
  if (!theChosenOne.includes(letter) && guessesRemain !== 0) {
    guessesRemain--
    guessedLetters.push(letter)
    writeDOM()
  } else if (guessesRemain === 0) {
    youLose()
  }
}

function replaceLetter(letter) {
  // show right letters in blanks
  for (let i = 0; i < theChosenOne.length; i++) {
    if (theChosenOne[i] === letter) {
      wordBlanks[i] = letter
      correctLetterCount++
      wordBlanks
    }
  }
  writeWordBlanks(wordBlanks)
}

function gameStatus() {
  const winCondition = correctLetterCount === theChosenOne.length
  const loseCondition1 = guessesRemain < 1
  const loseCondition2 = correctLetterCount > theChosenOne.length

  if (winCondition) {
    youWin()
  } else if (loseCondition1) {
    youLose()
  } else if (loseCondition2) {
    youLose()
  } else {
    instructions = 'Keep going!'
  }
}

function youLose() {
  // you lose
  oneDown()
}

function youWin() {
  // you win
  oneUp()
}

function oneUp() {
  wins++
  instructionText.textContent =
    'Great: You pass the Turing test...sorta. Play more.'
  // 5 seconds after winning, the game resets.
  setTimeout(() => {
    start()
  }, 5000)
}

function oneDown() {
  loses++
  instructionText.textContent =
    'Jerk! You lost to a bot. Yo... do you even Turing!?!?'

  // 5 seconds after winning, the game resets.
  setTimeout(() => {
    start()
  }, 5000)
}

//Start Game
start()
