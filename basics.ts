//primitives: number, boolean, string
//more complex: arrays, objects
//function types & parameters

//primitives
let age: number = 12; //'12' would give an error - Number would give an error
let userName: string = 'Max';
let isInstructor: boolean;

isInstructor = true;

//more complex types
let hobbies: string[]; //an array of strings
hobbies: ['sports','cooking']; //here a number would threw an error

//type alias
//complex types defined for use in variables
type Person = { //type definition with - type alias
  name: string;
  age: number;
};

let person: Person; //the alias is defined once and can then be repeated multiple times

person = {
  name: 'Max',
  age: 32,
}

// //type inference 
// let course = 'React Complete Guide';
// course = 123456; //error TS will immediately assume a type based on the value

//union types
let course: string | number = 'React Complete Guide';
course = 123456; //no error because multiple types was declared

