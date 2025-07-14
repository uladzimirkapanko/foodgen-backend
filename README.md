# FoodGen Backend

Простой backend на Express для FoodGenApp

## Запуск

```bash
npm install
node index.js
```

Сервер стартует на http://localhost:4000

## API

### Регистрация

POST /register

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Логин

POST /login

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Ответ:

```json
{
  "token": "...jwt..."
}
```

### Получить блюда (требует авторизации)

GET /dishes

Заголовок:

```
Authorization: Bearer <token>
```

### Получить блюдо по id (требует авторизации)

GET /dishes/:id

Заголовок:

```
Authorization: Bearer <token>
```
