const ages=[34,44,9,23,18,20];
const res=ages.some(age=>age>18);
console.log(res);//true
  


const num=[1,2,3,4];
const res1=num.some(item=>item>4);
console.log(res1);//false




// The some() method checks if any array elements pass a test (provided as a callback function).

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.