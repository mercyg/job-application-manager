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
     //did you get accepted or pending or rejected
     status: {
       type: String
     },
     creator: {
       type: ObjectId,
       ref: "User",
       required: true
     }
})

module.exports = mongoose.model("Application", applicationSchema);
