let sessionValidator = require("../session/sessionValidator");
let authController = require("../middleware/auth");
let movieSelector = require("../db/selector/movieSelector");

module.exports = {
    loginUser: function(userName, password){
       return sessionValidator.loginUser(userName, password);
    },
    isAuthorized: function(req, res, next){
        return authController.isAuthorized(req, res, next);
    },
    getComedyMovies: function(req, res){
        return movieSelector.getComedyMovies(req, res);
    },
    getHorrorMovies: function(req, res){
        return movieSelector.getHorrorMovies(req, res);
    },
    getActionMovies: function(req, res){
        return movieSelector.getActionMovies(req, res);
    },
    getAnimatedMovies: function(req, res){
        return movieSelector.getAnimatedMovies(req, res);
    },
    getRomanceMovies: function(req, res){
        return movieSelector.getRomanceMovies(req, res);
    }


};