const name=['ram','kumar','gopi','kirshna','sai'];
name.sort();
console.log(name);//[ 'gopi', 'kirshna', 'kumar', 'ram', 'sai' ]
//sort(comparefunction ->sort elemets in place)



const number=[22,44,66,34,54,76,87,24];
number.sort(compare);
console.log(number);
// [  22, 24, 34, 44,54, 66, 76, 87]



 function compare(a,b) {
//   <0....a comes first
//   0.... nothing will be changed
//   >0 ...b comes first
    return a-b;
 }


 const fruits=[{
    name:'apple',
    price: 20
 },
 {
    name:'mango',
    price:30
 },
 { 
    name:'banana',
    price:10
 }
];
fruits.sort((a,b)=>{
    return a.price-b.price;// first lowest price  start to big price
});
console.log(fruits);
// [
//    { name: 'banana', price: 10 },
//    { name: 'apple', price: 20 },
//    { name: 'mango', price: 30 }
//  ]
   


// The sort() method sorts the elements of an array.

// The sort() method sorts the elements as strings in alphabetical and ascending order.

// The sort() method overwrites the original array.


