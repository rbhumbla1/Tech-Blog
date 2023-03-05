const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // console.log("&&&&& HOMEPAGE", req.session);
  try {
    // Get all projects and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/api/blogs/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/api/blogs/dashboard');
    return;
  }

  res.render('signup');
});

router.get('/dashboard', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/api/blogs/dashboard');
    return;
  }

  res.render('login');
});

//get blog create page
router.get('/blog', withAuth, (req, res) => {
  res.render('blog', {
    logged_in: req.session.logged_in,
    create_blog: true
  });
});

//get blog update page
router.get('/blog/:id', withAuth, async (req, res) => {


  const blogData = await Blog.findByPk(req.params.id, {
    attributes: ['id', 'title', 'content']
  });
  const blog = blogData.get({ plain: true })

  //console.log("####################UPPDATE ORUTE", req.params.id, blog)
  res.render('blog', {
    logged_in: req.session.logged_in,
    create_blog: false,
    blog
  });
});

//get blog comment page
router.get('/comment/:id', withAuth, async (req, res) => {


  const blogData = await Blog.findByPk(req.params.id, {
    attributes: ['id', 'title', 'content', 'date_created'],
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });
  const blog = blogData.get({ plain: true })

  console.log("####################COMMENT ORUTE", req.params.id, blog)

  //check if this blog has comments.  If so, display them
  const commentData = await Comment.findAll({
    where: { blog_id: req.body.blog_id },

    attributes: ['id', 'title', 'content', 'date_created'],
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });

  const comments = commentData.get({ plain: true });

  if (comments) {
    res.render('comment', {
      logged_in: req.session.logged_in,
      hasComments: true,
      blog,
      comments
    });
  }
  else {
    res.render('comment', {
      logged_in: req.session.logged_in,
      hasComments: false,
      blog
    });
  }
});

module.exports = router;
