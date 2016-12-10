var express = require("express");
var applicationRoute = express.Router();
var User = require("../models/userModel");
var Application = require("../models/applicationModel");

applicationRoute.route("/")
   .get(function(req, res){
        Application.find({
          creator: req.user._id
        }, function(err, application){
           if(err) res.status(500).send(err);
           res.send(application)
        })
   })

   .post(function(req, res){
         var application = new Application(req.body);

         application.creator = req.user._id;
         application.save(function(err, newApplication){
            if(err){
              res.status(500).send(err);
            }else{
              res.staus(201).send(newApplication);
            }
         })
   })


module.exports = applicationRoute;
