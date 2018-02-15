const readlineSync = require('readline-sync');
const show = require('./graphics');
const guess = require('./guessing');
const select = require('./hangmantest');
var word;
var imHard = 0;
var diffTrue = 0;
var fs = require('fs');
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
  var menu = readlineSync.keyIn('Please select a menu: ', { limit: '$<1-5>' });
  switch (menu) {
    case '1':
      // start game
      console.log('\x1Bc');
      guess.loop(word, playerName);
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
      console.log('\x1Bc');
      console.log('Username ' + 'Expression ' + 'Length');
      var data = fs.readFileSync('results.txt');
      console.log(data.toString());
      readlineSync.keyIn('Please hit enter to return to the main menu.');
      return mainMenu(playerName);
    case '5':
      console.log('Thank you for choosing us');
      process.exit();
  }
};
