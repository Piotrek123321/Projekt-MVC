const {connection} = require('./db');


const correction = (req, res) => {
  const {id} = req.body;
  const query = `SELECT * FROM dane2 WHERE id = ?`;
  const values = [id];

  connection.query(query, values, (err, result) => {
      if (err) {
          console.error('Błąd podczas sprawdzania istnienia książki:', err);
          res.status(500).send('Błąd odczytu bazy danych');
          return;
      }
      else{
      if (result.length > 0) {
          const currentDate = new Date();
          const year = currentDate.getFullYear();
          const book = result[0];
          const {id, tytul, autor, rok, strony } = book;
          res.render("correction1",{
            pageTitle:'Baza książek korekty',
            message:'Zmień błędne dane :',
            book:book,
            h1:"Korekty:",
            year:year
            }); 
      } else {
        res.render("correction",{
            pageTitle:'Baza książek korekty',
            message:'Książka nie istnieje w bazie',
            h1:"Korekty:"
            }); 
      }
  }});
}
 


module.exports = correction;