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
        - Union types are not restricted to only two types, we can have as many as we want



