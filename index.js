const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const { PORT } = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

// Роуты
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/dishes'));
app.use('/', require('./routes/favorites'));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
