import { Router } from "express";
import ensureAuth from "../middlewares/ensureAuth";
import { createUserController } from "../modules/Users/CreateUser";
import { deleteUsersController } from "../modules/Users/DeleteUser";
import { listAllUsersController } from "../modules/Users/LIstAllUsers";
import { listUserController } from "../modules/Users/ListUser";
import { updateUserController } from "../modules/Users/UpdateUser";

const route = Router();

route.get('/users', ensureAuth, (req, res) => {
  return listAllUsersController.handle(req, res);
});

route.get('/users/:id', ensureAuth, (req, res) => {
  return listUserController.handle(req, res);
});

route.post('/users', ensureAuth, (req, res) => {
  return createUserController.handle(req, res);
});

route.put('/users/:id', ensureAuth, (req, res) => {
  return updateUserController.handle(req, res);
});

route.delete('/users/:id', ensureAuth, (req, res) => {
  return deleteUsersController.handle(req, res);
});

export { route as userRoutes };