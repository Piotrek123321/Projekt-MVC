const del = require('../Models/del');
const del1 = require('../Models/delBook');
 

const delContrGet=(req, res) => {
    if (req.cookies.authToken) {
    res.render("del",{
        pageTitle:'Baza książek usuwanie',
        message:'',
        h1:"Usuwanie wybranej pozycji :"
        });
    }else{
        console.log('Invalid email or password');
        res.render("authorizeClient",{
          pageTitle:'Baza książek logowanie',
          message:"Nie jesteś zalogowany. Przed usuwaniem ksiązek jest to wymagane.",
          h1:'Baza Książek Logowanie:'
          });} 
  }; 
  
const delContrPost=(req, res) => {
    return del(req,res);
};
   
const delBookContrPost=(req, res) => {
    return del1(req,res);
};

module.exports =  {delBookContrPost,delContrPost,delContrGet};