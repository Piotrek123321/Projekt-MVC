 
const login = require('../Models/login');

const authorizeContGet=(req, res) => {
    res.render("authorizeClient",{
    pageTitle:'Baza książek logowanie',
    message:"",
    h1:'Baza Książek Logowanie:'
    });
};
 
const  logoutContGet=(req, res) => {
  res.clearCookie('authToken');
  res.redirect('/');
};

const loginContPost=(req, res) => {
  return login (req, res);  
};

module.exports ={loginContPost,logoutContGet,authorizeContGet};

   