//  Array of Numbers
let numbers: number[] = [1, 2, 3, 4];
numbers.push(5); // Okay
numbers.push("string"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Array of Strings
let fruits: string[] = ["apple", "banana", "cherry"];
fruits.push("orange"); // Okay
fruits.push(10); // Error: Argument of type '10' is not assignable to parameter of type 'string'.

// Advanced Array Types
let users: Array<string | number>;

users = [1, "Max"];
users = [5, 3];
users = ["Max", "Shukra"];
