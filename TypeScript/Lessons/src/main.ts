type One = string;
type Two = number | string;
type Three = 'Hello'

//convert to more or less specific types
let a: One = 'Hello';
let b = a as Two; //b is a Two, that is a number or a string
let c = a as Three; //c is a Three, that is 'Hello', and only 'Hello'

let d = <One>'World'; //d is a One, that is a string
let e = <One>'World'; //d is a One, that is a string

//add or concat
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
        if (c === 'add') return a + b;
        return '' + a + b;
    }


//this will not pass because myVal is only a string
let myVal: string = addOrConcat(1, 2, 'concat') as string


//be careful, TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(1, 2, 'concat') as number


10 as string //this is a type assertion, not a type conversion
(10 as unknown) as string //this is a type assertion, not a type conversion


// The DOM
const img = document.getElementById('img') as HTMLImageElement;
const myImg = document.getElementById('#img') as HTMLImageElement;

img.src 
myImg.src