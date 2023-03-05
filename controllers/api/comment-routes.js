const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//Post Route to create new comment
router.post('/', withAuth, async (req, res) => {
    console.log("*******create-comment", req.session);
    try {
        const newComment = await Comment.create({
            content: req.body.content,
            blog_id: req.body.blog_id,
            owner_id: req.session.user_id
        });

        if (!newComment) {

            res.status(404).json({ message: 'New comment creation failed' });
            return;
        }
console.log("*******create-comment", newComment);

        res.status(200).json(newComment);

        // Find comments that belongs to this blog_id
        const commentData = await Comment.findAll({
            where: { blog_id: req.body.blog_id },
        }, {
            attributes: ['id', 'title', 'content', 'date_created'],
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        console.log("####################COMMENT POST ORUTE 1", commentData);
        const comments = commentData.map((comment) => comment.get({ plain: true }));

        console.log("####################COMMENT POST ORUTE 2", comments);
            

        //find blog data to display
        const blogData = await Blog.findByPk(req.body.blog_id, {
            attributes: ['id','title','content', 'date_created'],
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          });
          const blog = blogData.get({ plain: true });

          console.log("####################COMMENT POST ORUTE 3", blog);

        // res.render('comment', {
        //     logged_in: req.session.logged_in,
        //     hasComments: true,
        //     blog,
        //     comments
        // });



    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;