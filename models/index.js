const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// User has many Post
User.hasMany(Post, {
  foreignKey: 'user_id'
});

//Post belongs to one user
Post.belongsTo(User);

// User makes many comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

//Comment belong to a user
Comment.belongsTo(User);

//Post has many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

//Comment belongs to a Post
Comment.belongTo(Post);
