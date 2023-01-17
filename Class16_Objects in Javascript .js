//Objects

let obj={name:"Cipher"}
//console.log(obj);

let person={
    name:"John",
    email:"john@wick.com",
    age:45,
    status:true,
    children:{
        name:'jay'
    },
    hobbies:['Reading','Writing',true, 100, null] //Array
}

let clickedName= "name";

console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(typeof person.name);
console.log(person.status);
console.log(person['age']); // ==person.age
console.log(person['children']);

console.log(person[clickedName]); // !== person.clickedName


person.country = 'India'
person[country] = 'India' //Same with above line
console.log(person);
console.log(year);
let year = 2020

console.log(typeof person.hobbies);
console.log(typeof null);

/**Primitive Datatypes
 * Number
 * String
 * Boolean
 * Undefined
 */

/**Reference Datatypes
 * Objects
 * Arrays
 * Functions
 */

//Stack Memory [Pass by value]
//Heap Memory [Pass by reference]
