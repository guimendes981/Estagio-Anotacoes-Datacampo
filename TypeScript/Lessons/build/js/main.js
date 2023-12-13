"use strict";
let stringArray = ['one', 'hey', 'Gui'];
let guitars = ['Gibson', 'Fender', 5150];
let mixedData = ['EVH', 1984, true];
stringArray[0] = 'two';
stringArray.push('three');
guitars[0] = 1984;
guitars.unshift('EVH');
let teste = [];
let bands = [];
bands.push('Van Halen');
//Tuple
let myTuple = ['Gui', 31, true]; //tuples are fixed length and fixed type
let mixed = ['John', 1984, true];
myTuple = mixed;
