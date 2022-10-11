import { Router } from "express";
import { authenticateController } from "../modules/Auth/Authenticate";
import { registerController } from "../modules/Auth/Register";
import { validateControlller } from "../modules/Auth/Validate";

const route = Router();

route.post('/auth', (req, res) => {
  return authenticateController.handle(req, res);
});

route.post('/auth/register', (req, res) => {
  return registerController.handle(req, res);
})

route.post('/auth/validate', (req, res) => {
  return validateControlller.handle(req, res);
});

export { route as authRoutes };