// const number =[1,2,3,4,5]
// number.fill(0);//all item is zero
// console.log(number);

// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.
   

const number =[1,2,3,4,5]
const num2=number.fill(0);
console.log(number);
console.log(num2);

const numbers=[1,2,3,4,5];
numbers.fill(0,1,4); //1to4 index will be change
console.log(numbers);


function fillInNumbers(n){//n =length 
    return Array(n).fill(0).map((_,index)=>index+1);//looping value
    //_callback secondvalue index
    //default indext start with 0
}
console.log(fillInNumbers(10));//10 example
