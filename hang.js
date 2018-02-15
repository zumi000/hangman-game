const readlineSync = require('readline-sync');
const show = require('./graphics');
const guess = require('./guessing');
const select = require('./hangmantest');
var word;
var imHard = 0;
var diffTrue;
console.log('\x1Bc');
let playerName = readlineSync.question('Please, enter your name: ');
enterMenu(playerName);
function enterMenu (playerName) {
  console.log('\x1Bc');
  show.logo();
  console.log('Welcome, ' + playerName + '!\n');
  console.log('First you must to select category\n');
  word = select.categorySelect();
  return mainMenu(playerName);
}

function mainMenu (playerName) {
  show.logo();
  console.log('Welcome, ' + playerName + '!\n');
  show.menu();
  var menu = readlineSync.question('Please select a menu: ');
  switch (menu) {
    case '1':
      // start game
      console.log('\x1Bc');
      guess.loop(word);
      if (readlineSync.keyInYN('Do you want to start another game?')) {
        enterMenu(playerName);
      }
      console.log('Thank you for choosing us');
      process.exit();
    case '2':
      // modify category
      console.log('\x1Bc');
      show.logo();
      console.log('Welcome, ' + playerName + '!\n');
      console.log('Here you can modify the selected category\n');
      word = select.categorySelect(imHard);
      return mainMenu(playerName);
    case '3':
      // modify difficulty
      console.log('\x1Bc');
      show.logo();
      console.log('1. for Easy');
      console.log('2. for Advanced');
      diffTrue = readlineSync.question('Please select difficulty level: ');
      if (diffTrue === 1) {
        imHard = 0;
        mainMenu(playerName);
      } else {
        imHard = 1;
        mainMenu(playerName);
      }
      break;
    case '4':
      // scoreboard
      break;
    case '5':
      console.log('Thank you for choosing us');
      process.exit();
    default:
      wrongMenu();
      break;
  }
}

function wrongMenu () {
  console.log('\x1Bc');
  show.logo();
  console.log('Welcome, ' + playerName + '!');
  show.menu();
  console.log('Wrong number');
  mainMenu(playerName);
}
