//Object Literal
//An object literal is a list of name:value pairs inside curly braces {}.
//name:value pairs are also called key:value pairs.

//object literals are also called object initializers.


// Create an Object
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// console.log(person.age);
// console.log(person.firstName);
//or
// Create an Object  
// const person = {
//     firstName: "John",
//     lastName: "Doe", 
//     age: 50,
//     eyeColor: "blue"
//   };
//   console.log(person.lastName);
//   console.log(person.eyeColor);
  
  // Create an Object
// const person = {};

// // Add Properties 
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person.age);

//new object
// const person = new Object();

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person.lastName);


//You can access object properties in two ways:
//objectName.propertyName
//objectName["propertyName"]


//this

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const sai = Object.create(person);
  
  sai.printIntroduction();
  sai.isHuman = true;
  sai.name = "sainadth";
  
  sai.printIntroduction();
  //this refers to the person object
  //this.name means the name property of person
  //this.isHuman means the is human property of person
   
      