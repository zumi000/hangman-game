const readlineSync = require('readline-sync');

let film = ['bones', 'anal intruder', 'psych', 'big bang theory', 'breaking bad', 'modern family', 'game of thrones', 'dexter'];
let animals = ['great white shark', 'butterfly', 'grizzly bear', 'fallow deer'];
let manufacturers = ['ford', 'mercedes benz', 'jaguar', 'caldwell vale', 'sichuan tengzhong', 'lamborghini', 'land rover'];
let musicartists = ['jimi hendrix', 'elvis presley', 'david bowie', 'johnny cash', 'micheal jackson', 'billie holiday', 'amy winehouse'];
let actors = ['jack nicholson', 'al pacino', 'dustin hoffman', 'meryl streep', 'julia roberts', 'nicole kidman'];
function categorySelect () {
  console.log('1. Film Titles');
  console.log('2. Animals');
  console.log('3. Car Manufacturers');
  console.log('4. Musicans');
  console.log('5. Actors');
  var categoryMenu = readlineSync.question('Chose category: ');
  switch (categoryMenu) {
    case '1':
      return film[Math.floor(Math.random() * film.length)];
      break;
    case '2':
      return animals[Math.floor(Math.random() * animals.length)];
      break;
    case '3':
      return manufacturers[Math.floor(Math.random() * manufacturers.length)];
      break;
    case '4':
      return musicartists[Math.floor(Math.random() * musicartists.length)];
      break;
    case '5':
      return actors[Math.floor(Math.random() * actors.length)];
      break;
    default:
      break;
  }
}
module.exports = {
  categorySelect: categorySelect
};
