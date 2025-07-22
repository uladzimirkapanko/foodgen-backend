const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users, findUserByEmail, addUser } = require('../models/users');
const { JWT_SECRET } = require('../config');

const register = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });
    if (findUserByEmail(email)) return res.status(409).json({ message: 'User already exists' });
    const hash = await bcrypt.hash(password, 10);
    addUser({ email, password: hash });
    console.log('User registered:', email);
    res.json({ message: 'Registration successful' });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = findUserByEmail(email);
    if (!user) {
        console.log('User not found:', email);
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        console.log('Invalid password for:', email);
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1d' });
    console.log('Login success, token issued for:', email);
    res.json({ token });
};

const loginSocial = (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });
    let user = findUserByEmail(email);
    if (!user) {
        user = { email };
        addUser(user);
    }
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
};

module.exports = {
    register,
    login,
    loginSocial
};
