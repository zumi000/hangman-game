const readlineSync = require('readline-sync');
const show = require('./graphics');
const guess = require('./guessing');
const select = require('./hangmantest');

console.log('\x1Bc');
let playerName = readlineSync.question('Kérlek, add meg a nevedet: ');
enterMenu(playerName);
function enterMenu(playerName) {
  console.log('\x1Bc');
  show.logo();
  console.log('Üdvözöllek, ' + playerName + "!");
  show.menu();
  return mainMenu(playerName);
}

function mainMenu (playerName) {
  var menu = readlineSync.question('A választott menüpont: ');
  switch (menu) {
    case '1':
      //STARTJATEK
      console.log('\x1Bc');
      guess.loop (word);
      break;
    case '2':
      //TEMAKOR
      console.log('\x1Bc');
      word = select.categorySelect();
      enterMenu(playerName);
      //console.log(word);
      break;
    case '3':
      //NEHEZSEG
      
      break;
    case '4':
      //SCORE
         
      break;
    case '5':
      console.log('Köszönjük, hogy velünk játszottál, várunk vissza');
    default:
      wrongMenu();
      break;
}
}

function wrongMenu() {
  console.log('\x1Bc');
  show.logo();
  console.log('Üdvözöllek, ' + playerName + "!");
  show.menu();
  console.log("Nincs ilyen menüpont");
  mainMenu(playerName);
}