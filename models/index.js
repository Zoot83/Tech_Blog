const User = require('./user');
const Posting = require('./posting');
const Comment = require('./comment');

User.hasMany(Posting, {
  foreignKey: 'user_id',
});

Posting.belongsTo(User, {
  foreignKey: 'user_id',
});

Posting.hasMany(Comment, {
  foreignKey: 'posting_id',
});

module.exports = {
  User,
  Posting,
  Comment,
};
