const array=[1,[2,[3,[4]]]];
const res=array.flat();
console.log(res);
//[ 1, 2, [ 3, [ 4 ] ] ]

const arr=[1,[2,[3,[4]]]];
const res1=arr.flat(3);
console.log(res1);//[ 1, 2, 3, 4 ]

const array1=[1,[2,[3,[4,[5]]]]];
const res2=array1.flat(3);
console.log(res2);//[ 1, 2, 3, 4, [ 5 ] ]  


const array2=[1,[2,[3,[4,[5]]]]];
const res3=array2.flat(Infinity);
console.log(res3);//[ 1, 2, 3, 4, 5 ] 