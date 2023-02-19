const router = require('express').Router();
const apiRoutes = require('./api');
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');
const homeRoutes = require("./home-routes")

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;