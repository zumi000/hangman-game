var myArray = ['Bones', 'Psych', 'Big Bang Theory', 'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

var rand = myArray[Math.floor(Math.random() * myArray.length)];
console.log(rand);


import {hello} from './hangmansource.js'; // or './module'
let val = hello(); // val is "Hello";