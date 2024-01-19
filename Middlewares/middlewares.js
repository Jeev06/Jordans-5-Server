const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../Config/config.js');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token not found' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid authorization token' });
  }
};

module.exports = verifyToken;