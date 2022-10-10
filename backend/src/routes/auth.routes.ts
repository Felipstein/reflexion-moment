import { Router } from "express";
import { authenticateController } from "../modules/Auth/Authenticate";

const route = Router();

route.post('/auth', (req, res) => {
  return authenticateController.safeHandle(req, res);
});

export { route };