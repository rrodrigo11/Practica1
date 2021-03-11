const User = require('../models/user');
const multer = require('multer');
const path = require("path")

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', '..', 'public', 'images'));
    },
    filename: (req, file, cb) => {
        console.log('File: ', file);
        cb(null, file.originalname);
    }
});

const fileFilters = (req, file, cb) => {
    const flag = file.mimetype.startsWith('image');
    cb(null, flag);
};

const uploadFile = multer({
    storage: multerStorage,
    fileFilter: fileFilters
});

exports.getAll= (req,res)=>{
    User.find({}, (err, results)=>{
        console.log(results);
        res.send(results)
    })
}
exports.uploadPhoto = uploadFile.single('profilePic');   
exports.insertUser = (req,res)=>{
    let userbody = {}
    console.log(req.body);
    if(req.file){
        userbody = req.body;
        userbody.profilePic = path.join(__dirname, '..', '..', 'public', 'images', req.file.filename);
        console.log(userbody);
        User.insert(userbody);
        res.end('User inserted');
    }
    else{
         res.end('Failed creating user');
        // console.log(res);
    }
}

exports.renderUser = (req, res) => {
    res.render("user_file");
}

// exports.getbyEmail = (req,res)=>{
// Para un futuro no muy lejano
// }