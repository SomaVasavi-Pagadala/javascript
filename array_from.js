// const string='1234567';
// const res=Array.from(string);
// console.log(res);
// //['1', '2', '3', '4', '5', '6','7']

// const str='12345678';
// const res1=Array.from(str,Number);//Numberconstructor
// console.log(res1);
// //[ 1, 2, 3, 4, 5, 6, 7, 8]

// // The Array.from() method returns an array from any object with a length property.

// // The Array.from() method returns an array from any iterable object.


// let text = "ABCDEFG"
// const myArr = Array.from(text);
// console.log(myArr);
// //['A', 'B', 'C', 'D', 'E', 'F', 'G']

// const num=[1,2,3,2,5,3,6,4,6,7,8,3,9];
// const res2=Array.from(new Set(num));
// console.log(res2);
// //Set(9) { 1, 2, 3, 5, 6, 4, 7, 8, 9 }

const friends=['ravi','abhi','naveen','kumar','jai','abhi'];
const res3= Array.from(new Set(friends));
console.log(res3);
//[ 'ravi', 'abhi', 'naveen', 'kumar', 'jai' ]