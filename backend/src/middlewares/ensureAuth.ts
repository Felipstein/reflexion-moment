import { Response, NextFunction } from 'express';
import { Request } from 'express';
import { tokenProvider } from '../providers/TokenProvider';

export default (req: Request, res: Response, next: NextFunction) => {
  // const { authorization } = req.headers;

  // if (!authorization) {
  //   return res.sendStatus(401);
  // }

  // const [bearer, token] = authorization.split(' ');

  // if (!bearer || !token) {
  //   return res.sendStatus(401);
  // }

  // if (bearer !== 'Bearer') {
  //   return res.sendStatus(401);
  // }

  // const tokenIsValid = tokenProvider.verify(token);

  // if (!tokenIsValid) {
  //   return res.sendStatus(401);
  // }

  return next();
}