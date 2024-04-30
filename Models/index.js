const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment')

Blogpost.hasMany(Comment, {
    onDelete: "CASCADE"
})

Comment.belongsTo(Blogpost)

Comment.belongsTo(User)

Blogpost.belongsTo(User)

User.hasMany(Blogpost)

User.hasMany(Comment)


module.exports = { User, Blogpost, Comment };