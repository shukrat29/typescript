// "any" type

/* In TypeScript, "any" is a special type that allows a variable to hold any kind of value, bypassing TypeScript's strict type-checking system. When you use any, you're essentially telling TypeScript, "I don't care about the type of this variable." */

// Defining a variable with 'any' type
let unknownValue: any;

// Assigning various types of values to 'unknownValue'
unknownValue = 42; // Number
console.log(unknownValue); // 42

unknownValue = "Hello"; // String
console.log(unknownValue); // "Hello"

unknownValue = true; // Boolean
console.log(unknownValue); // true

unknownValue = { name: "Shukra", age: 25 }; // Object
console.log(unknownValue); // { name: "Shukra", age: 25 }

unknownValue = [1, 2, 3]; // Array
console.log(unknownValue); // [1, 2, 3]
