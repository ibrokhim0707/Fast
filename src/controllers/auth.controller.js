const bcrypt = require('bcryptjs');
const prisma = require('../../config/index');
const { generateToken } = require('../utils/jwt');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send({ message: 'Invalid credentials' });
  }
  const token = generateToken(user);
  res.send({ token });
};

module.exports = { login };
