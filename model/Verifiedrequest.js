//Server Database Connection
const mongoose = require("mongoose");
//Connecting Database
mongoose.connect("mongodb+srv://sahil:sahil@cluster0.n5jhj4v.mongodb.net/?retryWrites=true&w=majority")
//Schema Creation
const Schema = mongoose.Schema;
var verifiedrequestSchema = new  Schema({
    requestName:String,
    requestAge:Number,
    requestEmail:String,
    requestPhone:Number,
    requestBlood:String,
    requestAilment:String,
    requestUnit:Number
});
//4.Set up collections
VerRequestInfo = mongoose.model("verifiedrequest",verifiedrequestSchema)
//5.Exporting
module.exports=VerRequestInfo;
