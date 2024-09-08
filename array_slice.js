const number=[1,2,3,4,5];
const numbers=number.slice(1,4) //new Array
// 1=starting index and 4 =ending index

const number1=number.slice()
const number2=number.slice(-4) //-ve
const number3=number.slice(1)  //+ve
// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.
console.log(number);
console.log(numbers);
console.log(number1);
console.log(number2);
console.log(number3);



const participants=['vijay','roshan','ravanth','charan','jai']
const winners=participants.slice(0,3)
console.log(winners);
