// import express
const path = require('path');
const express = require('express');
// import express-session
const session = require('express-session');
// import handlebars
const exphbs = require('express-handlebars');

// import routes, sequalise model, and helpers
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

//creates the server
const app = express();
const PORT = process.env.PORT || 3001;

// set up a sessions
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: false,
  };
  app.use(session(sess));

// sets up handlebars for use
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// tells the server app to use the routes variable wwhch links to the controllers index.js file
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});