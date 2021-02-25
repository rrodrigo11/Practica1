const path = require('path');
const NewsAPI = require('newsapi');
const { response } = require('express');
const API_KEY = "0d727f25d6c14c6db8f401844e5315e5";
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