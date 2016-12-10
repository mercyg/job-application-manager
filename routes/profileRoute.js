var express = require("express");
var profileRoute = express.Router();
var User = require("../models/userModel");


profileRoute.route("/")
    .get(function(req, res){
       User.findById({_id: req.user._id}, function(err, user){
          if(err) res.status(500).send(err);
          res.send(user);
       })
    })

profileRoute.route("/:userId")
  .put(function(req, res){
     User.findByIdAndUpdate(req.params.userId, req.body, {new: true}, function(err, updateUser){
        if(err){
          res.status(500).send(err);
        }else{
          res.send(updateUser)
        }
     })
  })

module.exports = profileRoute;
