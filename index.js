const express =require('express');
const cors = require('cors');
require('./db/config');
const users =require ('./db/user');
const product =require('./db/product');
const app =express();
app.use(cors());
app.use(express.json());
app.get('/',async(req,res)=>{
    let data =await users.find();
    res.send(data);
    
});
app.post('/register',async(req,res)=>{
    let user =new users(req.body);
    let result =await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

app.post ('/login',async(req,res)=>{
    if(req.body.email &&req.body.password){
        let user = await users.findOne(req.body);
        user = user.toObject();
    delete user.password;
 if (user){
    res.send(user);
 }else{
    res.send({result:'Record not Found'});
 }
    }else{
        res.send({result:'Record not Found'});
    }
 
});

app.post("/add-product",async(req,res)=>{
    let products=new product(req.body);
    let result = await products.save();
    res.send(result);

});


app.listen(1000);