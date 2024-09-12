const number=[1,2,3,4,5];
number.reverse();
console.log(number);//[5,4,3,2,1]

// Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

const numbers=[1,2,3,4,5];
const newarr=numbers.concat().reverse();//creat new array and shallow copy of this array using concat()
// the Array concat method allows you to merge two are more arrays into one new array
console.log(numbers);//[1,2,3,4,5]
console.log(newarr);//[5,4,3,2,1]



const number1=[1,2,3,4,5];
const newarray=[...number1].reverse();//...(spread operator  )
console.log(number1);//[1,2,3,4,5]
console.log(newarray);//[5,4,3,2,1]


const str= 'coding is fun!';
const res=str.split('').reverse().join(''); //reversed     
// An object that can split a string.
//Split a string into substrings using the specified separator and return them as an array.
console.log(res);//!nuf si gnidoc


// The reverse() method reverses the order of the elements in an array.

// The reverse() method overwrites the original array.