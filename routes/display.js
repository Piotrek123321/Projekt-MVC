
const express = require('express');
const router= express.Router();
 
const disRouter = require('../controllers/display'); 

router.use(express.urlencoded({ extended: true }));

router.get('/display', disRouter.displayContrGet);

router.post('/displayChoice', disRouter.displayChoiceGontrPost);

module.exports = router;