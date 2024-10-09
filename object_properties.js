//Properties are the most important part of JavaScript objects.

//Properties can be changed, added, deleted, and some are read only.
//The syntax for accessing the property of an object is:

// // objectName.property
// let age = person.age;
//or
// //objectName["property"]
// let age = person["age"];

//or
// //objectName[expression]
// let age = person[x];

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     age      :  50
//   };
  
//   let x = "firstName";
//   let y = "age";
// console.log(person[x],person[y]);//John 50

// //New Properties
// person.nationality = "English";
// console.log(person["nationality"]);

//Deleting Properties
//The delete keyword deletes a property from an object

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   delete person.age;
//   console.log(person);
  
//or
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  delete person["age"];
  console.log(person);
  //The delete keyword deletes both the value of the property and the property itself.

//After deletion, the property cannot be used before it is added back again.

//Nested Objects
//Property values in an object can be other objects:
myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  console.log(myObj.myCars.car2);
  console.log(myObj["myCars"][" "]);
  
  