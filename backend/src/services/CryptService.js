const bcrypt = require('bcryptjs');

class CryptService {
  hashPassword(password) {
    return bcrypt.hash(password, 8);
  }

  matchPassword(user, password) {
    return bcrypt.compare(password, user.password);
  }
}

module.exports = new CryptService();
