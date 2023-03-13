const { Post } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');



// router.post('/', async (req, res) => {
//     try {
//         const postData = await Post.create(req.body);
//         res.status(200).json(postData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.post('/', withAuth, async (req, res) => {
    // const body = req.body;
  
    try {
      const postData = await Post.create({ ...body, user_id: req.session.user_id });
      const existingPost = postData.map((post) => post.get({ plain: true }));
      res.render('homepage',{existingPost, logged_in: req.session.logged_in });
    //    res.status(200).res.json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;