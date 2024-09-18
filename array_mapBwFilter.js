//difference between array of map() and array of filter()
const nums=[1,2,3,4,5];
const doublenumbers=nums.map((nums)=>nums*2);//by using callbackfunction
console.log(doublenumbers);//[ 2, 4, 6, 8, 10 ]
  
//by using map () is used to transform each Element of an Array into something else.
//it applies a function to each Element and creates anew Array of the same length with the modified Elements




//filter

 const evenNum=nums.filter((nums)=>nums%2==0);
 console.log(evenNum);//[ 2, 4 ]



 //similar to filter also does not modify the original  array which makes this a non-destructive added