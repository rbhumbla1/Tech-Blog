const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//get all blogs for the user to display in the dashboard
// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
    // console.log("*******dashboard", req.session);
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });
     console.log("*******dashboard", user);

    const username = user.name;

       res.render('dashboard', {
      username,
      ...user,
      logged_in: true
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


//Post Route to create new blog
router.post('/create-blog', withAuth, async (req, res) => {
     console.log("*******create-blog", req.session);
  try {
    const newBlog = await Blog.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
      });
  
      if (!newBlog) {
        res.status(404).json({ message: 'New blog creation failed' });
        return;
      }
  
      res.status(200).json(newBlog);

      // Find the logged in user based on the session  to get all the blogs to refresh the display
    const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Blog }],
      });
  
      const user = userData.get({ plain: true });
       console.log("####create", user);

    const username = user.name;

       res.render('dashboard', {
      username,
      ...user,
      logged_in: true
    });

  } catch (err) {
    res.status(500).json(err);
  }
});






module.exports = router;