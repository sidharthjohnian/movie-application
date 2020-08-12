const fs = require("fs");
const jwt = require("jsonwebtoken");

module.exports = {

getComedyMovies: function(req, res){
    let stcReturn = {success:'true', data: {}, errorMessage: ''};
    //mock the DB result by reading from the JSON file
    return new Promise((resolve, reject) => {
        //This currently mocks the DB response via JSON datasets
        //We can readily change this to use external APIs like TMDB, IMDB and Netflix and return the data
        fs.readFile(__dirname + "/../model/comedy.json", "utf-8", function (err, data) {
        if(err){
            stcReturn.success = false;
            stcReturn.errorMessage= err;
            resolve(stcReturn);
		}
		else {
            stcReturn.success = true;
            stcReturn.data = JSON.parse(data);
            resolve(stcReturn);
        }
     })
    });
},

getActionMovies: function(req, res){
    let stcReturn = {success:'true', data: {}, errorMessage: ''};
    //mock the DB result by reading from the JSON file
    return new Promise((resolve, reject) => {
        //This currently mocks the DB response via JSON datasets
        //We can readily change this to use external APIs like TMDB, IMDB and Netflix and return the data
        fs.readFile(__dirname + "/../model/action.json", "utf-8", function (err, data) {
        if(err){
            stcReturn.success = false;
            stcReturn.errorMessage= err;
            resolve(stcReturn);
		}
		else {
            stcReturn.success = true;
            stcReturn.data = JSON.parse(data);
            resolve(stcReturn);
        }
     })
    });
},

getHorrorMovies: function(req, res){
    let stcReturn = {success:'true', data: {}, errorMessage: ''};
    //mock the DB result by reading from the JSON file
    return new Promise((resolve, reject) => {
        //This currently mocks the DB response via JSON datasets
        //We can readily change this to use external APIs like TMDB, IMDB and Netflix and return the data
        fs.readFile(__dirname + "/../model/horror.json", "utf-8", function (err, data) {
        if(err){
            stcReturn.success = false;
            stcReturn.errorMessage= err;
            resolve(stcReturn);
		}
		else {
            stcReturn.success = true;
            stcReturn.data = JSON.parse(data);
            resolve(stcReturn);
        }
     })
    });
},

getAnimatedMovies: function(req, res){
    let stcReturn = {success:'true', data: {}, errorMessage: ''};
    //mock the DB result by reading from the JSON file
    return new Promise((resolve, reject) => {
        //This currently mocks the DB response via JSON datasets
        //We can readily change this to use external APIs like TMDB, IMDB and Netflix and return the data
        fs.readFile(__dirname + "/../model/animated.json", "utf-8", function (err, data) {
        if(err){
            stcReturn.success = false;
            stcReturn.errorMessage= err;
            resolve(stcReturn);
		}
		else {
            stcReturn.success = true;
            stcReturn.data = JSON.parse(data);
            resolve(stcReturn);
        }
     })
    });
},

getRomanceMovies: function(req, res){
    let stcReturn = {success:'true', data: {}, errorMessage: ''};
    //mock the DB result by reading from the JSON file
    return new Promise((resolve, reject) => {
        //This currently mocks the DB response via JSON datasets
        //We can readily change this to use external APIs like TMDB, IMDB and Netflix and return the data
        fs.readFile(__dirname + "/../model/romance.json", "utf-8", function (err, data) {
        if(err){
            stcReturn.success = false;
            stcReturn.errorMessage= err;
            resolve(stcReturn);
		}
		else {
            stcReturn.success = true;
            stcReturn.data = JSON.parse(data);
            resolve(stcReturn);
        }
     })
    });
}

}