const number=[1,2,3];
number.push(0);
console.log(number);//[1,2,3,4]

const number1=[1,2,3];
number1.push(4);//[1,2,3,4]
number1.push(5);
console.log(number1);//[1,2,3,4,5]


const number2=[1,2,3];
number2.push(4,5,6,7,8,9);
console.log(number2);//[1,2,3,4,5,6,7,8,9]


const number3=[1,2,3];
const total=number3.push(4,5,6,7,8,9);
console.log(total);//length of the array->9

// The push() method adds new items to the end of an array.

// The push() method changes the length of the array.

// The push() method returns the new length.