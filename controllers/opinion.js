const op1 = require('../Models/opinion1');
 
const opinion1ContrGet=(req, res) => {
  res.render("opinion1",{
    pageTitle:'Baza Książek Opinie',
    h1:"Opinie:",
    message:''
    }); 
};
  
const opinion1ContrPost=(req, res) => { 
    return op1(req,res);
}; 

module.exports = {opinion1ContrPost,opinion1ContrGet};
   