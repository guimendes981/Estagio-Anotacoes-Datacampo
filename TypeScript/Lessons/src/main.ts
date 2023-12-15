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

