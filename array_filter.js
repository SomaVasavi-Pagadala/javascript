// const number=[1,2,3,4,5,6];
// const even=number.filter(isEven)
// // A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.


// // Returns the elements of an array that meet the condition specified in a callback function.
// function isEven(value) {
//     return value%2==0;
// }
// console.log(even);
  
const ages = [32, 33, 16, 40];
const result = ages.filter(person);//creat new array

function person(age) {
  return age >= 18;
}
console.log(result);
