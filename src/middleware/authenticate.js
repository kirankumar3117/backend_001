const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authentication token missing' });
    }
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.userId = decodedToken.userId;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Authentication token invalid' });
    }
  };

 module.exports=verifyToken;