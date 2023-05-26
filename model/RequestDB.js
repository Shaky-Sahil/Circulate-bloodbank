//Server Database Connection
const mongoose = require("mongoose");
//Connecting Database
mongoose.connect("mongodb+srv://sahil:sahil@cluster0.n5jhj4v.mongodb.net/?retryWrites=true&w=majority")
//Schema Creation
const Schema = mongoose.Schema;
var requestSchema = new  Schema({
    requestName:String,
    requestAge:Number,
    requestEmail:String,
    requestPhone:Number,
    requestBlood:String,
    requestAilment:{type:String,default:'None'},
    requestCategory:String,
    requestUnit:Number
});
//4.Set up collections
RequestInfo = mongoose.model("request",requestSchema)
//5.Exporting
module.exports=RequestInfo;
