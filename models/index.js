const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'owner_id'
});

User.hasMany(Comment, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'owner_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Blog, {
    foreignKey:'blog_id'
})


module.exports = { User, Blog, Comment };
