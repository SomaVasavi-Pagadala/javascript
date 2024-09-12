const num=[1,2,3];
const doublenumbers=num.map((num)=>num*2);
console.log(doublenumbers);//[ 2, 4, 6 ]


//the map() method is used when you want to modify each element of an array and create a new array with the modified values



//forEach()
const num1=[1,2,3];
const res=num1.forEach((num1)=>console.log(num1*2));
// 2
// 4
// 6


//the forEach()method is used when you want to perform some operation on each element of an array without creating a new array