const {connection} = require('./db');

const  del=(req,res)=>{
    
        const { id } = req.body; 
        const query = `SELECT * FROM dane2 WHERE id = ? `;
        const values = [id];
        connection.query(query , values, (err, result) => {
            if (err) {
                console.error('Błąd podczas sprawdzania istnienia książki:', err);
                res.status(500).send('Błąd odczytu z bazy danych');
                return;
            }
                
            if (result.length > 0 ) {
                const book = result[0];
                res.render("delBook",{
                    pageTitle:'Baza ksiązek usuwanie',
                    message:'',
                    h1:"Usuwanie książek:",
                    book:book
                    }); 
            } 
            else {
                res.render("del",{
                    pageTitle:'Baza książek usuwanie',
                    message:'Brak książki w bazie',
                    h1:"Usuwanie wybranej pozycji :"
                    }); 
             }
           
        });
    }

module.exports=del;
 
    