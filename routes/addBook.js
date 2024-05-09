
const express = require('express');
const router= express.Router();
 
const addBookRouter = require('../controllers/addBook');

router.use(express.urlencoded({ extended: true }));
  
router.get('/addBook', addBookRouter.addBookContrGet); 
 
router.post('/addBook', addBookRouter.addBookContrPost);
   
module.exports = router;