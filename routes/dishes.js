const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middleware/authMiddleware');
const { getDishes, getDishById } = require('../controllers/dishesController');

// router.get('/dishes', authMiddleware, getDishes);
// router.get('/dishes/:id', authMiddleware, getDishById);
router.get('/dishes', getDishes);
router.get('/dishes/:id', getDishById);

module.exports = router;
