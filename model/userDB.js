//Server Database Connection
const mongoose = require("mongoose");
//Connecting Database
mongoose.connect("mongodb+srv://sahil:sahil@cluster0.n5jhj4v.mongodb.net/?retryWrites=true&w=majority")
//Schema Creation
const Schema = mongoose.Schema;
var userSchema = new  Schema({
    userfName:String,
    userlName:String,
    userGender:String,
    userAge:Number,
    userEmail:String,
    userPassword:String,
    isAdmin:Boolean
});
//4.Set up collections
UserInfo = mongoose.model("user",userSchema)
//5.Exporting
module.exports=UserInfo;
