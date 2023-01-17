//Agenda For the day:

//Introduction of JSON
//Datatypes
//Syntax and it's usage
//console an the browser
//Objects and arrays

//Datatypes

//Syntax and declatration
//var score=10; //ES5 - Ecma
//let result=50; //ES6 - Ecmascript 2015
//const PI = 3.14; //ES6
//
//score = 15;
//result=55;
//PI=3.26;
//
//console.log(score);
//console.log(result);
//console.log(PI);


/**
 * Datatypes
 * 1. Number
 * 2. Strings
 * 3. Boolean
 * 4. Null
 * 5. Undefined
 * 6. Objects
 * 7. Symbol (es6)
 * 
 * Loosely Typed
 */

let score=10; //Number
let result="10"; //String

console.log(score, result);

//BEDMAS (Bracket Exponent Division  Multiplication Addition Substraction)
let finalScore = score+result; //Concatenating happen with string
let penalty = score-result; //Mathematical
let totalGames = 5;
//let avgScore = finalScore/totalGames;
//
//console.log(finalScore, penalty);
//console.log(avgScore);
////typeof
//console.log(typeof finalScore);
//console.log(typeof penalty);
//console.log(typeof avgScore);

let value =(finalScore**2)*10/(penalty + totalGames)
console.log(value);
console.log(typeof value);  //Value= NaN (Not a number)