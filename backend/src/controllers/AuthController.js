const jwt = require('jsonwebtoken');

const CryptService = require('../services/CryptService');
const UsersRepository = require('../repositories/UsersRepository');

class AuthController {
  async authenticate(req, res) {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'E-mail é obrigatório' });
    }
    if (!password) {
      return res.status(400).json({ error: 'Senha é obrigatória' });
    }

    const user = await UsersRepository.findByEmail(email);
    if (!user) {
      return res.status(404).json({ error: 'E-mail não cadastrado' });
    }

    if (!await CryptService.matchPassword(user, password)) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '7d' });

    return res.json({ user, token });
  }

  async register(req, res) {
    const {
      name, email, password, confirmPassword,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    if (!email) {
      return res.status(400).json({ error: 'E-mail é obrigatório' });
    }
    if (!password) {
      return res.status(400).json({ error: 'Senha é obrigatória' });
    }
    if (!confirmPassword) {
      return res.status(400).json({ error: 'Confirmar senha é obrigatória' });
    }

    const nameAlreadyInUse = await UsersRepository.findByName(name);
    if (nameAlreadyInUse) {
      return res.status(400).json({ error: 'Nome já em uso' });
    }

    const emailAlreadyInUse = await UsersRepository.findByEmail(email);
    if (emailAlreadyInUse) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'As senhas não coincidem' });
    }

    const encryptedPassword = await CryptService.hashPassword(password);

    const user = await UsersRepository.create({ name, email, password: encryptedPassword });

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '7d' });

    return res.json({ user, token });
  }

  validate(req, res) {
    const { token } = req.body;

    if (!token) {
      return res.sendStatus(401);
    }

    try {
      jwt.verify(token, process.env.SECRET_KEY);

      const data = jwt.decode(token);

      console.log(data);

      return res.json(token);
    } catch {
      return res.sendStatus(401);
    }
  }
}

module.exports = new AuthController();
