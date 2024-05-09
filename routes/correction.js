 
const express = require('express');
const path = require('path');
const router= express.Router();
const corRouter = require('../controllers/correction');
 
 
router.use(express.urlencoded({ extended: true }));
router.use(express.json());


router.post('/correction', corRouter.correctionContrPost);

router.put('/correction1/:bookId', corRouter.correction1ContrPut);
   
router.get('/correction',corRouter.correctionContrGet); 
  
   
module.exports = router;