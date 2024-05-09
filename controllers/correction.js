const cor = require('../Models/correction');
const cor1 = require('../Models/correction1');

const currentDate = new Date();
const year = currentDate.getFullYear();

const correctionContrPost=(req, res) => { 
    return cor(req,res);
  };
   
 
  const correction1ContrPut=(req, res) => { 
    return cor1(req,res);
  };
   
  const correctionContrGet=(req, res) => {
    res.render("correction",{
      pageTitle:'Baza książek korekty',
      message:'',
      h1:"Korekty:"
      }); 
  };
   
  
  module.exports = {correctionContrGet,correction1ContrPut,correctionContrPost};