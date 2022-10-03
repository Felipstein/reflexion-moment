const uuid = require('uuid-v4');

let { users } = require('../../mocks');

class UsersRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(users);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const user = users.find((userObj) => userObj.id === id);

      resolve(user);
    });
  }

  findByName(name) {
    return new Promise((resolve) => {
      const user = users.find((userObj) => userObj.name === name);

      resolve(user);
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      const user = users.find((userObj) => userObj.email === email);

      resolve(user);
    });
  }

  create({ name, email, password }) {
    return new Promise((resolve) => {
      const newUser = {
        id: uuid(), name, email, password,
      };

      users.push(newUser);

      resolve(newUser);
    });
  }

  update(id, { name, email, password }) {
    return new Promise((resolve) => {
      const newUser = {
        id, name, email, password,
      };

      users = users.map((user) => (user.id === id ? newUser : user));

      resolve(newUser);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      users = users.filter((user) => user.id !== id);

      resolve();
    });
  }
}

module.exports = new UsersRepository();
