"use script";
var btn = document.getElementById("btn_search");
var txt = document.getElementById("caja_texto");
var grid = document.getElementById('grid');
//declare var Handlebars:any; //solución temporal a la falta de libreria Handlebars
const templateSource = document.getElementById('grid').innerHTML;
const template = Handlebars.compile(templateSource);



btn.addEventListener('click',()=>{ 
    var tmp = (<HTMLInputElement>document.getElementById("caja_texto")).value;
    var url = `https://newsapi.org/v2/everything?q=${tmp}&apiKey=0d727f25d6c14c6db8f401844e5315e5`;
    var req = new Request(url);
    fetch(req)
    .then(function(response) {
        return response.json();
    }).then((data)=>{
        console.log(data);
        document.getElementById('grid').innerHTML = template({
            news : data.articles
        });
    }).catch((err)=>{
    console.log(err);
    });
    grid.style.display = "flex";
});

 


