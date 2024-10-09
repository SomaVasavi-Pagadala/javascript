function add(a, b) {
    return a + b;
  }
  let sai = {
    name: "sainadth",
    age: 25,
  };
  console.log(typeof 1);//number
  console.log(typeof 1n);//bigint
  console.log(typeof true);//boolean
  console.log(typeof "afsdf");//string
  console.log(typeof Symbol("afsadf"));//symbol
  console.log(typeof undefined);//undefined
  console.log(typeof null);//object
  console.log(typeof add);//function
  console.log(typeof sai);//object
  //A primitive data type is data that has a primitive value.

//JavaScript defines 7 types of primitive data types:


//Create an Object
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  // Create a copy
  const x = person;
  
  // Change Age in both
  x.age = 10;
  console.log(x);//10
  console.log(person.age);//10
  