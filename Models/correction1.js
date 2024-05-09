const {connection} = require('./db');


const correction1 = (req, res) => {
    const { tytul, autor, rok, strony } = req.body;
    const bookId = req.params.bookId;

    const updateQuery = `UPDATE dane2 SET tytul = ?, autor = ?, rok = ?, strony = ? WHERE id = ?`;
    const updateValues = [tytul, autor, rok, strony, bookId];
  
    connection.query(updateQuery, updateValues, (err, result) => {
        if (err) {
            console.error('Błąd podczas aktualizacji danych książki:', err);
            res.status(500).send('Błąd podczas aktualizacji danych książki');
            return;
        }
  
        res.render("correction",{
            pageTitle:'Baza książek korekty',
            message:'Dane książki zostały zaktualizowane',
            h1:"Korekty:"
            }); 
    });
  }
     

  module.exports = correction1;