const {connection} = require('./db');


const opinion1 = (req, res) => {
     const { id, opinia } = req.body;
        let op=opinia;
        const query = `SELECT * FROM dane2 WHERE id = ?`;
        const values = [id];
        connection.query(query, values, (err, result) => {
            if (err) {
                console.error('Błąd podczas sprawdzania istnienia książki:', err);
                res.status(500).send('Błąd odczytu bazy danych');
                return;
            }  
    
            if (result.length > 0) {
 
            const book = result[0];  
            const {id, tytul, autor, rok, strony, opinia ,ilosc } = book;

            let pomOpinia = ((parseInt(opinia) * parseInt(ilosc) + parseInt(op)) / ( parseInt(ilosc) + 1)).toFixed(2);
            let pomIlosc=  parseInt(ilosc)+1;          
          
           
              const updateQuery = `UPDATE dane2 SET opinia = ?, ilosc = ?  WHERE id = ?`;
              const updateValues = [pomOpinia, pomIlosc,id];
              connection.query(updateQuery, updateValues, (err, result) => {
                if (err) {
                    console.error('Błąd podczas dodawania opinii:', err);
                    res.status(500).send('Błąd podczas dodawania opinii:');
                    return;
                }
                res.render("opinion1",{
                  pageTitle:'Baza Książek Opinie',
                  h1:"Opinie:",
                  message:'Opinia została dodana'
                  }); ;
                });
            }
            else {
              res.render("opinion1",{
                pageTitle:'Baza Książek Opinie',
                h1:"Opinie:",
                message:'Brak w bazie książki do której chcesz dodać opinię'
                }); ;
            }
          
       
        });

}
  module.exports = opinion1;