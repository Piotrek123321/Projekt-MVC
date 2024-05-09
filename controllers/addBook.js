const addBook= require('../Models/addPOST');
const currentDate = new Date();
const year = currentDate.getFullYear();
 
const addBookContrGet=(req, res) => { 
    res.render("addBook",{
        pageTitle:'Dodawanie nowych książek',
        message:'',
        h1:"Wprowadzanie nowych książek:",
        year:year
        }); 
}; 
    
const addBookContrPost=(req, res) => { 
    return addBook(req, res);
};
 

module.exports ={addBookContrGet,addBookContrPost};