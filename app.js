// app.js

const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dotenv = require('dotenv');
const path = require('path');
const db = require('./models');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set up session middleware
const sessionStore = new SequelizeStore({
  db: db.sequelize
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 3600000 // 1 hour
  }
}));

// Routes
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Sync database and start server
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
