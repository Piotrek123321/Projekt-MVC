const {connection} = require('./db');
   
const   display=(req,res)=>{
  const {sortowanie, autor   } = req.body;
  if (sortowanie =="brak" && autor=='')
    { const query = 'SELECT * FROM dane2';
      const values = [];
      return displayEnd(req,res,query,values);
    }
   else if (autor!='')
    { const query = 'SELECT * FROM dane2  WHERE  autor = ?  ORDER BY tytul';
      const values = [autor];
      return displayEnd(req,res,query,values);
    } else if(sortowanie=='autor')
      {const query = 'SELECT * FROM dane2 ORDER BY autor';
      const values = [];
      return displayEnd(req,res,query,values);}
      else 
      {const query = 'SELECT * FROM dane2 ORDER BY tytul';
      const values = [];
      return displayEnd(req,res,query,values);
      };
    };

const   displayEnd=(req,res,query, values)=>{
    connection.query( query, values, (err, results) => {

        if (err) {
            console.error('Błąd podczas sprawdzania istnienia książki:', err);
            res.status(500).send('Błąd odczytu bazy danych');
            return;
        } 
 
     date=results
     res.render("displayBook",{
        pageTitle:'Baza książek wyświetlanie ',
        h1:"Lista książek w elektronicznej bazie:",
        date:date
        }); 
       
    });
}

 
 
module.exports=display;