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
       type: Boolean
     },
     phoneScreen:{
       type: String
     },
     technicalInterview: {
       type: String
     },
     codingChallege: {
       type: String
     },
     onSite: {
       type: String
     },
     offered: {
       type: String
     },
     //did you get accepted or pending or rejected
     creator: {
       type: ObjectId,
       ref: "User",
       required: true
     }
})

module.exports = mongoose.model("Application", applicationSchema);
