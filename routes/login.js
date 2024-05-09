 
const express = require('express');
const router= express.Router();
const loginRouter1 = require('../controllers/login');
 

router.get('/authorize', loginRouter1.authorizeContGet);
 
router.get('/logout', loginRouter1.logoutContGet);

router.post('/login',loginRouter1.loginContPost);

module.exports = router;
