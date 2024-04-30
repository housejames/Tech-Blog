const { User } = require('./models');

const userData = [
  {
    username: "JamesTheEpic",
    email: "james@gmail.com",
    password: "eightlong",
  },
  {
    username: "JudyTheEpic",
    email: "judy@gmail.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUser;