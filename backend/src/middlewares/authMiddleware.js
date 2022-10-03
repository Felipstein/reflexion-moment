const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const [bearer, token] = authorization.split(' ');

  if (!bearer || !token || bearer !== 'Bearer') {
    return res.sendStatus(401);
  }

  try {
    jwt.verify(token, process.env.SECRET_KEY);

    return next();
  } catch {
    return res.sendStatus(401);
  }
};
