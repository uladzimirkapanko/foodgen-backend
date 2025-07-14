const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || '4000';
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use((req, res, next) => {
    console.log(`--> ${req.method} ${req.url} | body:`, req.body, '| headers:', req.headers);
    next();
});

// In-memory users and dishes
const users = [];
// Обновлённый массив блюд с nameKey для локализации
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

// Регистрация
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    console.log('POST /register', { email });
    if (!email || !password) return res.status(400).json({ message: 'Email и пароль обязательны' });
    if (users.find(u => u.email === email)) return res.status(409).json({ message: 'Пользователь уже существует' });
    const hash = await bcrypt.hash(password, 10);
    users.push({ email, password: hash });
    console.log('User registered:', email);
    res.json({ message: 'Регистрация успешна' });
});

// Логин
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('POST /login', { email });
    const user = users.find(u => u.email === email);
    if (!user) {
        console.log('User not found:', email);
        return res.status(401).json({ message: 'Неверные email или пароль' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        console.log('Invalid password for:', email);
        return res.status(401).json({ message: 'Неверные email или пароль' });
    }
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1d' });
    console.log('Login success, token issued for:', email);
    res.json({ token });
});

// Social login endpoint
app.post('/login-social', (req, res) => {
    const { email } = req.body;
    console.log('POST /login-social', { email });
    if (!email) return res.status(400).json({ message: 'Email обязателен' });
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

// Middleware для проверки JWT
function authMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) {
        console.log('No auth header');
        return res.status(401).json({ message: 'Нет токена' });
    }
    const token = auth.split(' ')[1];
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    } catch (err) {
        console.log('Invalid token:', token, err);
        return res.status(401).json({ message: 'Неверный токен' });
    }
}

// Получить блюда (требует авторизации)
app.get('/dishes', authMiddleware, (req, res) => {
    console.log('GET /dishes for user:', req.user.email);
    const dishesWithUrl = dishes.map(dish => ({
        ...dish,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${dish.imageName}`
    }));
    res.json(dishesWithUrl);
});

// Получить блюдо по id (требует авторизации)
app.get('/dishes/:id', authMiddleware, (req, res) => {
    const dish = dishes.find(d => d.id === Number(req.params.id));
    if (!dish) {
        console.log('Dish not found:', req.params.id);
        return res.status(404).json({ message: 'Блюдо не найдено' });
    }
    console.log('GET /dishes/:id', req.params.id, 'for user:', req.user.email);
    res.json(dish);
});

app.listen(PORT, () => {
    console.log(`Server running on http://192.168.0.241:${PORT}`);
}); setInterval(() => { }, 1000);
