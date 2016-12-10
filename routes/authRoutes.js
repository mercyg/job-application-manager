var express = require("express");
var authRouter = express.Router();
var User = require("../models/userModel");
var jwt = require("jsonwebtoken");
var config = require("../config");


authRouter.post("/signup", function(req,res){
  User.find({userName: req.body.userName}, function(err, existingUser){
    if(err) return res.status(500).send(err);
    if(existingUser.length !== 0){
      return res.status(400).send({success: false, message: "The username is taken"})
    }

    var user = new User(req.body);
    user.save(function(err, newUser){
      if(err) return res.status(500).send(err);
      return res.send({success: true, message: "Registered a new user", user: newUser})
    })
  })
})

authRouter.post("/login", function(req, res){
  User.findOne({userName:req.body.userName, password: req.body.password}, function(err, user){
     if(err) return res.status(500).send(err);
     if(user === null){
       return res.status(401).send({success: false, message: "Username or password provided doesn't match anything in our system"})
     }else if(user){
       user.checkPassword(req.body.password, function(err, match){
         if(err) throw (err);
         if(!match) res.status(401).json({success: false, message: "Incorrect password"})
         else{
           var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});
           res.send({token: token, user: user.toObject(), success: true, message: "Here is your token"});
         }
       })
     }

  })
})

authRouter.post("/change-password", function(req, res){
  User.findById(req.user._id, function(err, user){
    if(err){
      res.status(500).send(err);
    }else{
       user.password = req.body.newPassword || user.password;
       user.save(function(err, user){
          res.send({success: true, user: user.withoutPassword()})
       })
    }
  })
})

module.exports = authRouter;
