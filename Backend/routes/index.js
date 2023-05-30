const router = require('express').Router();

router.use('/add', require('./user'));

module.exports = router;
