const fs = require("fs");
const jwt = require("jsonwebtoken");

module.exports = {
     loginUser: function(userName, password){
        let stcReturn = {success:'true', token: ''};

        /* TO DO validate the user credentials with the database*/
        
        //If everything alright generate the token
        let privateKey = fs.readFileSync(__dirname + '/private.pem', 'utf-8');
        stcReturn.token = jwt.sign({"verified": "verified login"}, privateKey, {algorithm: "HS256"});
        return stcReturn;
    }
};
