const NewsAPI = require('newsapi');
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;
const newsapi = new NewsAPI(API_KEY);

exports.renderaichon = (req, res)=>{
    res.render("index");
}
exports.getNews= (req,res)=>{
    // console.log(req);
    const search = req.body.searching;
    newsapi.v2.everything({
        q:search,
        sortBy: 'relevancy'
    }).then(responser =>{
        // console.log(res.articles);
        res.render("index",{
            news: responser.articles
        })
    }).catch((err) =>{
        console.log(err);
    });
}