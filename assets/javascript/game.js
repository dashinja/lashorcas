// ID Dump
// wins-text
// loses-text
// guessedLetters-text
// guessesRemain-text
// winOrLose-text
// instruction-text

// Variable Dump
// let userGuess = event.key;
let keyPress;
let keyPressCount = 0;
let wins = 0;
let loses = 0;
let guessedLetters = [];
let guessesRemain = 5;
let wordReveal;

let wordList = ['Byron', 'Cedric', 'Dominoes'];

// DOM write variables
let wordRevealText = document.getElementById('wordBlanks-text');
let guessedLettersText = document.getElementById('guessedLetters-text');
let guessesRemainText = document.getElementById('guessesRemain-text');
let winConditionText = document.getElementById('winOrLose-text');
let instructionText = document.getElementById('instruction-text');

//condition to be used in if statement/////////////
// const winCondition = wordReveal.includes('_') === false;
// const failCondition = guessesRemain === 0;

// Game Start ///////////
function startGame() {
  //Resets
  guessedLetters = [];
  guessesremain = 5;
  guessesRemainText.textContent = guessesRemain;
  instructionText.textContent =
    'See the blanks? Press a letter to guess the word.';

  //Selects word from wordList
  wordBlankChoice = wordList[
    Math.floor(Math.random() * wordList.length)
  ].toLowerCase();
  console.log(`chosen word: ${wordBlankChoice}`);

  //Make Blanks for Chosen Word Appear
  const wordBlanks = function() {
    let holder = [];
    for (let i = 0; i < wordBlankChoice.length; i++) {
      holder.push(`_`);
    }
    wordblanks = holder.join(' ');
    return wordblanks; //string
  };

  wordRevealText.textContent = wordBlanks();
  console.log('call wordBlanks(): ' + wordBlanks());

  //User Presses Key
  //Word Selection && Display Blanks

  document.onkeyup = function(event) {
    console.log('I just pressed a key');
    keyPress = event.key;
    console.log('keyPress freshly declared: ', keyPress)
    keyPressCount++;
    console.log('keyPress secondly asked for: ', keyPress)
    guessedLetters.push(keyPress)
    console.log('I just got guessed: ', guessedLetters)
    guessesRemainText.textContent = guessesremain;
    winConditionText.textContent = ' Game in Progress';
    instructionText.textContent = 'Keep going! You can do it!';
    console.log(`key pressed: ${keyPress}`);
    console.log(`keypress count ${keyPressCount}`);

    // reveals wordblanks one by one
    wordReveal = function() {
      //checks for right letters
      if (wordBlankChoice.includes(keyPress)) {
        console.log('My earlier key press matches a letter(s) in chosen word');

        //string to array for use of filter()
        wordBlankChoice = wordBlankChoice.split('');
        console.log('split wordBankChoice: ' + wordBlankChoice);
        let wordHolder = wordBlankChoice.filter(keyPress => {
          let place = wordBlankChoice.indexOf(keyPress);
          console.log('place var: ' + place);
          if (place !== -1) {
            // = wordBlanks().wordblanks.split(',');
            let letterRevealer = wordBlanks() // string
              //to array
              .split(',')
              //finds place where letter matches blank, puts letter in place of blank
              .splice(place, 1, keyPress);
            console.log('I just spliced this: ' + letterRevealer);

            //to string
            letterRevealer.join(' ');
            // console.log('place var: ' + place)
            console.log('letterRevealer value: ' + letterRevealer);
            return letterRevealer;
          } else {
            console.log('Error: Condition not met.');
            return;
          }
        });
      } else {
        // document.createElement('div');
        console.log(guessedLetters)
        guessedLettersText.textContent = guessedLetters.join(' ')
          .toUpperCase().split(' ').join(' ')
          console.log(keyPress)
          console.log(guessedLettersText)
      }
    };

    wordReveal();
  };
}

startGame();
