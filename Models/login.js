 
const {connection} = require('./db');
 const path = require('path');
 const bodyParser = require('body-parser');
 const jwt = require('jsonwebtoken');
 const key="gsfsfFFGTNJJHGDCBK_HGFCF13567#kjdjkefkl_jnkmfnewlnf83u7yhb6gdkp!!nvnls"
 
 const login = (req, res) => {
    const { email, password } = req.body;
  
    //   weryfikacja użytkownika
    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
      if (err) {
        console.error('Błąd podczas wykonywania zapytania MySQL:', err);
        res.status(500).send('Błąd odczytu bazy danych');
        return;
      }
     else{
      if (results.length > 0) {
        const user = results[0];
    //Token
        const token = jwt.sign({ userId: user.id }, key, { expiresIn: '15m' });
    
        res.cookie('authToken', token, { maxAge: 900000, httpOnly: true });
        res.cookie('userId', user.id, { maxAge: 900000, httpOnly: true });
        
        res.render("home",{
            pageTitle:'Baza Książek elektronicznych',
            h1:"Baza Książek elektronicznych",
            }); 
        
       
      } else {
        console.log('Invalid email or password');
        res.render("authorizeClient",{
          pageTitle:'Kantor logowanie',
          message:"Niepoprawny login lub hasło. Zaloguj się ponownie",
          h1:'Baza Książek Logowanie:'
          });
      }
    }});
};


module.exports =login;