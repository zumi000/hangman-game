const readlineSync = require('readline-sync');
show = require('./graphics');
guess = require('./guessing');

console.log('\x1Bc');
playerName = readlineSync.question('Kérlek, add meg a nevedet: ');
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
      show.logo();
      console.log(playerName + " játékban");
      show.phase0(playerName);
      guess.set();
      guess.loop ();
      break;
    case '2':
      //TEMAKOR
      show.phase0(playerName);
      break;
    case '3':
      //NEHEZSEG
      show.phase1(playerName);
      show.matrix();
      break;
    case '4':
      //SCORE
      show.phase3(playerName);      
      break;
    case '5':
      console.log("Köszönjük, hogy velünk játszottál, várunk vissza");
    default:
      wrongMenu();
      break;
}
}

function showQuiz() {
  console.log(quiz);
}

function wrongMenu() {
  console.log('\x1Bc');
  show.logo();
  console.log('Üdvözöllek, ' + playerName + "!");
  show.menu();
  console.log("Nincs ilyen menüpont");
  mainMenu(playerName);
}

enterMenu(playerName);
