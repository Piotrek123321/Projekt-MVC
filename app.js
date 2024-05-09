const express = require('express'); 
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
 
const homeRouter =require('./routes/home');
const addRouter =require('./routes/addBook');
const correctionRouter =require('./routes/correction');
const delRouter =require('./routes/del');
const displayRouter =require('./routes/display');
const opinionRouter =require('./routes/opinion');
const loginRouter=require('./routes/login');
 
app.use(cookieParser());
app.use(homeRouter); 
app.use(addRouter); 
app.use(correctionRouter); 
app.use(delRouter); 
app.use(displayRouter);
app.use(opinionRouter);
app.use(loginRouter);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
 
app.use((req, res, next) => {
    console.log(`Request ${req.method} on path ${req.url} ${new Date()}`);
    next();
});
 
app.use(express.static(path.join(__dirname, 'public')));  

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
  
app.listen(PORT, () => {
  console.log(`Serwer nasłuchuje na ${PORT}`);
});
