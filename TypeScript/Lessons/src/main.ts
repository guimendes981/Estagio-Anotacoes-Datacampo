let stringArray = ['one', 'hey', 'Gui'];

let guitars = ['Gibson', 'Fender', 5150];

let mixedData =['EVH', 1984, true];

stringArray[0] = 'two';
stringArray.push('three');

guitars[0] = 1984;
guitars.unshift('EVH');
 
let teste = [];
let bands: string[] = [];
bands.push('Van Halen');

//Tuple

let myTuple: [string, number, boolean] = ['Gui', 31, true]; //tuples are fixed length and fixed type

let mixed = ['John', 1984, true];

myTuple[1] = 31


let myObj: object
myObj = []

console.log(typeof myObj);

myObj = bands;
myObj = {}

const exampleObj = {
    prop1: 'Gui',
    prop2: true,
}

exampleObj.prop2 =  false;

type Guitarist = {
    name: string;
    active: boolean;
    albums: (string | number)[];
}

let evh: Guitarist = {
    name: 'Eddie Van Halen',
    active: false,
    albums: ['Van Halen I', 'Van Halen II', 1984]
}

let JP: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['Led Zeppelin I', 'Led Zeppelin II', 1969]
}

evh.y

