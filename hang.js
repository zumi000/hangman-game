const readlineSync = require('readline-sync');
show = require('./graphics');

var quiz = "text of the quiz";
var playerName = "test";
console.log('\x1Bc');
// playerName = readlineSync.question('Kérlek, add meg a nevedet: ');
function enterMenu(playerName) {
    console.log('\x1Bc');
    show.logo();
    console.log('Üdvözöllek, ' + playerName + "!");
    show.menu();
    return mainMenu(playerName);
}

function mainMenu (playerName) {
    var menu = readlineSync.question('A választott menüpont: ');
    switch(menu) {
        case '1':
            //STARTJATEK
	    console.log('\x1Bc');
	    show.logo();
  	    console.log(playerName + " játékban");
	    show.phase0(playerName);
            return console.log("A feladvány: " + quiz);
        case '2':
            //TEMAKOR
            return show.phase5(playerName);
        case '3':
            //NEHEZSEG
            return show.phase4(playerName);
        case '4':
            //SCORE
            return show.phase3(playerName);
        case '5':
            return  console.log("Köszönjük, hogy velünk játszottál, várunk vissza");
        default:
            return wrongMenu();
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
