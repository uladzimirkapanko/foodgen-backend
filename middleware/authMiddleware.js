const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

function authMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) {
        console.log('No auth header');
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = auth.split(' ')[1];
    try {
        console.log('token', 'jsonwebtoken', 'JWT_SECRET', JWT_SECRET)
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    } catch (err) {
        console.log('Invalid token:', token, err);
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = authMiddleware;
