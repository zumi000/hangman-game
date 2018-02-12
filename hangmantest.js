const readlineSync = require('readline-sync');var playerName = 'test';
require('./hangmansource.js');
/*
var word = allatok[Math.floor(Math.random() * allatok.length)];
console.log(word);
*/
var menu = readlineSync.question('válassz témát: ');
switch (menu) {
 case '1':
   var word = film[Math.floor(Math.random() * film.length)];
   console.log(word);
   break;
 case '2':
   var word = allatok[Math.floor(Math.random() * allatok.length)];
   console.log(word);
   break;
 case '3':
   var word = autobrandek[Math.floor(Math.random() * autobrandek.length)];
   console.log(word);
   break;
}
console.log(word);