const express = require('express');
const path = require('path');
const app = express();

const dotenv = require('dotenv');

const {newsRoutes, userRoutes} = require('./routes');
const { User} = require('./models');

dotenv.config();

const port = process.env.PORT; 

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/assets', express.static(path.join(__dirname, '../public')));
app.set("views", "views");
app.set("view engine", "hbs");
app.use('/news', newsRoutes );
app.use('/users', userRoutes );

app.listen(port , () =>{
    console.log('app is listening in port ' + port);
});

