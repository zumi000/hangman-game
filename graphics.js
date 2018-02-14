// graphics.js
/* képergyő törlése:
console.log('\033c');
vagy
console.log('\x1Bc');
*/
function showLogo(a) {
  console.log('\x1Bc');
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
  console.log('You can select a menu with typing its number: \n');
  console.log('1: Start game');
  console.log('2: Modify category');
  console.log('3: Modify difficulty');
  console.log('4: Check scoreboard');
  console.log('5: Exit game');
}

let picture =
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

function init (tomb) {
  for (i = 0; i < picture.length; i++) {
    var row = '';
    for (var j = 0; j < picture[i].length; j++) {
      row += picture[i][j]
    }
    console.log(row);
  }
}

function changeChar(tomb, i, j, char) {
  tomb[j - 1][i - 1] = char;
  return tomb;
}

function newState (matrix, lives) {
  switch (lives) {
    case 0:
      console.log("died");
      break;
    case 1:
      matrix = changeChar(matrix, 9, 6, '\\');
      break;
    case 2:
      matrix = changeChar(matrix, 7, 6, '/');
      break;
    case 3:
      matrix = changeChar(matrix, 9, 4, '\\');
      break;
    case 4:
      matrix = changeChar(matrix, 7, 4, '/');
      break;
    case 5:
      matrix = changeChar(matrix, 8, 5, '|');
      break;
    case 6:
      matrix = changeChar(matrix, 8, 4, '|');
      break;
    case 7:
      matrix = changeChar(matrix, 8, 3, 'o');
      break;
    case 8:
      matrix = changeChar(matrix, 11, 3, ' ');
      break;
  }
  return matrix;
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

/*print(newState(picture, 8));
print(newState(picture, 7));
print(newState(picture, 6));
print(newState(picture, 5));
print(newState(picture, 4));
print(newState(picture, 3));
print(newState(picture, 2));
print(newState(picture, 1));
print(newState(picture, 0));
*/

/* function showLives(lives) {
switch (lives) {
  case 6: showMatrix(showPhase);
    break;
  case 5: 
  changeChar(showPhase, 8, 3, 'o');
    print(showPhase);
    break;
*/


module.exports = {
  logo: showLogo,
  menu: showMenu,
  init: init,
  state: newState,
  picture: picture
};



// init state = show.matrix(showPhase);
