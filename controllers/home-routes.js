const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');
const { QueryTypes } = require('sequelize');



router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {

        res.redirect('/')
        return;
    }

    res.render('login');
});

//USER WILL BE DIRECTED TO SIGNUP PAGE
router.get('/signup', (req, res) => {
    res.render('signup');
});

//HOMEPAGE ROUTE
router.get('/', async (req, res) => {

    //get all the blogs for display
    try {
        const blogData = await Blog.findAll({
            attributes: ['title', 'content', 'owner_id', 'date_created']
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        //Get the User Data
        const ownerData = await User.findAll({
            attributes: ['id', 'name']
        });
        const owners = ownerData.map((owner) => owner.get({ plain: true }));

        //add owner_name to the data for displaying
        blogs.forEach((blog) => {
            for (let i = 0; i < owners.length; i++) {
                if(blog.owner_id == owners[i].id)
                    blog.owner_name = owners[i].name;
            }
        });

            console.log("***********", owners, blogs);

        res.render('homepage', {
            blogs,
        });

    } catch (err) {
        res.status(500).json(err);
    }


});

module.exports = router;
