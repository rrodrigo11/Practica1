const express = require('express');
const app = express();
const newsRoutes = require('./routes/news');
// const cssroutes = require('./public/sass')
const port = 3000; 
const path = require('path');

app.use('/', newsRoutes, );
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, '/public')));

app.listen(port , () =>{
    console.log('app is listening in port ' + port);
});

