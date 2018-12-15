'use strict';
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
let guessesRemain;
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
// const failCondition = (guessesRemain === 0);

// Game Start ///////////
function startGame() {
  //Resets
  guessedLetters = [];
  guessesRemain = 5;
  guessesRemainText.textContent = guessesRemain;
  instructionText.textContent =
    'See the blanks? Press a letter to guess the word.';

  //Selects word from wordList
  const wordBlankChoice = wordList[
    Math.floor(Math.random() * wordList.length)
  ].toLowerCase(); //string

  console.log(`chosen word: ${wordBlankChoice}`);

  //Make Blanks for Chosen Word Appear
  const wordBlanks = function() {
    let holder = [];
    for (let i = 0; i < wordBlankChoice.length; i++) {
      holder.push(`_`);
    }
    let wordblanks = holder.join(' ');
    return wordblanks; //string
  };

  wordRevealText.textContent = wordBlanks();
  console.log('call wordBlanks(): ' + wordBlanks());

  //User Presses Key
  //Word Selection && Display Blanks

  document.onkeyup = function(event) {
    // console.log('I just pressed a key');
    keyPress = event.key;
    // console.log('keyPress freshly declared: ', keyPress);
    keyPressCount++;
    console.log(`keypress count ${keyPressCount}`);

    // if (!wordBlankChoice.includes(keyPress)) {
    //   guessedLetters.push(keyPress);
    //   guessedLettersText.textContent = guessedLetters;
    // } else {
    //   return;
    // }

    console.log('Pressed: ', keyPress);
    // winConditionText.textContent = ' Game in Progress';
    instructionText.textContent = 'Keep going! You can do it!';
    if (wordBlankChoice.includes(keyPress) !== true) {
      console.log(`turns out my word doesn't have "${keyPress}"`);
      //decrement and report guesses remain
      guessesRemain--;
      guessesRemainText.textContent = guessesRemain;

      //lose game
      if (guessesRemain === 0) {
        guessedLetters = [];
        guessesRemain = 5;
        guessesRemainText.textContent = guessesRemain;
        instructionText.textContent =
          'See the blanks? Press a letter to guess the word.';

        //Selects word from wordList
        const wordBlankChoice = wordList[
          Math.floor(Math.random() * wordList.length)
        ].toLowerCase(); //string

        console.log(`chosen word: ${wordBlankChoice}`);

        //Make Blanks for Chosen Word Appear
        const wordBlanks = function() {
          let holder = [];
          for (let i = 0; i < wordBlankChoice.length; i++) {
            holder.push(`_`);
          }
          let wordblanks = holder.join(' ');
          return wordblanks; //string
        };

        wordRevealText.textContent = wordBlanks();
        console.log('call wordBlanks(): ' + wordBlanks());
      }
    } else {
      console.log('first hihihihihi');
      // reveals wordblanks one by one
      wordReveal = function() {
        console.log("I'm wordReveal() I just started");
        //checks for right letters
        console.log(
          "I'm wordBlankChoice: ",
          wordBlankChoice.includes(keyPress)
        );
        if (wordBlankChoice.includes(keyPress)) {
          console.log(
            'My earlier key press matches a letter(s) in chosen word'
          );

          //string to array for use of filter()
          let wordChoiceArray = wordBlankChoice.split('');
          console.log('split wordChoiceArray: ' + wordChoiceArray); // does this need to change? (array no longer needed?)
          console.log('hi first');
          let wordHolder = function() {
            // wordChoiceArray.map(keyPress => { //make me map instead? wordHolder is array keyPress=each index of wordChoiceArray
            let place = wordBlankChoice.indexOf(keyPress); //place = num
            let letterRevealerHolder = wordBlanks().split(''); //array
            let letterRevealer = letterRevealerHolder.splice(
              place,
              1,
              keyPress
            ); // string
            console.log('hi');
            for (let i = 0; i < wordBlankChoice.length; i++) {
              // let place = wordChoiceArray.indexOf(keyPress); //place = num
              //   for (let i=0; i < wordChoiceArray.length; i++) {
              console.log('place var: ' + place);
              if (place !== -1) {
                // = wordBlanks().wordblanks.split(',');

                if (wordBlankChoice.includes(keyPress)) {
                  wordBlanks().wordblanks[i] = wordBlankChoice.indexOf(
                    keyPress
                  );
                  console.log('hilo');
                }
                console.log('letterRevealerHolder: ', letterRevealerHolder);
                // let letterRevealer = wordBlanks().split(',').splice(place, 1, keyPress) // string
                console.log('Just made letterRevealer: ', letterRevealer);
                //PSEUDO:
                /*
              in Map:
              operation = letterRevealerHolder
              
              */

                // let letterRevealer = letterRevealerHolder.indexOf(keyPress).push()

                // //to array
                // .split(',')
                // //finds place where letter matches blank, puts letter in place of blank
                // .splice(place, 1, keyPress);
                // console.log('I just spliced this: ' + letterRevealer);

                //to string
                // letterRevealer.join(' ');
                // console.log('place var: ' + place)
                console.log('letterRevealer value: ' + letterRevealer);
                return letterRevealer;
              } else {
                console.log('Error: Condition not met.');
                return;
              }
            } // for loop ends
          }; //wordHolder() end
          // wordHolder();
        } else {
          // Writes to DOM guessed letters
          if (guessedLetters.includes(keyPress)) {
            instructionText.textContent = `You already pressed "${keyPress}"`;
            // guessesRemainText.textContent = guessesRemain--
          } else {
            // Allows only wrong guess to post to guessed letters
            guessedLetters.push(keyPress);
            guessedLettersText.textContent = guessedLetters
              .join(' ')
              .toUpperCase()
              .split(' ')
              .join(' ');
            console.log('guessed letters: ', guessedLetters);
            console.log('guessedLettersText ', guessedLettersText.textContent);
          }
        }
      }; wordReveal()
    } //wordReveal() end;
    wordReveal();

    ////////trash/////
    // let wrongGuesses = guessedLetters.filter(letters => {
    //   guessedLetters[letters] === wordBlankChoice[letters];
    // });
    // console.log('Processed wrongGuesses: ', wrongGuesses);
    // wordReveal();
  }; //onkeyup function end
} //gameStart() end;

startGame();
