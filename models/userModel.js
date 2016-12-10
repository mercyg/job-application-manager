var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    lowerCase: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  userAddress: {
      state: String,
      address: String
  }
});

userSchema.pre("save", function(next){
   var user = this;
   if(!user.isModified("password")) return next();

   bcrypt.hash(user.password, 10, function(err, hash){
      if(err) return next(err);

      user.password = hash;
      next();
   })
})
userSchema.methods.withoutPassword = function(){
  var user = this.toObject;
  delete user.password;
  return user;
}


module.exports = mongoose.model("User", userSchema);