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
//default parameters
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c; //if c is undefined, return a + b
};
logMsg(addAll(2, 2, 2)); //6
logMsg(addAll(2, 2)); //4
logMsg(sumAll(undefined, 2)); //6
//rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr); //reduce is a method that takes a function and an initial value
};
logMsg(total(1, 2, 3, 4)); //10
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
//use of nevertype
const numberOrString = (value) => {
    if (typeof value === 'string') {
        return `string`;
    }
    if (isNumber(value)) {
        return `number`;
    }
    return createError('This should never happen');
};
