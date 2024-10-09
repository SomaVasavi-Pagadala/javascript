const number=[1,2,3,4,5];
const res=number.findIndex(value=>value===3);
console.log(res);//2 index

const ages=[2,29,31,18];
const res1=ages.findIndex(age=>age>18);
console.log(res1);//1 index



// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

// The findIndex() method does not execute the function for empty array elements.

// The findIndex() method does not change the original array.