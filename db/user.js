const mongoose=require('mongoose');
const usersSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
}) ;
let users= mongoose.model("users",usersSchema);
module.exports=users;