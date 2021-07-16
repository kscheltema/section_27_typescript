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

let person: { // no type implies any typ
  name: string;
  age: number;
}; //this is however how an object type is correctly defined 

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