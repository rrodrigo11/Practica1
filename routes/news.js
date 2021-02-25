const express = require('express');
const fetch = require ('node-fetch');
const router = express.Router();
const path = require('path');//herramienta para dar solución a problemas de compatibilidad de rutas de archivos

router.get('/', (req,res,next)=>{
    if(!req.query){
        console.log('req vacio!');
        res.sendFile(path.join(__dirname, 'public', 'index.html' ));
    }else{
        console.log('req bueno!');
        next();
    }
},(req,res)=>{
    res.statusCode = 200;
    res.sendFile(path.join(__dirname,'..', 'public', 'index.html'));
    const params = req.query;
    fetch('https://newsapi.org/v2/everything?q=' + params.searching + '&apiKey=0d727f25d6c14c6db8f401844e5315e5')
    .then(function(response) {
        return response.json();
    }).then((data)=>{
        // console.log(data);
        // res.render();
        // module.exports = data;
    }).catch((err)=>{
    console.log(err);
    });
    res.end();
});

module.exports = router;