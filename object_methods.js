//Object methods are actions that can be performed on objects.

//A method is a function definition   stored as a property value.

/*const person={
    firstName:"soma",
    lastName:"pagadala",
    age:27,
    printperson:function () {
       
        return (this.firstName+this.lastName).toUpperCase();
    }
}
console.log(person.printperson());*/     

//toUpperCase() method to convert a text to uppercase

// person.name = function () {
//     return (this.firstName + " " + this.lastName).toUpperCase();
// };

//You access an object method with the following syntax:
//objectName.methodName()


//Adding a new method to an object is easy:


const name={
    firstName:"sai",
    lastName:"pagadala",
    age:25,
    id:106,
}
// Add a Method
myname= function() {
    return this.firstName + " " + this.lastName;
  };

console.log(myname());
  