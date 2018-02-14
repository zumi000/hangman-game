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

function getInitState() {
  return [[' ', ' ', ' ', '_', '_', '_', '_', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '|', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' '],
    [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '_', '|', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['|', ' ', ' ', ' ', '|', '_', '_', '_', '_', '_', '_', ' '],
    ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['|', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '|']];
}
var state = getInitState();

function init (tomb) {
  for (i = 0; i < picture.length; i++) {
    var row = '';
    for (var j = 0; j < picture[i].length; j++) {
      row += picture[i][j]
    }
    console.log(row);
  }
}

function changeChar(state, i, j, char) {
  state[j - 1][i - 1] = char;
  return state;
}

function newState (state, lives) {
  switch (lives) {
    case 0:
      state = changeChar(state, 9, 6, '\\');
      break;
    case 1:
      state = changeChar(state, 9, 6, '\\');
      break;
    case 2:
      state = changeChar(state, 7, 6, '/');
      break;
    case 3:
      state = changeChar(state, 9, 4, '\\');
      break;
    case 4:
      state = changeChar(state, 7, 4, '/');
      break;
    case 5:
      state = changeChar(state, 8, 5, '|');
      break;
    case 6:
      state = changeChar(state, 8, 4, '|');
      break;
    case 7:
      state = changeChar(state, 8, 3, 'o');
      break;
    case 8:
      state = getInitState();
      break;
  }
  return state;
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

module.exports = {
  logo: showLogo,
  menu: showMenu,
  init: init,
  newState: newState,
  state: state,
  initState: getInitState
};
