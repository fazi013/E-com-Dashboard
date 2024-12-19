const mongoose=require('mongoose');
const productSchema= new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userid:String,
    company:String
}) ;
let product= mongoose.model("products",productSchema);
module.exports=product;