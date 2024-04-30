const router = require('express').Router();

const blogRoutes = require('./blogRoutes.js');
const apiRoutes = require('./api')

router.use('/', blogRoutes);
router.use('/api', apiRoutes);


module.exports = router;