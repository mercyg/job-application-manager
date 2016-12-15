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
              res.status(201).send(newApplication);
            }
         })
   })
 applicationRoute.route("/applied")
      .get(function(req,res){
        Application.find().distinct('user_id').count(function (err, count) {
             res.send({count: count})
     });
  })


applicationRoute.route("/onsitecount")
   .get(function(req,res){
      Application.count({onSite: {$ne:null}, creator: req.user}, function(err, count){
         res.send({count: count})
      })
   })
applicationRoute.route("/codingchallege")
      .get(function(req,res){
         Application.count({codingChallege: {$ne:null}, creator: req.user}, function(err, count){
            res.send({count: count})
         })
      })
applicationRoute.route("/technical")
            .get(function(req,res){
               Application.count({technicalInterview: {$ne:null}, creator: req.user}, function(err, count){
                  res.send({count: count})
               })
            })

module.exports = applicationRoute;
