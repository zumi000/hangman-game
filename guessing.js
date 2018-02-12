const readlineSync = require('readline-sync');
var word = 'bash script boys feat lady java';
// var letter = readlineSync.question('Enter letter:');
var errors = 0;
var correctLetters = 0;
var spaceCounter = 0;
var checkChange = false;
var wordArray = [];
var goodLetters = [];
var wrongLetters = [];

function setArray () {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      wordArray.push(' ');
      spaceCounter++;
    } else {
      wordArray.push('_');
    }
  }
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

function check (letter) {
  if (!checkRepetition(goodLetters, letter) && !checkRepetition(wrongLetters, letter)) {
    for (var i = 0; i < word.length; i++) {
      if (word.charAt(i) === letter) {
        wordArray[i] = letter;
        checkChange = true;
        correctLetters++;
      }
    }
    if (checkChange === false) {
      errors++;
      wrongLetters.push(letter);
    } else {
      goodLetters.push(letter);
    }
    checkChange = false;
  }
}

function logArray (array) {
  var row = ' ';
  for (var i = 0; i < array.length; i++) {
    row += array[i] + ' ';
  }
  console.log(row);
}

function gameLoop () {
  while (correctLetters < word.length - spaceCounter) {
    var letter = readlineSync.question('Enter letter:');
    console.log('\x1Bc');
    console.log('Please do not enter a letter more than once.');
    check(letter);
    console.log('The expression to be guessed:');
    logArray(wordArray);
    console.log('Correct letters: ');
    logArray(goodLetters);
    console.log('Incorrect letters: ');
    logArray(wrongLetters);
    // console.log(letter + ' ');
    // console.log(word.length);
    // console.log(spaceCounter);
    console.log(errors);
    console.log(correctLetters);
  }
  console.log('You have won!');
}

setArray();
gameLoop();

/*
module.exports = {
  set: setArray,
  loop: gameLoop
};
*/
