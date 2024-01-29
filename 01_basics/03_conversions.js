let age = undefined;

let convertedValue = Number(age);
console.log(typeof(convertedValue));
console.log(convertedValue);

// string to number will result in NaN => not a number
// null to number will result in 0
// undefied to number will result in NaN
// true => 1 false => 0

let isLoggedIn = 0;

let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);

// 0 => false 1 => true

// *********************** OPERATIONS *********************** 

console.log("1" + 2 + 2); // agr phle string h to sara as a string treat hoga
console.log(1 + 2 + "2"); // agr phle number then sara as a number treat hoga