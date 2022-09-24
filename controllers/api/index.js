const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postingRoutes = require('./postingRoutes');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/posting', postingRoutes);

module.exports = router;
