const express = require('express');
const path = require('path');
const app = express();
const newsRoutes = require('./news');
const port = 3000; 

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/assets', express.static(path.join(__dirname, '../public')));
app.set("views", "views");
app.set("view engine", "hbs");
app.use('/', newsRoutes );

app.listen(port , () =>{
    console.log('app is listening in port ' + port);
});

