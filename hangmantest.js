const readlineSync = require('readline-sync');
let imHard = 0;
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

function categorySelect (imHard) {
  if (imHard === 0) {
    console.log('1. Film Titles');
    console.log('2. Animals');
    console.log('3. Car Manufacturers');
    console.log('4. Musicans');
    console.log('5. Actors');
    var categoryMenu = readlineSync.question('Chose from EAZY categories: ');
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
      default:
        break;
    }
  } else {
    console.log('1. Film Titles');
    console.log('2. Animals');
    console.log('3. Car Manufacturers');
    console.log('4. Musicans');
    console.log('5. Actors');
    var categoryMenu1 = readlineSync.question('Chose from ADVANCED categories: ');
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
      default:
        break;
    }
  }
}

module.exports = {
  categorySelect: categorySelect
};
