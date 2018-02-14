const readlineSync = require('readline-sync');
const show = require('./graphics');
var lives = 8;
var correctLetters = 0;
var spaceCounter = 0;
var checkChange = false;
var wordArray = [];
var goodLetters = [];
var wrongLetters = [];

function print (array) {
  for (var i = 0; i < array.length; i++) {
    var row = '';
    for (var j = 0; j < array[i].length; j++) {
      row += array[i][j];
    }
    console.log(row);
  }
}

function setArray (word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      wordArray.push(' ');
      spaceCounter++;
    } else {
      wordArray.push('_');
    }
  }
  logArray(wordArray);
}

function checkRepetition (array, letter) {
  var rep = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === letter) {
      rep = true;
    }
  }
  return rep;
}

function isUpperCase (char) {
  if (char === char.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

function check (word, letter) {
  if (!checkRepetition(goodLetters, letter) && !checkRepetition(wrongLetters, letter)) {
    for (var i = 0; i < word.length; i++) {
      if (word.charAt(i) === letter || word.charAt(i) === letter.toUpperCase()) {
        if (isUpperCase(word.charAt(i))) {
          wordArray[i] = letter.toUpperCase();
        } else {
          wordArray[i] = letter;
        }
        checkChange = true;
        correctLetters++;
      }
    }
    if (checkChange === false) {
      lives--;
      wrongLetters.push(letter);
    } else {
      goodLetters.push(letter);
    }
    checkChange = false;
  }
}

function logArray (array) {
  var row = ' ';
  for (var j = 0; j < array.length; j++) {
    row += array[j] + ' ';
  }
  console.log(row);
}

function gameLoop (word) {
  console.log('Please do not enter more than one letter at once.');
  console.log('The expression to be guessed:\n');
  setArray(word);
  console.log('\nCorrect letters: ');
  logArray(goodLetters);
  console.log('Incorrect letters: ');
  console.log('\nNumber of lives: ' + lives);
  print(show.newState(show.state, lives));
  logArray(wrongLetters);
  while (correctLetters < word.length - spaceCounter) {
    var letter = readlineSync.keyIn('\nEnter letter: ', { limit: '$<a-z>' });
    console.log('\x1Bc');
    console.log('Please do not enter more than one letter at once.');
    check(word, letter);
    console.log('The expression to be guessed:\n');
    logArray(wordArray);
    console.log('\nCorrect letters: ');
    logArray(goodLetters);
    console.log('Incorrect letters: ');
    logArray(wrongLetters);
    console.log('\nNumber of lives: ' + lives);
    print(show.newState(show.state, lives));
    // console.log('Number of correct letters: ' + correctLetters);
    if (correctLetters === word.length - spaceCounter) {
      console.log('You have won');
      break;
    }
    if (lives === 0) {
      console.log('You died');
      break;
    }
  }
  lives = 8;
  correctLetters = 0;
  spaceCounter = 0;
  checkChange = false;
  wordArray = [];
  goodLetters = [];
  wrongLetters = [];
  show.state = show.initState();
}
// gameLoop();

module.exports = {
  loop: gameLoop
};
