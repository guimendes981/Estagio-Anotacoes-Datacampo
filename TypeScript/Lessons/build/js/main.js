"use strict";
//convert to more or less specific types
let a = 'Hello';
let b = a; //b is a Two, that is a number or a string
let c = a; //c is a Three, that is 'Hello', and only 'Hello'
let d = 'World'; //d is a One, that is a string
let e = 'World'; //d is a One, that is a string
//add or concat
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
//this will not pass because myVal is only a string
let myVal = addOrConcat(1, 2, 'concat');
//be careful, TS sees no problem - but a string is returned
let nextVal = addOrConcat(1, 2, 'concat');
10; //this is a type assertion, not a type conversion
10; //this is a type assertion, not a type conversion
// The DOM
const img = document.getElementById('img');
const myImg = document.getElementById('#img');
img.src;
myImg.src;
