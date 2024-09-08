const number=[1,2,3,4,5];
//number.splice(2,3);// last 3items  remove 
console.log(number);
const deleted= number.splice(2,3)
console.log(deleted); //deleted Element show
// const deleted3=number.splice()
// console.log(number);
// console.log(deleted3);
// const deleted2=number.splice(2,3,6,7);//6,7 new item
// console.log(number);
 const deleted1=number.splice(2,0,6,7,10,100)
console.log(number);
 console.log(deleted1);
//moving or replace
// the splice() method adds and/or removes array elements.
// the splice() method overwrites the original array.