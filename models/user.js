const users = []; // Temporary storage (we'll use a database later)

class User {
  constructor(id, name, email, password, role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role; // "supplier" or "seller"
  }
}

module.exports = { User, users };
