const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('../controllers/api/homeRoutes');
const dashboardRoutes= require('../controllers//api/dashboardRoutes');


router.use('/api', apiRoutes);
 router.use('/', homeRoutes);
 router.use('/', dashboardRoutes);


router.use((req, res) => {
    return res.send("Wrong Route!")
});

module.exports = router;