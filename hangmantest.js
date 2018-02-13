const readlineSync = require('readline-sync');

film = ['bones', 'anal intruder', 'psych', 'big bang theory', 'breaking bad', 'modern family', 'game of thrones', 'dexter'];
animals = ['great white shark', 'butterfly', 'grizzly bear', 'fallow deer'];
manufacturers = ['ford', 'mercedes benz', 'jaguar'];

function categorySelect () {
  console.log('1. Film Titles');
  console.log('2. Animals');
  console.log('3. Car Manufacturers');
  var categoryMenu = readlineSync.question('Chose category: ');
  switch (categoryMenu) {
    case '1':
      return film[Math.floor(Math.random() * film.length)];
      break;
    case '2':
      return manufacturers[Math.floor(Math.random() * manufacturers.length)];
      break;
    case '3':
      return manufacturers[Math.floor(Math.random() * manufacturers.length)];
      break;
  }
}
module.exports = {
  categorySelect: categorySelect
};
