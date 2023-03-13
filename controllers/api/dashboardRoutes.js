const {Post } = require('../../models');
const router = require('express').Router();

router.get('/',  async (req, res) => {
    // find all existing posts  
    try {
        const postData = await Post.findAll(
            {
                include: [{ model: User }],
            }


        );
        const existingPost = postData.map((post) => post.get({ plain: true }));
        res.render('homepage',{existingPost, logged_in: req.session.logged_in });
      
    } 
    catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});



router.get('/newpost', (req, res) => {
  
    
    if (!req.session.logged_in) {
        res.redirect('/');
        return;
      }
    
      res.render('newpost');
    });


module.exports = router;