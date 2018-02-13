const readlineSync = require('readline-sync');
const show = require('./graphics');
// var word = 'borsó főzelék';
// var letter = readlineSync.question('Enter letter:');
var lives = 6;
var correctLetters = 0;
var spaceCounter = 0;
var checkChange = false;
var wordArray = [];
var goodLetters = [];
var wrongLetters = [];

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

function check (word, letter) {
  if (!checkRepetition(goodLetters, letter) && !checkRepetition(wrongLetters, letter)) {
    for (var i = 0; i < word.length; i++) {
      if (word.charAt(i) === letter) {
        wordArray[i] = letter;
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
  show.lives(lives);
  while (correctLetters < word.length - spaceCounter) {
    var letter = readlineSync.question('\nEnter letter:');
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
    show.lives(lives);
    // console.log('Number of correct letters: ' + correctLetters);
    if (correctLetters === word.length - spaceCounter) {
      console.log('You have won.');
      break;
    }
    if (lives === 0) {
      console.log('YOU DIED');

      break;
    }
  }
}

// gameLoop();

module.exports = {
  loop: gameLoop
};
