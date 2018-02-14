const readlineSync = require('readline-sync');
const show = require('./graphics');
const guess = require('./guessing');
const select = require('./hangmantest');



console.log('\x1Bc');
let playerName = readlineSync.question('Please, enter your name: ');
enterMenu(playerName);
function enterMenu(playerName) {
  console.log('\x1Bc');
  show.logo();
  console.log('Welcome, ' + playerName + "!\n");
  console.log('First you must to select category\n');
  word = select.categorySelect();
  return mainMenu(playerName);
}

function mainMenu (playerName) {
  show.logo();
  console.log('Welcome, ' + playerName + "!\n");
  show.menu();
  var menu = readlineSync.question('Please select a menu: ');
  switch (menu) {
    case '1':
      // start game
      console.log('\x1Bc');
      guess.loop (word);
      break;
    case '2':
      // modify category
      console.log('\x1Bc');
      show.logo();
      console.log('Welcome, ' + playerName + "!\n");
      console.log('Here you can modify the selected category\n');
      word = select.categorySelect();
      return mainMenu(playerName);
      break;
    case '3':
      // modify difficulty
      
      break;
    case '4':
      // scoreboard
         
      break;
    case '5':
<<<<<<< HEAD
      console.log("Köszönjük, hogy velünk játszottál, várunk vissza");
=======
      console.log("Thank you for choosing us");
>>>>>>> fb433dbea5c9a247d053c54b059fbb36e4634c26
    default:
      wrongMenu();
      break;
  }
}

function wrongMenu() {
  console.log('\x1Bc');
  show.logo();
  console.log('Welcome, ' + playerName + "!");
  show.menu();
  console.log("Wrong number");
  mainMenu(playerName);
}