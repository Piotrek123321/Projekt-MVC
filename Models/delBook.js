const {connection} = require('./db');

const  del1=(req,res)=>{   
                const bookId = req.params.bookId
                const query = `DELETE FROM dane2 WHERE id = ?`;  
                const values = [bookId];
                connection.query( query , values, (err, result) => {
                    if (err) {
                        console.error('Błąd podczas usuwania książki:', err);
                        return;
                    }
                    res.status(200).end();
                });
};
                  

module.exports=del1;
 