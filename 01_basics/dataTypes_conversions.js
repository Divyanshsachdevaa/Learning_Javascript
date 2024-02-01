// MAINLY TWO TYPES OF DATA TYPES ARE THERE IN JS:- PRIMITIVE & NON-PRIMITIVE

// PRIMITIVE - WHICH MAKE COPY
// int, string, char, null, undefined, BigInt, boolean

// NON-PRIMITIVE - WHICH PASS BY REFERNCE
// arrays, objects, functions

const collectionOfNumbers = [1, 2, 3, 4, 5];

// OBJECT STORES IN KEY VALUE PAIR
let myObj = {
    name : "Divyansh",
    age : 19,
    rollNo : 10,
}

const myFunc = function(){
    console.log("print, Hello world");
}

console.log(typeof(myObj));