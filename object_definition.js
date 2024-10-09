// Methods for Defining JavaScript Objects
// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor
// Using Object.assign()
// Using Object.create()
// Using Object.fromEntries()

// Create an empty Object
/*const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

// Display Data from Object
console.log(person.firstName,person.age);*/


// Create an Object
/*const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

// Diplay Object Content
console.log(person.firstName,person.eyeColor);*/

// The examples above do exactly the same.

// But, there is no need to use new Object().

// For readability, simplicity and execution speed, use the object literal method.

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
console.log(myFather.age);*/

//JavaScript Object Methods can be grouped into:

//1. General Methods
//2.Property Management Methods
//3.Object Protection Methods
/*a = [10, 12, 11, 12];
console.log(typeof a);
for (const i of a.entries()) {
  console.log(i);
} 

const a = new Object(undefined);
console.log(typeof a);
console.log(a);*/


/*let target = {
  name: "",
  age: 0,
};

let source1 = {
  name: "sainadth",
  age: 25,
};

let source2 = {
  name: "vasavi",
  age: 27,
};

target = Object.assign(target, source2);
console.log(target);

target = Object.assign(target, source2, source1);
console.log(target);
{ name: 'vasavi', age: 27 }
{ name: 'sainadth', age: 25 }*/

//The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
/*const person = {
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
My name is undefined. Am I human? false
My name is sainadth. Am I human? true
*/

//Unlike Array.from(), Object.fromEntries() does not use the value of this, 
//so calling it on another constructor does not create objects of that type.
//The Object.fromEntries() static method transforms a list of key-value pairs into an object.
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);//{ foo: 'bar', baz: 42 }
//general method()
//object assign()
//the object.assign()static method copies all enumerable own properties from one or more source object to a target object.it returns the modified target object.
/*const target={
  a:1,
  b:2
};
const source={
  b:4,
  c:5
}
const return1 = Object.assign(target,source);
console.log(target);
console.log(return1===target);*/
/*//object.create()
//the Object.create() static method creates a new object ,using an existing object as the prototype of the newly created object.
const person={
  ishuman: false,
  print:function () {
    console.log(`my name is ${this.name}.am i humam ? ${this.ishuman}`);
  }
}
const me =Object.create(person);
me.name="soma";
me.ishuman=true;
me.print();*/
/*//Object.entries()
//The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
const demo={
  a:"somavasavee",
  b:22
}
for(const [key,value] of Object.entries(demo)){
  console.log(`${key}:${value}`);
  
}*/
/*//Object.fromEntries()
//the object.fromEntries() static method transforms list of key_values pairs into an object
const entrie=new Map([
  ['foo','bar'],
  ['baz',23]
])
const test=Object.fromEntries(entrie);
console.log(test);*/
/*//Object.keys()
//the Object.keys() static method returns an array of a given object own enumerable string-keyed property names.
const object={
  a:'somavasavi',
  b:42,
  c:false,
}
console.log(Object.keys(object));//[ 'a', 'b', 'c' ]*/
//object.values()
//The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
/*const object={
  a:"somavasavi",
  b:22,
  c:true,
}
console.log(Object.values(object));//[ 'somavasavi', 22, true ]*/
//object.groupBy()
/*const inventory = [
  { 
    name: "asparagus",
    type: "vegetables",
    quantity: 5
  },
  { 
    name: "bananas",
    type: "fruit", 
    quantity: 0 
  },
  { 
    name: "goat",
    type: "meat",  
    quantity: 23 
  },
  {
     name: "cherries", 
     type: "fruit", 
     quantity: 5
  },
  { 
    name: "fish", 
    type: "meat", 
    quantity: 22
  },
];
function myCallback({quantity}) {
  return quantity > 5 ? "ok":"restock";
}
const test =Object.groupBy(inventory, myCallback);
console.log(test);*/


/*//object.defindproperty()
//The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
const object1={}
Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
});

object1.property1 = 77;
console.log(object1.property1);//42*/
/*//Object.defineProperties()
//The Object.defineProperties() static method defines new or modifies existing properties directly on an object, returning the object.
const object1 = {};
Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {
    value:33,
    writable:false
  },
});

console.log(object1.property1);//42
console.log(object1.property2);//33*/
//Object.getOwnPropertyDescriptor()
//The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain). The object returned is mutable but mutating it has no effect on the original property's configuration.
/*const object1 = {
  property1: 32,
};
const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
console.log(descriptor1.configurable);//true
console.log(descriptor1.value);//32
//Object.getOwmPropertyDescriptors
//the object.getOwnpropertyDescriptors() static method returns an object
const object={
  property:45,
}
const descriptor=Object.getOwnPropertyDescriptors(object);
console.log(descriptor.property.writable);//true
console.log(descriptor.property.value);//45*/
//Object.getOwnPropertyNames
const object={
  a:1,
  b:2,
  c:3
}
console.log(Object.getOwnPropertyNames(object));//[ 'a', 'b', 'c' ]
//Object.grtOwnPropertyOf
const property1={}
const Object1=Object.create(property1);
console.log(Object.getPrototypeOf(Object1 === property1));






