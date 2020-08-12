const express = require('express');
const app = express();
const fs = require("fs");
const jwt = require("jsonwebtoken");

//let sessionController = require("./src/db/controller/sessionController");
//let authController = require("./src/middleware/auth");
let controller = require("./src/controller/controller.js");

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   return next();
});

app.post('/login/:uname/:password', function (req, res){
   //Validate the user at the back end 
   let userName = req.params.uname;
   let password = req.params.password;
   if(!userName || !password)
      res.json('Username and password are required parameters');
   let stcReturn = controller.loginUser(userName, password);
   // provide the token if successfull
   if(stcReturn.success){
      let token = controller.loginUser();
      res.send(token);
   }
   //Error out in case of unsuccessful attempt a   t login
   else{
      res.json('error');
   }
   
});

app.get('/getComedyMovies', controller.isAuthorized,  function (req, res) {
   let initializePromise = controller.getComedyMovies();
   initializePromise.then(function(stcReturn) {
     // console.log(stcReturn);
       // provide the data if successful
      if(stcReturn.success){
         res.send(stcReturn);
      }
      //Error out in case of unsuccessful attempt
      //TODO i18n this error based on user language
      else{
         res.json('error');
      }
   });
})

app.get('/getHorrorMovies', controller.isAuthorized, function (req, res) {
   let initializePromise = controller.getHorrorMovies();
   initializePromise.then(function(stcReturn) {
       // provide the data if successful
      if(stcReturn.success){
         res.send(stcReturn);
      }
      //Error out in case of unsuccessful attempt
      //TODO i18n this error based on user language
      else{
         res.json('error');
      }
   });
})

app.get('/getRomanceMovies', controller.isAuthorized, function (req, res) {
   let initializePromise = controller.getRomanceMovies();
   initializePromise.then(function(stcReturn) {
       // provide the data if successful
      if(stcReturn.success){
         res.send(stcReturn);
      }
      //Error out in case of unsuccessful attempt
      //TODO i18n this error based on user language
      else{
         res.json('error');
      }
   });
})

app.get('/getAnimatedMovies', controller.isAuthorized, function (req, res) {
   let initializePromise = controller.getAnimatedMovies();
   initializePromise.then(function(stcReturn) {
       // provide the data if successful
      if(stcReturn.success){
         res.send(stcReturn);
      }
      //Error out in case of unsuccessful attempt
      //TODO i18n this error based on user language
      else{
         res.json('error');
      }
   });
})

app.get('/getActionMovies', controller.isAuthorized, function (req, res) {
   let initializePromise = controller.getActionMovies();
   initializePromise.then(function(stcReturn) {
       // provide the data if successful
      if(stcReturn.success){
         res.send(stcReturn);
      }
      //Error out in case of unsuccessful attempt
      //TODO i18n this error based on user language
      else{
         res.json('error');
      }
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://localhost:" + port)
})
