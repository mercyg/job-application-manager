var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
//var expressJwt = require("express-jwt");
var config = require("./config");
var logger = require("morgan");


var port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")))
app.use(logger("dev"));
//mongoose.Promise = global.Promise;

mongoose.connect(config.database, function(err){
  if(err) throw err;
  console.log("Sucessfully connected to the database");

});

app.listen(port, function(){
  console.log("Server is listening on port " + port);
});
