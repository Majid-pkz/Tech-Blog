const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./??????');


router.use('/api', apiRoutes);
// router.use('/', ???????????);


router.use((req, res) => {
    return res.send("Wrong Route!")
});

module.exports = router;