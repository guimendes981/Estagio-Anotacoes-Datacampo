let myName: string 
let meaningOfLife: number
let isLoading: boolean
let album: string | number | boolean // union type

meaningOfLife = 42
isLoading = true
myName = 'John Doe'
album = true

const sum = (a: number, b: string) => {
    return a + b
} // receive a type and return a type


let postId: string | number
let isActiv: number | boolean 
