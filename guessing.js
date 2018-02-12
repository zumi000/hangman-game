const readlineSync = require('readline-sync');
var word = 'aaa def ghi';
// var letter = readlineSync.question('Enter letter:');
var errors = 0;
var correctLetters = 0;
var spaceCounter = 0;
var checkChange = false;
var array = [];

function setArray () {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      array.push(' ');
      spaceCounter++;
    } else {
      array.push('_');
    }
  }
}

function check (letter) {
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) === letter) {
      array[i] = letter;
      checkChange = true;
      correctLetters++;
    }
  }
  if (checkChange === false) {
    errors++;
  }
  checkChange = false;
}

function logArray () {
  var row = ' ';
  for (var i = 0; i < array.length; i++) {
    row += array[i] + ' ';
  }
  console.log(row);
}

function gameLoop () {
  while (correctLetters < word.length - spaceCounter) {
    var letter = readlineSync.question('Enter letter:');
    check(letter);
    logArray();
    console.log(letter + ' ');
    console.log(word.length);
    console.log(spaceCounter);
    console.log(errors);
    console.log(correctLetters);
  }
  console.log('You have won!');
}

setArray();
gameLoop();
