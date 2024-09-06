        //  const numbers=[1,2,3,4,5];
        //  numbers.map(double)   
        //   //map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
        //     //A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.Calls a defined callback function on each element of an array, and returns an array that contains the results.
        
        
        
        //     function double(value,index,arr) {
        //         return value*2;
        //     }
        //     console.log(numbers);
        //map() does not change the original array.

           //numbers double 
// const numbers=[1,2,3,4,5];
// const numbersDouble=numbers.map(double);//create new array
// function double(value,index,arr) {
//     return value*2;

// }
// console.log(numbersDouble);


//multiply value by index
  

// const numbers=[1,2,3,4,5];
// const numbersDouble=numbers.map(multiply);//create new array
// function multiply(value,index,array) {
//     return value*index;
// }
// console.log(numbersDouble);
// //(0*1=0,1*2=2,2*3=6,3*4=12,4*5=20) 0 means index


let products=[
    {
        name:'pc',   //object
        price:1000,
        const:5
    },
    {
        name: 'desktop',
        price:1500,
        const:2

    },
    {
        name:'notepad',
        price:500,
        const:10
    }
];
const productsvalue=products.map(item =>item.price*item.const);
console.log(productsvalue);//total products
//item =(pc,desltop,notepad)
                        //or
const productsvalue1=products.map(item => ({
    name: item.name,
    totalvalue:item.price*item.const}));
console.log(productsvalue1);

//string convert number

const string=['1','2','3','4','5'];
// const number=string.map(item =>number(item));
const number=string.map(Number);
console.log(number);
