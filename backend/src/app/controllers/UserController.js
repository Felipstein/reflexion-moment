const { isUUID } = require('uuid-v4');

const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(req, res) {
    const users = await UsersRepository.findAll();
    ssss;
    res.json(users);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!isUUID(id)) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const user = await UsersRepository.findById(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    return res.json(user);
  }

  async store(req, res) {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    if (!email) {
      return res.status(400).json({ error: 'E-mail é obrigatório' });
    }
    if (!password) {
      return res.status(400).json({ error: 'Senha é obrigatória' });
    }

    const nameAlreadyInUse = await UsersRepository.findByName(name);
    if (nameAlreadyInUse) {
      return res.status(400).json({ error: 'Nome já em uso' });
    }

    const emailAlreadyInUse = await UsersRepository.findByEmail(email);
    if (emailAlreadyInUse) {
      return res.status(400).json({ error: 'E-mail já em uso' });
    }

    const user = await UsersRepository.create({ name, email, password });

    return res.json(user);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    if (!isUUID(id)) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    if (!email) {
      return res.status(400).json({ error: 'E-mail é obrigatório' });
    }
    if (!password) {
      return res.status(400).json({ error: 'Senha é obrigatória' });
    }

    const userExists = await UsersRepository.findById(id);
    if (!userExists) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const nameAlreadyInUse = await UsersRepository.findByName(name);
    if (nameAlreadyInUse && nameAlreadyInUse.id !== Number(id)) {
      return res.status(400).json({ error: 'Nome já em uso' });
    }

    const emailAlreadyInUse = await UsersRepository.findByEmail(email);
    if (emailAlreadyInUse && emailAlreadyInUse.id !== Number(id)) {
      return res.status(400).json({ error: 'E-mail já em uso' });
    }

    const newUser = await UsersRepository.update(id, { name, email, password });

    return res.json(newUser);
  }

  async delete(req, res) {
    const { id } = req.params;

    if (!isUUID(id)) {
      return res.sendStatus(204);
    }

    await UsersRepository.delete(id);

    return res.sendStatus(204);
  }
}

module.exports = new UserController();
