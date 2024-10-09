//The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).
//Object.hasOwn() is recommended over hasOwnProperty(), in browsers where it is supported.

/*const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false


const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
console.log(fruits.hasOwnProperty(3));// true ('Orange')
console.log(fruits.hasOwnProperty(4));// false - not defined*/

const example = {};
console.log(example.hasOwnProperty("prop")); // false


example.prop = "exists";
console.log(example.hasOwnProperty("prop")); // true - 'prop' has been defined


example.prop = null;
console.log(example.hasOwnProperty("prop")); // true - own property exists with value of null

example.prop = undefined;
console.log(example.hasOwnProperty("prop")); // true - own property exists with value of undefined
