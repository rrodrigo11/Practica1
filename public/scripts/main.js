"use script";
//Definicion de variables Practica 1
var btn = document.getElementById("btn_search");
var txt = document.getElementById("caja_texto");
var grid = document.getElementById('grid');
const templateSource = document.getElementById('grid').innerHTML;
const template = Handlebars.compile(templateSource);
// var tmp = (<HTMLInputElement>document.getElementById("caja_texto")).value;
var tmp = document.getElementById("caja_texto").value;
console.log(tmp);
// const data = require('../../routes/news');
//Definicion de métodos Practica 1
// btn.addEventListener('click',()=>{ 
// var tmp = (<HTMLInputElement>document.getElementById("caja_texto")).value;
// var url = `https://newsapi.org/v2/everything?q=${tmp}&apiKey=0d727f25d6c14c6db8f401844e5315e5`;
// var req = new Request(url);
//     fetch(req)
//     .then(function(response) {
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
// document.getElementById('grid').innerHTML = template({
//     news : data.articles
// });
//     }).catch((err)=>{
//     console.log(err);
//     });
//     grid.style.display = "flex";
// });
//Funcion de actualizacion de html desde endpoits
// document.getElementById('grid').innerHTML = template({
//     news: data.articles
// });
