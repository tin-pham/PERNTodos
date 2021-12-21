require('dotenv').config();
const express = require('express');
const todosRoute = require('./routes/todosRoute');

const { sequelize } = require('./models');

const app = express();

// Middleware
app.use(express.json());

app.use('/api/v1/todos', todosRoute);

// Listening
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (err) {
    console.error(err);
  }
});
