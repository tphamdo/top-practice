// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  queryUsers(query) {
    return Object.values(this.storage).filter((user) => {
      const name = user.firstName + ' ' + user.lastName;
      return name.toLowerCase().includes(query.toLowerCase());
    });
  }
}

// singleton instance of the class instantiated with default users
const usersStorage = new UsersStorage();
users = [
  {
    firstName: 'Trueman',
    lastName: 'Phamdo',
    email: 'trueman@phamdo.com',
    age: 24,
    bio: 'The greatest most humble man to grace the planet',
  },
  {
    firstName: 'Jayden',
    lastName: 'Daniels',
    email: 'jd5@gmail.com',
    age: 24,
    bio: 'The savior',
  },
  {
    firstName: 'Joe',
    lastName: 'Schmo',
    email: 'joeyschmo@gmail.com',
    age: 26,
    bio: 'Sly boy with a big heart',
  },
];
users.forEach((user) => usersStorage.addUser(user));

module.exports = usersStorage;
