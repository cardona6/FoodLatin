const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');



//settings
app.set('port', 4000);
app.set('views', path.join(__dirname,'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  }));
app.set('view engine', '.hbs', 'ejs');

//middlewares

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//listening the server
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});