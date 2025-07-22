const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getFavorites, addFavorite, deleteFavorite } = require('../controllers/favoritesController');

router.get('/favorites', authMiddleware, getFavorites);
router.post('/favorites', authMiddleware, addFavorite);
router.delete('/favorites/:dishId', authMiddleware, deleteFavorite);

module.exports = router;
