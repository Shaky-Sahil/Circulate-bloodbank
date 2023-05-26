//Server Database Connection
const mongoose = require("mongoose");
//Connecting Database
mongoose.connect("mongodb+srv://sahil:sahil@cluster0.n5jhj4v.mongodb.net/?retryWrites=true&w=majority")
//Schema Creation
const Schema = mongoose.Schema;
var DonorSchema = new  Schema({
    userName:String,
    userGender:String,
    userAge:Number,
    userPhone:Number,
    bloodGroup:String,
    userEmail:String,
    userPassword:String,
    isAdmin:Boolean
});
//4.Set up collections
DonorInfo = mongoose.model("Donors",DonorSchema)
//5.Exporting
module.exports=DonorInfo;
