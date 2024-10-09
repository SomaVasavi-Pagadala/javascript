// In JavaScript, the textual data is stored as strings. There is no separate type for a single character.

// The internal format for strings is always UTF-16, it is not tied to the page encoding.
// Let’s recall the kinds of quotes.

// Strings can be enclosed within either single quotes, double quotes or backticks:

//\n	New line
let str1 = "Hello\nWorld"; // two lines using a "newline symbol"
console.log(str1);

// two lines using a normal newline and backticks
let str2 = `Hello
World`;
console.log(str2);

console.log(str1 == str2); // true

let str = 'Widget with id';
let str3=str.indexOf('id',2);
console.log(str3);
// 12

let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';
console.log(carName1);
console.log(carName2);


let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
console.log(answer1);
console.log(answer2);
console.log(answer3);













