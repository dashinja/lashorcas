// ID Dump
// wins-text
// loses-text
// guessedLetters-text
// guessesRemain-text
// winOrLose-text
// instruction-text

// Variable Dump
let keyPress;
let keyPressCount = 0;
// let userGuess = event.key;
let wordList = [];
let wordBlanks;
let wins = 0;
let loses = 0;
let wordReveal; // reveals wordblanks one by one
let guessedLetters;
let guessesRemain = 5;
let wordRevealText = document.getElementById('guessedLetters-text');
let guessedLettersText = document.getElementById('guessedLetters-text');
let guessesRemainText = document.getElementById('guessesRemain-text');
let winConditionText = document.getElementById('winOrLose-text');
let instruction = document.getElementById('instruction-text');

//condition to be used in if statement
const winCondition = wordReveal.includes('_') === false;
const failCondition = guessesRemain === 0;

// Function Dump
//---------------------ONE---------
// For to capture keypress
// document.onkeyup = function(event) {

// }

//---------------------TWO---------
wordReveal = function() {
  if (wordBlankChoice.includes(keyPress)) {
    wordBlankChoice = wordBlankChoice.split('');
    wordHolder = wordBlankChoice.filter(keyPress => {
      let place = wordBlankChoice.indexOf(keyPress);
      if (place !== -1) {
        let letterRevealer;
        // = wordBlanks().wordblanks.split(',');
        letterRevealer = wordBlanks()
          .wordblanks.splice(place, 1, keyPress)
          .join(' ');
        console.log(letterRevealer);
        return {
          letterRevealer: letterRevealer
        };
      }
    });
  }
};

console.log(wordReveal.letterRevealer);
/*
USE ABOVE, not me.
 var wordReveal = () => {
      if(wordBlankChoice.includes(keyPress)) {
        wordHolder = wordBlankChoice.filter((keyPress) => { ////// <---- YOU CAN'T FILTER A NON-ARRAY! see above!
          let place = wordBlankChoice.indexOf(keyPress);
            if ( place !== (-1) ) {
              let letterRevealer = wordBlanks().wordblanks.split(',');
              letterRevealer = wordBlanks().wordblanks.splice(place, 1, keyPress).join(' ')
              return letterRevealer;
            }
        })
      }
    }


/*
// Old. Disregard?
wordHolder.map(()=>{
      if ()
    })

*/

//---------------------THREE---------
//Make Blanks for Chosen Word Appear
wordList = ['Byron', 'Cedric', 'Dominoes'];

wordBlankChoice = wordList[Math.floor(Math.random() * wordList.length)];
console.log(wordBlankChoice);

wordHolder = wordBlankChoice.splice(0);

wordBlanks = function() {
  let holder = [];
  for (let i = 0; i < wordBlankChoice.length; i++) {
    holder.push(`_`);
  }
  wordblanks = holder.join(' ');
  return {
    wordblanks: wordblanks,
    holder: holder //<--maybe not needed, refactor to just wordblanks?
  };
};
/* ========================= */

/*  Game Process
    1.  Landing page shows visuals && instructions [Press any key to start]
          [on first .onkeyup increment keyPressCount]

    2.  Instructions go away && game begins
          [Invoke wordBlanks() to show blanks]
          [Show the letters guessed area]

    3.  User Press Key To Guess
          [increment keyPressCount again]
          [collect keyPress for store]
          [begin large conditional based on (keyPressCount > 2)]
            [//LATER// Remember to reset keyPressCount upon winning or losing]
            [verify wordBlankChoice includes keyPress or not i.e. if(wordBlankChoice.includes(keyPress)) ]
              [if True]
                [Make wordReveal function]
                [Execute wordReveal function]
                [Display results from a modified wordRevealText.innerHTML = wordReveal]
                  [Check for winCondition true]
                    [if True]
                      [Display winConditionText.innerHTML = "You just won!"]
                      [increment wins++]
                      [// To ready the RESET: keyPressCount = 0]
                        [if KeyPressCount > 0 {RESETS}]
                          [RESETS
                            guessedLetters = ""
                            guessedLettersText.innerHTML = ""
                            guessesRemain = 5
                            guessesRemainText.innerHTML = 5
                            wordReveal = ""
                            instruction.innerHTML = "Press any key to start"
                            winConditionText.innerHTML = ""
                            ]
              [if False]
                [Check if failCondition true]
                    [if True]
                      [Display winConditionText.innerHTML = "You just lost!"]
                      [increment loses++]
                      [// To ready the RESET: keyPressCount = 0]
                        [if KeyPressCount > 0 {RESETS}]
                          [RESETS
                            guessedLetters = ""
                            guessedLettersText.innerHTML = ""
                            guessesRemain = 5
                            guessesRemainText.innerHTML = 5
                            wordReveal = ""
                            instruction.innerHTML = "Press any key to start"
                            winConditionText.innerHTML = ""]
                    [if false] // failCondition false
                      [push keyPress to guessedLetters]
                      [display guessedLettersText.innerHTML = guessedLetters.join(', ') to id="guessedLetters-text"]
                      [decrement guessesRemain]
                        [display guessesRemainText.innerHTML = guessesRemain ]
                      [display  instruction.innerHTML = "Try again!"]
                        [*Optional* include in instruction.innerHTML the guessesRemain countdown]

                  */
