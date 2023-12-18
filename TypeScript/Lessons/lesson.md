# Lesson1

- TypeScript can compile JS to be compatible with older browsers

- We can use 'tsc main.ts' to compile our TS code to JS

- And then we can use 'tsc main.ts -w' to watch for changes and compile automatically

- All ts files go in a src folder and all html files go in a build folder

- Use 'tsc --init' to create a tsconfig.json file

- By changing the target in the tsconfig.json file we can change the version of JS we want to compile to, for example 'es5' which is for older browsers

- JS ignores strings + numbers

- TS detects the data type of a variable, it does not get in the way but it gives us warnings

- Valid JS is valid TS, but that doesn't mean TS likes it

- We can use 'noEmmitOnError' to stop TS from compiling if there are errors

- To set explicit types on variables we can use ':type' after the variable name, the type can be 'string', 'number', 'boolean', 'any', 'void', 'null', 'undefined', 'never', 'unknown', 'object', 'array', 'tuple', 'enum', 'function', 'class', 'interface', 'type alias', 'generics'


# Lesson2

- TypeScrpit will try to automatically infer the type of a variable, you can see that by hovering over the variable name

- We can manually set the type of a variable by using ':type' after the variable name, telling TS what type of data the variable will hold

- If we set a variable to a type and then try to set it to a different type, TS will give us an error

- The use of 'any' is discouraged because it defeats the purpose of TS, any basically means that the variable can be of any type

- When TS can't infer the type of a variable, it will set it to 'any'

- Union types allow us to set a variable to multiple types, for example 'let x: number | string = 10' or 'let x: number | string = '10''

 -  Union types are not restricted to only two types, we can have as many as we want


# Lesson3

## Arrays

- We can mix types in arrays, but it's not recommended

- We can use 'let x: (string | number)[] = []' to set an array to only hold strings and numbers

## Tuples

- Tuples are arrays with a fixed number of elements, the types of the elements are known

- Example: 
```
let x: [string, number] = ['hello', 10]
```

## Objects

- We can use 'let x: {name: string, age: number} = {name: 'John', age: 30}' to set an object to only hold strings and numbers

- TS does not allow us to add properties to an object that are not defined in the object type

- If we want to make an object type optional we can use '?', for example 'let x: {name: string, age?: number} = {name: 'John'}', using '?' after a property name makes it optional


## Functions

- By using ``` guitarist: Guitarist ``` we are saying that the function is expecting an object of type Guitarist

```
const greetGuitarist = (guitaris: Guitarist) => {
    console.log(`Hello ${guitarist.name}`)
}
```

- In the beggining of the function, both type and interface are valid, but if we want to use the interface we have to use 'implements' instead of ':'

- Use void when a function does not return anything


## Enums

- Enums allow us to define a set of named constants, they make our code more readable and less prone to errors

- Unlike most TS features, enums are not a type-level add to JS, but somethig added to the language runtime.


- They start at 0 by default, but we can change that by setting the first value to something else


# Lesson 4

## Type Aliases

- Type aliases allow us to create a new name for a type, they are similar to interfaces but they can name primitives, unions, tuples and any other types that you'd otherwise have to write by hand

```
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name: string;
    active?: boolean;
    albums: (string | number)[];
}

type UserId = stringOrNumber
```

## Literal Types

- Literal types allow us to specify the exact value a string, number or boolean must have

```
let myName: 'Gui'
myName = 'John' // error
```

- We can use literal types to create a set of valid values

``` 
type validNumbers = 1 | 2 | 3 | 4 | 5;
let number: validNumbers = 3;
```

## Optional parameters

- We can use '?' to make a parameter optional

- Optional parameters must be at the end of the parameter list

```
const add = (a: number, b?: number) => {
    if (b) {
        return a + b;
    } else {
        return a;
    }
}
```

## Default parameters

- We can use '=' to set a default value for a parameter

- Default parameters must be at the end of the parameter list

```
const add = (a: number, b: number = 10) => {
    return a + b;
}
```

- If a parameter has a default value and is not at the end of the list, we have to use 'undefined' to skip it

```
const add = (a: number = 10, b: number) => {
    return a + b;
}

add(undefined, 20);
```

## Rest parameterss

- We can use '...' to set a rest parameter, it will be an array of the rest of the parameters

```
const add = (a: number, b: number, ...rest: number[]) => {
    return a + b;
}
```

- Rest parameters must be at the end of the parameter list

- The rest parameter must be the last parameter, and it collects all the remaining arguments into an array

- If we want to use a rest parameter but we don't want to pass any arguments, we can use '[]'

```
const add = (a: number, b: number, ...rest: number[]) => {
    return a + b;
}

add(1, 2);
```




















