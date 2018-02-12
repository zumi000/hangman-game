// graphics.js
/* képergyő törlése:
console.log('\033c');
vagy
console.log('\x1Bc');
*/
function showLogo (a) {
  console.log("88");
  console.log("88");
  console.log("88");
  console.log("88,dPPYba,  ,adPPYYba, 8b,dPPYba,   ,adPPYb,d8 88,dPYba,,adPYba,  ,adPPYYba,  8b,dPPYba,");
  console.log("88P'    \"8a \"\"     `Y8 88P'   `\"8a a8\"    `Y88 88P'   \"88\"    \"8a \"\"     `Y8  88P'   `\"8a");
  console.log("88       88 ,adPPPPP88 88       88 8b       88 88      88      88 ,adPPPPP88  88       88");
  console.log("88       88 88,    ,88 88       88 \"8a,   ,d88 88      88      88 88,    ,88  88       88");
  console.log("88       88 `\"8bbdP\"Y8 88       88  `\"YbbdP\"Y8 88      88      88 `\"8bbdP\"Y8  88       88");
  console.log("                                    aa,    ,88");
  console.log("                                     \"Y8bbdP\"");
  console.log("                                                       ________");
  console.log("                                                      /  _____/_____    _____   ____");
  console.log("                                                     /   \\  ___\\__  \\  /     \\_/ __ \\");
  console.log("                                                     \\    \\_\\  \\/ __ \\|  Y Y  \\  ___/");
  console.log("                                                      \\______  (____  /__|_|  /\\___  >");
  console.log("                                                             \\/     \\/      \\/     \\/");
  console.log("\n");
}
module.exports = showLogo;

function showMenu (a) {
  console.log("\n");
  console.log("Az alábbi menüpontok közül választhatsz a hozzá tartozó szám megadásával: ")
  console.log("1: Játék indítása");
  console.log("2: Témakör módosítása <jelenlegi: TEMAKOR>");
  console.log("3: Nehézségi fogozat módosítása <jelenlegi: NEHEZSEG>");
  console.log("4: Legjobb eredmények megtekintése");
  console.log("5: Kilépés a játékból");
  console.log("6: ...optionals...");
}

function showPhase6 (a) {
  console.log("\n");
  console.log("   ____");
  console.log("  |    |");
  console.log("  |    o");
  console.log("  |   /|\\");
  console.log("  |    |");
  console.log("  |   / \\");
  console.log(" _|_");
  console.log("|   |______");
  console.log("|          |");
  console.log("|__________|");
}

function showPhase5 (a) {
  console.log("\n");
  console.log("   ____");
  console.log("  |    |");
  console.log("  |    o");
  console.log("  |   /|\\");
  console.log("  |    |");
  console.log("  |   /");
  console.log(" _|_");
  console.log("|   |______");
  console.log("|          |");
  console.log("|__________|");
}

function showPhase4 (a) {
  console.log("\n");
  console.log("   ____");
  console.log("  |    |");
  console.log("  |    o");
  console.log("  |   /|\\");
  console.log("  |    |");
  console.log("  |");
  console.log(" _|_");
  console.log("|   |______");
  console.log("|          |");
  console.log("|__________|");
}

function showPhase3 (a) {
  console.log("\n");
  console.log("   ____");
  console.log("  |    |");
  console.log("  |    o");
  console.log("  |   /|");
  console.log("  |    |");
  console.log("  |");
  console.log(" _|_");
  console.log("|   |______");
  console.log("|          |");
  console.log("|__________|");
}

function showPhase2 (a) {
  console.log("\n");
  console.log("   ____");
  console.log("  |    |");
  console.log("  |    o");
  console.log("  |    |");
  console.log("  |    |");
  console.log("  |");
  console.log(" _|_");
  console.log("|   |______");
  console.log("|          |");
  console.log("|__________|");
}

function showPhase1 (a) {
  console.log("\n");
  console.log("   ____");
  console.log("  |    |");
  console.log("  |    o");
  console.log("  |");
  console.log("  |");
  console.log("  |");
  console.log(" _|_");
  console.log("|   |______");
  console.log("|          |");
  console.log("|__________|");
}

let showPhase0 = 
[[" ", " ", " ", "_", "_", "_", "_", " ", " ", " ", " ", " "], 
[" ", " ", "|", " ", " ", " ", " ", "|", " ", " ", " ", " "], 
[" ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", " "], 
[" ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", " "], 
[" ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", " "], 
[" ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", " "], 
[" ", "_", "|", "_", " ", " ", " ", " ", " ", " ", " ", " "], 
["|", " ", " ", " ", "|", "_", "_", "_", "_", "_", "_", " "], 
["|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"], 
["|", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "|"]];

function showMatrix(phase) {
  for (i=0; i < showPhase0.length; i++) {
    var row = "";
    for (var j=0; j < showPhase0[i].length; j++) {
      row += showPhase0[i][j]
    }
    console.log(row);
  }
}

module.exports = {
  logo: showLogo,
  menu: showMenu,
  matrix: showMatrix,
  phase1: showPhase1
};
