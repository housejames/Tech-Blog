const { Comment } = require('./models');

const commentData = [
  {
    content: "I concur",
    blogpostId: [1],
    userId: 2
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;