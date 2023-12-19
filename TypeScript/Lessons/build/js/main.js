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
let nextVal = addOrConcat(1, 2, 'concat');
