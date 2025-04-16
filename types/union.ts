// "Union" types

/*A union type allows a variable to hold multiple types. It’s defined by using the | (pipe) operator to combine two or more types. This allows the variable to accept any of the specified types. */

// Union type example
let id: string | number;

id = 123; // Okay
console.log(id); // 123

id = "ABC123"; // Okay
console.log(id); // "ABC123"

id = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
