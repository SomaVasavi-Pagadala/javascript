// const a=[1,2,3];
// const b=[4,5,6];

// const c=a.concat(b);
// console.log(c);//[1,2,3,4,5,6]

// the Array concat method allows you to merge two are more arrays into one new array
    const a1=[1,2,3];
const b1=[4,5,6];
const d1=[7,8,9];
//const c1=a1.concat(b1,d1);
//console.log(c1);//[1,2,3,4,5,6,7,8,9]
// console.log(a1);//[1,2,3]
// console.log(b1);//[4,5,6]
// console.log(d1);//[7,8,9]


//const c1=a1.concat();//[a1.concat  create a sgallow cpy of the array]

//console.log(c1);//[1,2,3]  

// c1.push(4);
// console.log(c1);//[1,2,3,4]
// console.log(a1);//[1,2,3]



// const c1=a1.concat(1,2);
// console.log(c1);//[1,2,3,1,2]

const c1=a1.concat(1,2,a1);
console.log(c1);//[1,2,3,1,2,1,2,3]



