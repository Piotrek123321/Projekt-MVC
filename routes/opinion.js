
const express = require('express');
const router= express.Router();
 
const opRouter = require('../controllers/opinion');

router.use(express.urlencoded({ extended: true }));
 
router.get('/opinion1', opRouter.opinion1ContrGet);

router.post('/opinion1', opRouter.opinion1ContrPost); 

module.exports = router;
   