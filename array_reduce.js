const number=[1,2,3,4,5];
const total=number.reduce((accumulator,value)=>accumulator+value,0)//accumulator 0 initial value
console.log(total);//15

//0+1=1,1+2=3,3+3=6,6+4=10,10+5=15

 const numbers=[1,2,3,4,5,6,7]
const total1=numbers.reduce((accumulator,value)=>accumulator+value,0);
    console.log(total1);//28




//  The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.