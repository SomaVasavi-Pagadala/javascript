const number=[1,2,3,4,5,6];
const even=number.filter(value=>value%2==0);
console.log(even);
//[ 2, 4, 6 ]

const number1=[1,2,3,4,5,6];
const odd=number.filter(value=>value%2==1);
console.log(odd);
//[1,3,5]
  
const ages = [32, 33, 16, 40];
const result = ages.filter(age=>age>=18);//creat new array

console.log(result);//[ 32, 33, 40 ]

const b=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const res1=b.filter(value=>
{
    if (value%3==0) {
        return true;
    }
    else{
        return false;
    } 
})
console.log(res1);//[ 3, 6, 9, 12, 15 ]


// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.