// const number =[1,2,3,4,5]
// number.fill(0);//all item is zero
// console.log(number);//[0,0,0,0,0]


// const number =[1,2,3,4,5]
// number.fill(1);//all item is one
// console.log(number);//[1,1,1,1,1]
 
// const number=[1,2,3,4,5];
// const fill1=number.map(()=>1);
// console.log(fill1);//[1,1,1,1,1]



// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.
   

const number =[1,2,3,4,5]
const num2=number.fill(0);
console.log(number);//[0,0,0,0,0]
console.log(num2);//[0,0,0,0,0]

// const numbers=[1,2,3,4,5];
// numbers.fill(0,1,4); //1to4 index will be change
// console.log(numbers);[1,0,0,0,5]


// function fillInNumbers(n){//n =length 
//     return Array(n).fill(0).map((_,index)=>index+1);//looping value
//     //_callback secondvalue index
//     //default indext start with 0
// }
// console.log(fillInNumbers(10));//10 example
// [1,2,3,4,5,6,7,8,9,10]



const fillInNumbers = n => Array(n).fill(0).map((_, index) => index + 1);
//n parameters,Array(n).fill(0)=array of the length n and filled with zero
//_parameter,index =index of the current element,index +1 means 1 to n items
console.log(fillInNumbers(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
