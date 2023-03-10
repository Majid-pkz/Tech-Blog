const { Post, User } = require('../../models');
const router = require('express').Router();


router.get('/', async (req, res) => {
    // find all existing posts  
    try {
        const postData = await Post.findAll(
            {
                include: [{ model: User }],
            }


        );
        const existingPost = postData.map((post) => post.get({ plain: true }));
        res.render('homepage',{existingPost, logged_in: req.session.logged_in });
        //  res.status(200).json(postData);
    } 
    catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});


module.exports = router;