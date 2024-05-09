const dis = require('../Models/dis');
  
const displayContrGet=(req, res) => { 
  res.render("displayChoice",{
    pageTitle:'Baza książek wyswietlanie',
    h1:"Wybierz opcje wyświetlania:"
    }); 
  };
const displayChoiceGontrPost=(req, res) => { 
    return dis(req,res);
  };

module.exports = {displayChoiceGontrPost,displayContrGet};