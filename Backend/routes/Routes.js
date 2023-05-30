const router = require('express').Router();


const { add,getusers } = require('../controllers/user');


router.post('/add',add);
router.get('/getusers',getusers);


module.exports = router;

