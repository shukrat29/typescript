interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

let user: Authenticatable;

user = {
  email: "test@example.com",
  password: "abc123",
  login() {
    // reach out to database
  },
  logout() {
    // clear the session
  },
};
