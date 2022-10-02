const { Router } = require('express');

const authMiddleware = require('./middlewares/authMiddleware');
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

const route = Router();

route.post('/auth', AuthController.authenticate);
route.post('/auth/register', AuthController.register);
route.post('/auth/validate', AuthController.validate);

route.get('/users', authMiddleware, UserController.index);
route.get('/users/:id', authMiddleware, UserController.show);
route.post('/users/', authMiddleware, UserController.store);
route.put('/users/:id', authMiddleware, UserController.update);
route.delete('/users/:id', authMiddleware, UserController.delete);

module.exports = route;
