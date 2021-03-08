const user = require('../models/user');
const User = require('../models/user');

exports.getAll= (req,res)=>{
    User.find({}, (err, results)=>{
        console.log(results);
        res.send(results)
    })
}

exports.insertUser = (req,res)=>{
    if(req.file) res.end('User created');
    else res.end('Failed creating user');
    User.insert(req.body);
}

// exports.getbyEmail = (req,res)=>{
// Para un futuro no muy lejano
// }