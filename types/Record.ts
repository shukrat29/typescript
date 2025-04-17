// Record is a utility type provided by TypeScript that helps you create an object type with a specific set of keys and values of a certain type.

// Record<Keys, Type>
//Keys → the set of property names (can be a union of strings or a specific type like string, number, etc.)

//Type → the type of the values

const userRoles: Record<string, string | number> = {
  shukra: "admin",
  id: 1,
  john: "editor",
  emma: "viewer",
};

// More Specific Keys
type Role = "admin" | "editor" | "viewer";

const permissions: Record<Role, boolean> = {
  admin: true,
  editor: true,
  viewer: false,
};

//  Nested Records
type User = "shukra" | "john";
type Status = "active" | "suspended";

const userStatus: Record<User, Record<Status, boolean>> = {
  shukra: {
    active: true,
    suspended: false,
  },
  john: {
    active: false,
    suspended: true,
  },
};
