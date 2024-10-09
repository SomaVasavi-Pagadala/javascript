// Object Constructor Functions
// Sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.

// It is considered good practice to name constructor functions with an upper-case first letter.
// Constructor Function for Person objects
/*function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
 // Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");

// Display age
console.log(myFather.age);//50*/

// In the constructor function, this has no value.

// The value of this will become the new object when a new object is created.

// The JavaScript this Tutorial

// Constructor function for Person objects
/*function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create two Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Display age
  console.log(myFather.age,myMother.lastName);*/

//A value given to a property will be a default value for all objects created by the constructor
// Constructor function for Person objects
/*function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
  }
  
  // Create 2 Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Display nationality

console.log(myFather.nationality,myMother.nationality);*/
  // Constructor function for Person Objects
/*function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person Objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Add a new Property
  Person.prototype.nationality = "English";
  
  // Display new Property
  console.log(Person.prototype.nationality);*/
//   Use object literals {} instead of new Object().

// Use array literals [] instead of new Array().

// Use pattern literals /()/ instead of new RegExp().

// Use function expressions () {} instead of new Function().

//The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

//A constructor function can also have methods
/*function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function() {
      return this.firstName + " " + this.lastName
    };
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  
  // Display full name
  console.log(myFather.fullName());*/

  // Constructor function for Person Objects
/*function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Add a Name Method
  myMother.changeName = function (name) {
    this.lastName = name;
  }
  
  // Change Name
  myMother.changeName("Doe");
  
  // Display fullName
  console.log(myMother.lastName);*/
  
  //The new method will be added to myMother. Not to any other Person Objects.