const readlineSync = require('readline-sync');
const show = require('./graphics');
const guess = require('./guessing');
const select = require('./hangmantest');
var word;
var imHard = false;
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
  word = select.easy();
  return mainMenu(playerName);
}

function selectChat (playerName) {
  console.log('\x1Bc');
  show.logo();
  console.log('Welcome, ' + playerName + '!\n');
  console.log('Here you can modify the selected category\n');
  if (imHard = true) {
    word = select.hard();
  } else {
    word = select.easy();
  }
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
      var newGame = readlineSync.keyIn('Do you want to start another game? [y/n]', {limit: '$<ynYN>'});
      switch (newGame) {
        case 'y': case 'Y':
          enterMenu(playerName);
          break;
        case 'n': case 'N':
          console.log('Thank you for choosing us');
          process.exit();
      }
      break;
    case '2':
      // modify category
      selectChat(playerName);
      break;
    case '3':
      // modify difficulty
      imHard = !imHard;
      selectChat(playerName);
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
}
