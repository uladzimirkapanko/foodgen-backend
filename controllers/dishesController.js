const { dishes } = require('../models/dishes');
const { getTranslations } = require('../utils/translations');

function translateAmount(amount, unitsDict) {
    if (!amount) return '';
    // Примеры: "200 г", "2 ст.л.", "по вкусу", "1 зубчик"
    // 1. Число + пробел + единица
    let match = amount.match(/^([\d.,]+)\s*(.+)$/);
    if (match) {
        const num = match[1];
        const unit = match[2].trim();
        const translatedUnit = unitsDict[unit] || unit;
        return `${num} ${translatedUnit}`;
    }
    // 2. Только единица (например, "по вкусу", "1 зубчик")
    return unitsDict[amount.trim()] || amount;
}

const getDishes = (req, res) => {
    const lang = req.query.lang || 'en';
    const translations = getTranslations(lang);
    const dishesWithTranslation = dishes.map(dish => {
        const name = translations.dishesList?.[dish.nameKey]?.name || dish.nameKey;
        const description = translations.dishesList?.[dish.nameKey]?.description || '';
        const recipe = translations.dishesList?.[dish.nameKey]?.recipe || [];
        const translatedIngredients = dish.ingredients.map(ing => ({
            name: ing.name,
            amount: translateAmount(ing.amount, translations.units || {}),
            translated: translations.ingredients?.[ing.name] || ing.name
        }));
        return {
            ...dish,
            name,
            description,
            recipe,
            ingredientsTranslated: translatedIngredients,
            imageUrl: `https://${req.get('host')}/images/${dish.imageName}`,
            videoUrl: dish.videoUrl
        };
    });
    res.json(dishesWithTranslation);
};

const getDishById = (req, res) => {
    const dish = dishes.find(d => d.id === Number(req.params.id));
    if (!dish) {
        console.log('Dish not found:', req.params.id);
        return res.status(404).json({ message: 'Dish not found' });
    }
    console.log('GET /dishes/:id', req.params.id, 'for user:', req.user?.email);
    res.json(dish);
};

module.exports = {
    getDishes,
    getDishById
};
