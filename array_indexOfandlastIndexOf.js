// const names=['jai','ravi','teja','gopi','kumar','sai'];

// console.log(names.indexOf('teja'));//2

 

const name=['jai','ravi','teja','gopi','kumar','sai'];
const newarr=creat=>name.indexOf(creat)>-1;
console.log(newarr('vijay')?'yey we have vijay':'sad....');
//n1 is a arrow functionand creat is a parameter
//name.indexOf(creat)>-1 check if the creat is present in the nameof the array


const name1=['jai','ravi','teja','gopi','kumar','sai'];
const newarray=item=>name.indexOf(item)>-1;//item=parameter
console.log(newarray('gopi')?'yey we have gopi':'sad...');






// const name1=['jai','ravi','teja','gopi','kumar','sai'];
// const index=name1.indexOf('gopi')
// console.log(index);//3
// if(index > -1){
//     console.log('yey we have gopi');//yey we have gopi
    
// }else{
//    console.log('sad....');
   
// }


// The indexOf() method returns the first index (position) of a specified value.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).

// By default the search starts at the first element and ends at the last.

// Negative start values counts from the last element (but still searches from left to right).






//2 names are same
const name2=['jai','ravi','teja','gopi','kumar','sai','ravi'];
const index1=name2.lastIndexOf('ravi')
console.log(index1);//6 it can provide last index of the item

// The lastIndexOf() method returns the last index (position) of a specified value.

// The lastIndexOf() method returns -1 if the value is not found.

// The lastIndexOf() starts at a specified index and searches from right to left (from the given postion to the beginning of the array).

// By defalt the search starts at the last element and ends at the first.

// Negative start values counts from the last element (but still searches from right to left).

