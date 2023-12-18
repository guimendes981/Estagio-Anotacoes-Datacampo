"use strict";
//type Alias
//literal types
let myName;
let userName;
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello World');
logMsg(add(5, 5)); //add(5, 5) is a number
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {(a: number, b: number): number};
//the two parameters are numbers and the return value is a number
let multiply = function (c, d) {
    return c * d;
}; //multiply is a mathFunction, that is a function that takes two numbers and returns a number
logMsg(multiply(5, 5)); //multiply(5, 5) is a number
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c; //if c is defined, return a + b + c
    }
    return a + b; //if c is undefined, return a + b
};
