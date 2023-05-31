const router = require('express').Router();

const { add, getusers } = require('../controllers/user');
const { setConversation } = require('../controllers/conversation');

router.post('/add', add);
router.get('/getusers', getusers);
router.post('/setconversation', setConversation);

module.exports = router;
