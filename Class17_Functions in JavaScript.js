//ES5 - Functionally scope (var)
//es6 - block scoped (let const)

var abc=10;

//Scoping
function testing(){
    var abc=20;
    //let xyz='block scoped';
    console.log(abc);
    //Block scoping
    if(1){
        var xyz='block scoped'
        console.log('Inside If',xyz);
        console.log(abc);
    }
    console.log('Outside If',xyz);
    console.log(abc);
}

testing(); //Calling a function
console.log(abc);


//**


*/


