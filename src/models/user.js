const Database = require('./database');

class User extends Database{
    constructor(){
        console.log("user constructor");
        super();
        this.useCollection('users');
    }


}

module.exports = new User();