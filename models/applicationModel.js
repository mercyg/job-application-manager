var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


var applicationSchema = new Schema({
     companyName :{
       type: String
     },
     contact : {
       type: Number
     },
     email: {
       type: String
     },
     dateApplied: {
       type: Date
     },
     //is it cover letter or resume or both
     applicationSummary: {
       type: String
     },
     //did you follow up or not
     followUp : {
       type: String
     },
      phoneScreen: {
          type: String,
          default: null
        },
        technicalInterview: {
          type: String,
          default: null
        },
        codingChallege: {
          type: String,
          default: null
        },
        onSite: {
          type: String,
          default: null
        },
        offered: {
          type: String,
          default: null
        },

     //did you get accepted or pending or rejected
     creator: {
       type: ObjectId,
       ref: "User",
       required: true
     }
})

module.exports = mongoose.model("Application", applicationSchema);
