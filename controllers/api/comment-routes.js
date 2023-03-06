const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//Post Route to create new comment
router.post('/', withAuth, async (req, res) => {
    //console.log("*******create-comment", req.session);
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
    //console.log("*******create-comment", newComment);

        res.status(200).json(newComment);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;