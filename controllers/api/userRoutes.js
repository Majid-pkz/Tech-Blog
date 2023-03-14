const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(dbUserData)

    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!----------------------------------------------------------------------------------------------------' });
      return;
    }
    

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    console.log("upto here password validated")

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;
      console.log("trueeeeeeeeeeeeee")

      res.json({ user: dbUserData, message: 'You are now logged in!' });
   
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/sign-out', (req, res) => {
  console.log("logging out")
  // When the user logs out, destroy the session
  if (req.session.logged_in) {
    console.log("user is loged in")
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log("nist")
    res.status(404).end();
  }
});

module.exports = router;
