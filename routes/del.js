
const express = require('express');
const router= express.Router();
 
const deleteRouter = require('../controllers/del'); 

router.use(express.urlencoded({ extended: true })); 

router.get('/del',deleteRouter.delContrGet ); 
  
router.post('/del', deleteRouter.delContrPost);
   
router.delete('/delBook/:bookId', deleteRouter.delBookContrPost);

module.exports = router;