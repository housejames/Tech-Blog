const { Blogpost } = require('../models');

const blogpostData = [
  {
    title: 'Hearthstone',
    content: 'I love this game and I am currently ranked 1500 in the world :)',
    date: '4/29/2024',
    userId: 1
  },
  
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost;