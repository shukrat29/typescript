// Assigning Types to function parameters
const createUser = (name: string, age: number, isAdmin: boolean): string => {
  return `${name} is ${age} years old and ${
    isAdmin ? "an admin" : "not an admin"
  }`;
};

const message = createUser("Shukra", 25, true);
console.log(message);
