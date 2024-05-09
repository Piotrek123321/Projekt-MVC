const {connection} = require('./db');

const  addBook=(req,res)=>{
        const { tytul, autor, rok, strony  } = req.body;
        const  opinia=0;
        const  ilosc=0;
        const currentDate = new Date();
        const year = currentDate.getFullYear();

        // Sprawdzenie, czy istnieje już rekord o podanych tytule i autorze
        const query = `SELECT * FROM dane2 WHERE tytul = ? AND autor = ?`;
        const values = [tytul, autor];

        connection.query( query, values, (err, result) => {
            
            if (err) {
                console.error('Błąd podczas sprawdzania istnienia książki:', err);
                res.status(500).send('Błąd odczytu bazy danych');
                return;
            } 
             
            if ( result.length > 0) {
                console.log('Książka o podanym tytule i autorze już istnieje w bazie danych');
                res.render("addBook",{
                    pageTitle:'Dodawanie nowych książek',
                    message:'Taka pozycja istnieje już w bazie',
                    h1:"Wprowadzanie nowych książek:",
                    year:year
                    }); 
            }
            else{
            const insertQuery = `INSERT INTO dane2 (tytul, autor, rok, strony, opinia, ilosc) VALUES (?, ?, ?, ?, ?, ?)`;
            const insertValues = [tytul, autor, rok, strony, opinia,ilosc];
    
            connection.query(insertQuery, insertValues, (err, result) => {
                if (err) {
                    console.error('Błąd podczas dodawania książki:', err);
                    return;
                }
                else{
                console.log('Książka została pomyślnie dodana do bazy danych');
               res.render("addBook",{
                pageTitle:'Dodawanie nowych książek',
                message:'Książka została dodana do bazy.',
                h1:"Wprowadzanie nowych książek:",
                year:year
                }); 
            }});
        }});
    }
    
    module.exports=addBook;