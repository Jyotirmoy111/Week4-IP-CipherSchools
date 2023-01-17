//Strings
console.log(typeof "Hello")
console.log(typeof "It's raining!")

let word="raining"; //String.prototype
console.log(word.toUpperCase());

let number=10;
console.log(number.toUpperCase());

let String=200234434; //JS not take "string" as it is a datatype but it takes "String"
console.log(String);

console.log("Hello and Good Evening".length)
console.log("Hello".charAt(4))

//Boolean (True,False)
console.log(typeof 1);
console.log(typeof true);
console.log(typeof false);
console.log(typeof isNaN('five'));

if(1){
    console.log("Very true!")
}else{
    console.log("Very wrong!")
}

if("Hello"){
    console.log("Very true!")
}else{
    console.log("Very wrong!")
}

//Truthy Values: any value except 0 and false
//Falsy Values: 0 false '' NaN undefined null
if(0){
    console.log("Very true!")
}else{
    console.log("Very wrong!")
}

let condition=10/'hello'
if(condition){
    console.log("Very true!")
}else{
    console.log("Very wrong!")
}

console.log("hello".includes('e'));

//Null Undefined
let score;
let result=null;

if(score){
    console.log("Very true!")
}else{
    console.log("Very wrong!")
}
console.log(typeof score);
console.log(typeof result);