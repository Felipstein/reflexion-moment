require('dotenv').config();
const express = require('express');
const cors = require('cors');

const UsersRepository = require('./repositories/UsersRepository');
const CryptService = require('./services/CryptService');
const route = require('./routes');

const app = express();
const port = 3333;
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(route);

// eslint-disable-next-line no-console
app.listen(port, async () => {
  console.log(`Server started at port ${port}`);

  const encryptedPassword1 = await CryptService.hashPassword('123');
  const encryptedPassword2 = await CryptService.hashPassword('456');
  const encryptedPassword3 = await CryptService.hashPassword('000');

  await UsersRepository.create({ name: 'Felipe', email: 'felipe@gmail.com', password: encryptedPassword1 });
  await UsersRepository.create({ name: 'Sarah', email: 'sarah@gmail.com', password: encryptedPassword2 });
  await UsersRepository.create({ name: 'Oliveira', email: 'oliveira@hotmail.com', password: encryptedPassword3 });
});
