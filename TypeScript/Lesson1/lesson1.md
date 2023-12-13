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



