const express = require('express');
const router= express.Router();
const bodyParser = require('body-parser');

const homeContrGet=(req, res) => {
  res.render("home",{
    pageTitle:'Baza Książek elektronicznych',
    h1:"Baza Książek elektronicznych",
    }); 
  };
   
  const helpContrGet=(req, res) => {
    res.render("help",{
      pageTitle:'Baza Książek Pomoc',
      h1:"Pomoc:",
      }); 
  }; 
     
  router.get('/wyloguj', (req, res) => {
    res.send('wylogowanie');
  });
  
  router.get('/logowanie', (req, res) => {
    res.send('zaloguj');
  });
  
  module.exports = {helpContrGet,homeContrGet};
 
 