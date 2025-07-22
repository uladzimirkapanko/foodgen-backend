const { users, findUserByName, addUser } = require('../models/users');

const getFavorites = (req, res) => {
    const { userName } = req.query;
    if (!userName) return res.status(400).json({ message: 'userName is required' });
    let user = findUserByName(userName);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.favorites || []);
};

const addFavorite = (req, res) => {
    const { userName, dishId } = req.body;
    if (!userName || !dishId) return res.status(400).json({ message: 'userName and dishId are required' });
    let user = findUserByName(userName);
    if (!user) {
        user = { userName, favorites: [] };
        addUser(user);
    }
    if (!user.favorites) user.favorites = [];
    if (!user.favorites.includes(dishId)) user.favorites.push(dishId);
    res.json({ favorites: user.favorites });
};

const deleteFavorite = (req, res) => {
    const { userName } = req.query;
    const dishId = Number(req.params.dishId);
    if (!userName || !dishId) return res.status(400).json({ message: 'userName and dishId are required' });
    let user = findUserByName(userName);
    if (!user || !user.favorites) return res.status(404).json({ message: 'User or favorites not found' });
    user.favorites = user.favorites.filter(id => id !== dishId);
    res.json({ favorites: user.favorites });
};

module.exports = {
    getFavorites,
    addFavorite,
    deleteFavorite
};
