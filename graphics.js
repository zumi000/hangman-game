// graphics.js
/* képergyő törlése:
console.log('\033c');
vagy
console.log('\x1Bc');
*/
function showLogo(a) {
  console.log('88');
  console.log('88');
  console.log('88');
  console.log('88,dPPYba,  ,adPPYYba, 8b,dPPYba,   ,adPPYb,d8 88,dPYba,,adPYba,  ,adPPYYba,  8b,dPPYba,');
  console.log("88P'    \"8a \"\"     `Y8 88P'   `\"8a a8\"    `Y88 88P'   \"88\"    \"8a \"\"     `Y8  88P'   `\"8a");
  console.log('88       88 ,adPPPPP88 88       88 8b       88 88      88      88 ,adPPPPP88  88       88');
  console.log('88       88 88,    ,88 88       88 "8a,   ,d88 88      88      88 88,    ,88  88       88');
  console.log('88       88 `"8bbdP"Y8 88       88  `"YbbdP"Y8 88      88      88 `"8bbdP"Y8  88       88');
  console.log('                                    aa,    ,88');
  console.log('                                     "Y8bbdP"');
  console.log('                                                       ________');
  console.log('                                                      /  _____/_____    _____   ____');
  console.log('                                                     /   \\  ___\\__  \\  /     \\_/ __ \\');
  console.log('                                                     \\    \\_\\  \\/ __ \\|  Y Y  \\  ___/');
  console.log('                                                      \\______  (____  /__|_|  /\\___  >');
  console.log('                                                             \\/     \\/      \\/     \\/');
  console.log('\n');
}
module.exports = showLogo;

function showMenu(a) {
  console.log('\n');
  console.log('Az alábbi menüpontok közül választhatsz a hozzá tartozó szám megadásával: ')
  console.log('1: Játék indítása');
  console.log('2: Témakör módosítása <jelenlegi: TEMAKOR>');
  console.log('3: Nehézségi fogozat módosítása <jelenlegi: NEHEZSEG>');
  console.log('4: Legjobb eredmények megtekintése');
  console.log('5: Kilépés a játékból');
  console.log('6: ...optionals...');
}

let showPhase =
  [[' ', ' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '|', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' '],
  [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '_', '|', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['|', ' ', ' ', ' ', '|', ' ', '_', '_', '_', '_', '_', ' '],
  ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
  ['|', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '|']];

function showMatrix(phase) {
  for (i = 0; i < showPhase.length; i++) {
    var row = '';
    for (var j = 0; j < showPhase[i].length; j++) {
      row += showPhase[i][j]
    }
    console.log(row);
  }
}

function changeChar(tomb, i, j, char) {
  tomb[j - 1][i - 1] = char;
  return tomb;
}

function print(tomb) {
  for (i = 0; i < tomb.length; i++) {
    var row = '';
    for (var j = 0; j < tomb[i].length; j++) {
      row += tomb[i][j]
    }
    console.log(row);
  }
}


function showLives(lives) {
switch (lives) {
  case 6: showMatrix(showPhase);
    break;
  case 5: changeChar(showPhase, 8, 3, 'o');
    print(showPhase);
    break;
  case 4:
    changeChar(showPhase, 8, 3, 'o');
    changeChar(showPhase, 8, 4, '|');
    changeChar(showPhase, 8, 5, '|');
    print(showPhase);
    break;
  case 3:
    changeChar(showPhase, 8, 3, 'o');
    changeChar(showPhase, 8, 4, '|');
    changeChar(showPhase, 8, 5, '|');
    changeChar(showPhase, 7, 4, '/');
    print(showPhase);
    break;
  case 2:
    changeChar(showPhase, 8, 3, 'o');
    changeChar(showPhase, 8, 4, '|');
    changeChar(showPhase, 8, 5, '|');
    changeChar(showPhase, 7, 4, '/');
    changeChar(showPhase, 9, 4, '\\');
    print(showPhase);
    break;
  case 1:
    changeChar(showPhase, 8, 3, 'o');
    changeChar(showPhase, 8, 4, '|');
    changeChar(showPhase, 8, 5, '|');
    changeChar(showPhase, 7, 4, '/');
    changeChar(showPhase, 9, 4, '\\');
    changeChar(showPhase, 7, 6, '/');
    print(showPhase);
    break;
  case 0:
    changeChar(showPhase, 8, 3, 'o');
    changeChar(showPhase, 8, 4, '|');
    changeChar(showPhase, 8, 5, '|');
    changeChar(showPhase, 7, 4, '/');
    changeChar(showPhase, 9, 4, '\\');
    changeChar(showPhase, 7, 6, '/');
    changeChar(showPhase, 9, 6, '\\');
    print(showPhase);
    break;
}
}

module.exports = {
  logo: showLogo,
  menu: showMenu,
  matrix: showMatrix,
  lives: showLives
};


