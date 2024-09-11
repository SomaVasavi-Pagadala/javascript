const num=[1,2,3,4,5];
const res=num.every(positive)
function positive(item) {
    return item>0;
}
console.log(res);//true


const ages=[19,2,22,14,66,43];
const result=ages.every(checkage)
function checkage(age) {
    return age>18;
}
console.log(result);//false


const person=[
{
    name:'ravi'
},
{
    name:'praveen'
},
{
    name:'ram'
},
{
    name:'jai'
}
];
const res1=person.every(person=>person.name!=undefined);
console.log(res1);//true

 const arrays=[[1,2,3],[4,5,6],[7,8,9]];
 const res2=arrays.every(arrays=>Array.isArray(arrays));
 console.log(res2);//true

 const array=[[1,2,3],[4,5,6],[7,8,9],1233];
 const res3=array.every(array=>Array.isArray(array));
 console.log(res3);//false
 

// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array