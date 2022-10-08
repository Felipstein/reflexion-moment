import { Response, NextFunction } from 'express';
import { Request } from 'express';
import jwt from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const [bearer, token] = authorization.split(' ');

  if (!bearer || !token) {
    return res.sendStatus(401);
  }

  if (bearer !== 'Bearer') {
    return res.sendStatus(401);
  }

  try {
    jwt.verify(token, process.env.SECRET_KEY!);

    next();
  } catch {
    return res.sendStatus(401);
  }

}