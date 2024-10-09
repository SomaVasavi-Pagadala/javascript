//// Create an Object
/*const person = {
    name: "ram",
    age: 30,
    city: "New York"
  };

// Display Object
console.log(person);*/
// Some solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()


//The properties of an object can be displayed as a string
// Create an Object
/*const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Display Properties
  console.log(person.name + "," + person.age + "," + person.city);*/

  
  //The properties of an object can be collected in a loop
  /*const person = {
    name: "vijay",
    age: 30,
    city: "texus"
  };
  
  // Build a Text
  let text = "";
  for (let x in person) {
    text =text+ person[x] + "s";
  };
  
  // Display the Text
console.log(text);*/

// You must use person[x] in the loop.

// person.x will not work (Because x is the loop variable).
  
//objrct.values()creates an array from the property values

/*const person={
    name:'ravi',
    age:33,
    city:'austin'
}
//creat an array
const myArray=Object.values(person)
//display array*/
  

//Object.entries() makes it simple to use objects in loops

/*const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {//[fruit,value]means [keys,values]
  text =text+ fruit + ": " + value +"<br>";
}

console.log(text);*/


// JavaScript objects can be converted to a string with JSON method JSON.stringify().

// JSON.stringify() is included in JavaScript and supported in all major browsers.

// Create an Object
const person = {
    name: "ram",
    age: 20,
    city: "New York"
  };
  
  // Stringify Object
  let myString = JSON.stringify(person);
  
  // Display String
  console.log( myString);
  