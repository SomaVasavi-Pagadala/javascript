//A JavaScript Boolean represents one of two values: true or false.

//You can use the Boolean() function to find out if an expression (or a variable) is true:
let x = 0;
console.log(Boolean(x));//false

let x1 = -0;
console.log(Boolean(x1));//false

let x2 = "";//string
console.log(Boolean(x2));//false

let x3 ;//undefined 
console.log(Boolean(x3));//false

let x4=null ;//null
console.log(Boolean(x4));//false

let x5=false ; 
console.log(Boolean(x5));//false

let a = false;
let b = new Boolean(false);
console.log(typeof a);//boolean
console.log(typeof b);//object
  
let c = new Boolean(false);
let d = new Boolean(false);
console.log(typeof c);//object
console.log(typeof d);//object

//Comparing two JavaScript objects always return false.

