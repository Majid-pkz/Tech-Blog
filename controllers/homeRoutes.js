const { Post, User } = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth');


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


// Use withAuth middleware to prevent access to route
router.get('/dashboard', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/sign-up', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('sign-up');
});



























// Login
// router.post('/login', async (req, res) => {
//   try {
//     const dbUserData = await User.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });

//     if (!dbUserData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password. Please try again!' });
//       return;
//     }
//     console.log(dbUserData)

//     const validPassword = await dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password. Please try again!' });
//       return;
//     }
//     console.log("upto here password validated")

//     // Once the user successfully logs in, set up the sessions variable 'loggedIn'
//     req.session.save(() => {
//       req.session.user_id = dbUserData.id;
//       req.session.loggedIn = true;
//       console.log("trueeeeeeeeeeeeee")

//       res.json({ user: dbUserData, message: 'You are now logged in!' });
   
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // sign-in route
// router.get('/dashboard',  withAuth,(req, res) => {
//     // If the user is already logged in, redirect to the homepage
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
//     // Otherwise, render the 'login' template
//     res.render('login');
//   });

  
//   // sign-up route
// router.get('/sign-up', (req, res) => {
//     // If the user is already logged in, redirect to the homepage
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
//     // Otherwise, render the 'login' template
//     res.render('sign-up');
//   });

module.exports = router;