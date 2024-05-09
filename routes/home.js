
const express = require('express');
const router= express.Router();
const home1Router = require('../controllers/home'); 

router.get('/', home1Router.homeContrGet);
    
router.get('/help', home1Router.helpContrGet); 
  
  
module.exports = router;
 
 