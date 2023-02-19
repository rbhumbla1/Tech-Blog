const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./blogData.json');
const budgetData = require('./commentData.json');
const expenseData = require('./userData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blogs = await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
