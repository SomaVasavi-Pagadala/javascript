const number=[1,2,3,4,5,6];
const even=number.filter(value=>value%2==0);
console.log(even);
//[ 2, 4, 6 ]
  
const ages = [32, 33, 16, 40];
const result = ages.filter(age=>age>=18);//creat new array

console.log(result);//[ 32, 33, 40 ]


// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.