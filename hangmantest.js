const readlineSync = require('readline-sync');

let film = ['anal intruder', 'big bang theory', 'breaking bad', 'game of thrones'];
let harderFilm = ['bones', 'psych', 'modern family', 'dexter'];
let animals = ['great white shark', 'butterfly', 'grizzly bear', 'fallow deer'];
let harderAnimals = ['great white shark', 'butterfly', 'grizzly bear', 'fallow deer'];
let manufacturers = ['ford', 'mercedes benz', 'jaguar', 'caldwell vale', 'sichuan tengzhong', 'lamborghini', 'land rover'];
let harderManufacturers = ['ford', 'mercedes benz', 'jaguar', 'caldwell vale', 'sichuan tengzhong', 'lamborghini', 'land rover'];
let musicans = ['jimi hendrix', 'elvis presley', 'david bowie', 'johnny cash', 'micheal jackson', 'billie holiday', 'amy winehouse'];
let harderMusicans = ['jimi hendrix', 'elvis presley', 'david bowie', 'johnny cash', 'micheal jackson', 'billie holiday', 'amy winehouse'];
let actors = ['jack nicholson', 'al pacino', 'dustin hoffman', 'meryl streep', 'julia roberts', 'nicole kidman'];
let harderActors = ['jack nicholson', 'al pacino', 'dustin hoffman', 'meryl streep', 'julia roberts', 'nicole kidman'];
function categorySelect () {
  console.log('1. Film Titles');
  console.log('2. Animals');
  console.log('3. Car Manufacturers');
  console.log('4. Musicans');
  console.log('5. Actors');
  var categoryMenu = readlineSync.question('Chose from category: ');
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
      return musicans[Math.floor(Math.random() * musicans.length)];
      break;
    case '5':
      return actors[Math.floor(Math.random() * actors.length)];
      break;
    default:
      break;
  }
}
function harderCategorySelect () {
  console.log('1. Film Titles');
  console.log('2. Animals');
  console.log('3. Car Manufacturers');
  console.log('4. Musicans');
  console.log('5. Actors');
  var categoryMenu = readlineSync.question('Chose from advanced category: ');
  switch (categoryMenu) {
    case '1':
      return harderFilm[Math.floor(Math.random() * harderFilm.length)];
      break;
    case '2':
      return harderAnimals[Math.floor(Math.random() * harderAnimals.length)];
      break;
    case '3':
      return harderManufacturers[Math.floor(Math.random() * harderManufacturers.length)];
      break;
    case '4':
      return harderMusicans[Math.floor(Math.random() * harderMusicans.length)];
      break;
    case '5':
      return harderActors[Math.floor(Math.random() * harderActors.length)];
      break;
    default:
      break;
  }
}
module.exports = {
  categorySelect: categorySelect,
  harderCategorySelect: harderCategorySelect
};
