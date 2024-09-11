const number=[1,2,3];
number.unshift(0);//push0
number.unshift(-1);
console.log(number);//[-1,0,1,2,3]

 
const number1=[1,2,3];
number1.unshift(7);//push 7 and beginning of the array
console.log(number1);//[7,1,2,3]

const number2=[1,2,3];
number2.unshift(0,-1);//by using push method multiple parameters
console.log(number2);//[0,-1,1,2,3]last one as you can see on the right it adds -1 and then o


const number3=[1,2,3];
const totallength=number3.unshift(0,-1);
console.log(totallength);//5length


// The unshift() method adds new elements to the beginning of an array.

// The unshift() method overwrites the original array.