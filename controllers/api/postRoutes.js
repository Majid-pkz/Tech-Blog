const { Post } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');



router.get(`/:id`, async (req, res) => {
  // find a single post by `id`
  
  try {
      const postData = await Post.findByPk(req.params.id);

      const singlePost = postData.get({ plain: true });
      res.render('post', {
          ...singlePost,

          //  replace true with   req.session.logged_in
          logged_in: true
        });

       res.status(200).json(postData);
  } catch (err) {
      res.status(500).json(err);
      console.log(err);
  }
});








// router.post('/', async (req, res) => {
//     try {
//         const postData = await Post.create(req.body);
//         res.status(200).json(postData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.post('/', async (req, res) => {
    
  console.log(`this is req.session. user_id: ${req.session.user_id}`)
    try {
      const postData = await Post.create({         
        content: req.body.content,
        title: req.body.title,
        user_id: req.session.user_id });
    //   const existingPost = postData.map((post) => post.get({ plain: true }));
    res.json(postData);
      res.render('homepage');
   
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;