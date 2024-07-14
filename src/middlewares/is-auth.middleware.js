const { verifyToken } = require('../utils/jwt');

const isAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send({ message: 'Access denied' });

  try {
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send({ message: 'Invalid token' });
  }
};

module.exports = isAuth;
