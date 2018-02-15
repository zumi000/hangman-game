const readlineSync = require('readline-sync');
let film = ['Anal Intruder', 'Big Bang Theory', 'Breaking Bad', 'Game of Thrones', 'The Godfather', 'The Shawshank Redemption', 'Star Wars'];
let harderFilm = ['Bones', 'Psych', 'Modern Family', 'Dexter', 'Casablanca', 'Doctor Zhivago', 'Rocky'];
let animals = ['Great White Shark', 'Bavarian Mountain Hound', 'Grizzly Bear', 'Fallow Deer', 'Arctic Fox', 'Blue Whale'];
let harderAnimals = ['Ant', 'Fox', 'Baboon', 'Axolotl', 'Aye Aye', 'Angelfish', 'Bison'];
let manufacturers = ['Volkswagen', 'Mercedes Benz', 'Alfa Romeo', 'Aston Martin', 'Sichuan Tengzhong', 'Lamborghini', 'Land Rover'];
let harderManufacturers = ['Ford', 'McLaren', 'Jaguar', 'Caldwell Vale', 'Kia', 'Lexus', 'Peugot'];
let musicans = ['Jimi Hendrix', 'Elvis Presley', 'David Bowie', 'Johnny Cash', 'Micheal Jackson', 'Billie Holiday', 'Amy Winehouse'];
let harderMusicans = ['Stu Larsen', 'Amos Lee', 'Ashleigh Mannix', 'Bob Evans', 'Kate Miller', 'Lisa Tingle', 'Maarko Saaresto'];
let actors = ['Jack Nicholson', 'Al Pacino', 'Dustin Hoffman', 'Meryl Streep', 'Julia Roberts', 'Nicole Kidman', 'Marlon Brando'];
let harderActors = ['Domhnall Gleeson', 'Liev Schreiber', 'Peter Sarsgaard', 'Michael Stuhlbarg', 'Brendan Gleeson', 'Elijah Wood', 'Andy Serkis'];
function easySelect () {
  console.log('1. Film Titles');
  console.log('2. Animals');
  console.log('3. Car Manufacturers');
  console.log('4. Musicans');
  console.log('5. Actors');
  var categoryMenu = readlineSync.keyIn('Chose from EASY categories: ', {limit: '$<1-5>'});
  switch (categoryMenu) {
    case '1':
      return film[Math.floor(Math.random() * film.length)];
    case '2':
      return animals[Math.floor(Math.random() * animals.length)];
    case '3':
      return manufacturers[Math.floor(Math.random() * manufacturers.length)];
    case '4':
      return musicans[Math.floor(Math.random() * musicans.length)];
    case '5':
      return actors[Math.floor(Math.random() * actors.length)];
  }
}

function hardSelect () {
  console.log('1. Film Titles');
  console.log('2. Animals');
  console.log('3. Car Manufacturers');
  console.log('4. Musicans');
  console.log('5. Actors');
  var categoryMenu1 = readlineSync.keyIn('Chose from ADVANCED categories: ', {limit: '$<1-5>'});
  switch (categoryMenu1) {
    case '1':
      return harderFilm[Math.floor(Math.random() * harderFilm.length)];
    case '2':
      return harderAnimals[Math.floor(Math.random() * harderAnimals.length)];
    case '3':
      return harderManufacturers[Math.floor(Math.random() * harderManufacturers.length)];
    case '4':
      return harderMusicans[Math.floor(Math.random() * harderMusicans.length)];
    case '5':
      return harderActors[Math.floor(Math.random() * harderActors.length)];
  }
}

module.exports = {
  easy: easySelect,
  hard: hardSelect
};
