//JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
let x = BigInt(999999999999999);
let type = typeof x;
console.log(type);//bigint
let y=123n;
console.log(typeof y);//bigint


let z;
console.log(typeof 234n);//bigint



let x1 = 9007199254740995n;
let y1= 9007199254740995n;
let z1 = x1 * y1;
console.log(z1);//81129638414606735738984533590025n

//Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).

//Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).

// let a= 5n;
// let b = a / 2;
// console.log(b);
// Error: Cannot mix BigInt and other types, use explicit conversion.

let c = 5n;
let d = Number(c) / 2;
console.log(d);//2.5
