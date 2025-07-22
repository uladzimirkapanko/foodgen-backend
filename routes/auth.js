const express = require('express');
const router = express.Router();
const { register, login, loginSocial } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/login-social', loginSocial);

module.exports = router;
