const number=[1,2,3,4,5];
const total=number.reduce(sum,0)//callbaack,initialvalue
function sum(accumulator,value) {   //sum=callback


return accumulator+value; //accumulator=parameter value is 0
}
console.log(total);
//0+1=1,1+2=3,3+3=6,6+4=10,10+5=15

//  const numbers=[1,2,3,4,5,6,7]
// const total1=numbers.reduce(sum,0)
// function sum(accumulator,value) {  


//     return accumulator+value; 
//     }
//     console.log(total1);


const numbers=[1,2,3,4,5,6,7]
const total1=numbers.reduce(sum)
function sum(accumulator,value) {  


    return accumulator+value; 
    }
    console.log(total1);