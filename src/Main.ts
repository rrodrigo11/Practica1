let caja_texto = document.getElementById("caja_texto");
let el_main = document.getElementById("main");
declare var Handlebars:any;

const templateSource = document.getElementById('grid').innerHTML;
const template = Handlebars.compile(templateSource);



let el_boton = document.getElementById("btn_search");
el_boton.onclick=function(){
    console.log("olamund");
};

document.getElementById("btn_search").addEventListener('click',function(){
    let keyword = (<HTMLInputElement> caja_texto).value;
    console.log("olamund");
    var url = 'http://newsapi.org/v2/everything?' +
    `q=${keyword}&` +
    'from=2021-02-14&' +
    'sortBy=popularity&' +
    'apiKey=0d727f25d6c14c6db8f401844e5315e5';
    var req = new Request(url);

    fetch(req)
    .then(function(response) {
        console.log(response.json());
})}
,false);

