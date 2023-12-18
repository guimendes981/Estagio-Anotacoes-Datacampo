//type Alias

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name: string;
    active?: boolean;
    albums: (string | number)[];
}

type UserId = stringOrNumber

//literal types
let myName: 'Gui'

let userName: 'Dave' | 'Reggie' | 'Sarah'


//functions
const add = (a: number, b:number ): number => {
    return a + b;
}

const logMsg = (message: any): void => {
    console.log(message);
    
}


logMsg('Hello World')
logMsg(add(5, 5)) //add(5, 5) is a number


let subtract = function (c: number, d: number):
number {
    return c - d;
}

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {(a: number, b: number): number};

//the two parameters are numbers and the return value is a number
let multiply: mathFunction = function(c, d) {
    return c * d;
} //multiply is a mathFunction, that is a function that takes two numbers and returns a number


logMsg(multiply(5, 5)) //multiply(5, 5) is a number



const addAll = (a: number, b:number, c?: number): number => {
    if (typeof c !== 'undefined') { 
        return a + b + c; //if c is defined, return a + b + c
    }
    return a + b; //if c is undefined, return a + b
}


//default parameters
const sumAll = (a: number = 10, b:number, c: number = 2 ): number => {
    return a + b + c; //if c is undefined, return a + b
}

logMsg(addAll(2, 2 ,2)) //6

logMsg(addAll(2, 2)) //4

logMsg(sumAll(undefined, 2)) //6


//rest parameters

const total = (...nums: number[]): number => { //rest parameter
    return nums.reduce((prev, curr) => prev + curr ); //reduce is a method that takes a function and an initial value
}

logMsg(total(1,2,3,4)) //10