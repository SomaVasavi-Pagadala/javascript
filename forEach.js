const number3=[1,2,3,4,5];
number3.forEach(consoleItem);
function consoleItem(item,index,arr){
    console.log('a['+index+']='+item);  
     // a[0]=1
    // a[1]=2
    // a[2]=3
    // a[3]=4
    // a[4]=5
}
//or
const number=[1,2,3,4,5];
number.forEach((item,index,arr)=>{
    console.log('a['+index+']='+item);
    // a[0]=1
    // a[1]=2
    // a[2]=3
    // a[3]=4
    // a[4]=5
    
});
//or  
const number1=[1,2,3,4,5]
number1.forEach((item,index,arr)=> {
    console.log(arr);   
    // [ 1, 2, 3, 4, 5 ]
    // [ 1, 2, 3, 4, 5 ]
    // [ 1, 2, 3, 4, 5 ]
    // [ 1, 2, 3, 4, 5 ]
    // [ 1, 2, 3, 4, 5 ]
    
});
//The forEach() method calls a function for each element in an array.

//The forEach() method is not executed for empty elements.
let sum = 0;
const number2 = [3,6,8,9, 4];
number2.forEach(fn);

function fn(item) {
  sum =sum+ item;
}
console.log(sum);//30



let product=1;
const numbers = [2,4,7,9];
numbers.forEach(fn1)

function fn1(item, index, arr) {
  product = item * 10;
}
console.log(product);//90
