const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || '4000';
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use((req, res, next) => {
    next();
});

const users = [];
const dishes = [
    { id: 1, nameKey: 'borsch', imageName: 'borscht.jpg', ingredients: ['beet', 'cabbage', 'potato', 'carrot', 'onion', 'meat', 'tomato_paste'] },
    { id: 2, nameKey: 'plov', imageName: 'plov.jpeg', ingredients: ['rice', 'meat', 'carrot', 'onion', 'garlic', 'spices'] },
    { id: 3, nameKey: 'olivier', imageName: 'olivier.jpg', ingredients: ['potato', 'carrot', 'eggs', 'peas', 'sausage', 'cucumber', 'mayonnaise'] },
    { id: 4, nameKey: 'pasta', imageName: 'pasta.jpg', ingredients: ['pasta', 'tomato_sauce', 'cheese', 'basil'] },
    { id: 5, nameKey: 'caesar', imageName: 'salat.jpg', ingredients: ['chicken', 'lettuce', 'croutons', 'parmesan', 'caesar_sauce'] },
    { id: 6, nameKey: 'puree', imageName: 'plate.jpg', ingredients: ['vegetables', 'cream', 'salt', 'pepper'] },
    { id: 7, nameKey: 'chicken_potato', imageName: 'plate.jpg', ingredients: ['chicken', 'potato', 'spices', 'oil'] },
    { id: 8, nameKey: 'buckwheat_veggies', imageName: 'plate.jpg', ingredients: ['buckwheat', 'carrot', 'onion', 'bell_pepper', 'spices'] }
];

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });
    if (users.find(u => u.email === email)) return res.status(409).json({ message: 'User already exists' });
    const hash = await bcrypt.hash(password, 10);
    users.push({ email, password: hash });
    console.log('User registered:', email);
    res.json({ message: 'Registration successful' });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
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
});

app.post('/login-social', (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });
    let user = users.find(u => u.email === email);
    if (!user) {
        user = { email };
        users.push(user);
        console.log('Social user created:', email);
    }
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });
    console.log('Social login success, token issued for:', email);
    res.json({ token });
});

function authMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) {
        console.log('No auth header');
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = auth.split(' ')[1];
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    } catch (err) {
        console.log('Invalid token:', token, err);
        return res.status(401).json({ message: 'Invalid token' });
    }
}

function getTranslations(lang) {
    const defaultLang = 'en';
    let translations = {};
    try {
        const filePath = path.join(__dirname, 'translations', `${lang}.json`);
        if (fs.existsSync(filePath)) {
            translations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        } else {
            const defaultPath = path.join(__dirname, 'translations', `${defaultLang}.json`);
            translations = JSON.parse(fs.readFileSync(defaultPath, 'utf-8'));
        }
    } catch (e) {
        translations = {};
    }
    return translations;
}

app.get('/dishes', authMiddleware, (req, res) => {
    const lang = req.query.lang || 'en';
    const translations = getTranslations(lang);
    console.log('translations', translations)
    const dishesWithTranslation = dishes.map(dish => {
        const name = translations.dishesList?.[dish.nameKey]?.name || dish.nameKey;
        const description = translations.dishesList?.[dish.nameKey]?.description || '';
        const translatedIngredients = dish.ingredients.map(ing => translations.ingredients?.[ing] || ing);
        return {
            ...dish,
            name,
            description,
            ingredientsTranslated: translatedIngredients,
            imageUrl: `https://${req.get('host')}/images/${dish.imageName}`
        };
    });
    res.json(dishesWithTranslation);
});

app.get('/dishes/:id', authMiddleware, (req, res) => {
    const dish = dishes.find(d => d.id === Number(req.params.id));
    if (!dish) {
        console.log('Dish not found:', req.params.id);
        return res.status(404).json({ message: 'Dish not found' });
    }
    console.log('GET /dishes/:id', req.params.id, 'for user:', req.user.email);
    res.json(dish);
});

app.listen(PORT, () => {
    console.log(`Server running on https://foodgen-backend.onrender.com:${PORT}`);
}); setInterval(() => { }, 1000);
