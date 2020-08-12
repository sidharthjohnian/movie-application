const fs = require("fs");
const jwt = require("jsonwebtoken");

module.exports = {
//middleware function to verify the token
 isAuthorized: function(req, res, next) {
    console.log('inside auth');
    if(typeof req.headers.authorization !== "undefined") {
       let token = req.headers.authorization.split(" ")[1];
       console.log(token);
       //console.log(token);
       let privateKey = fs.readFileSync(__dirname + '/../session/private.pem', "utf8");
 
       jwt.verify(token, privateKey, {algorithm:"HS256"}, (err, decoded) => {
 
          //if there is an error
          if(err) {
             res.status(500).json({error: "Not authorized"});
          }
 
          console.log(decoded);
 
          return next();
       })
    }else{
        console.log('did not recive auth header')
        res.status(500).json({message: "Not authorized. Please login and try again with the token"});
    } 
 
 
 }
};
