const express =require('express');

const app =express();
app.get('/',(req,res)=>{
    res.send('api working on dashboard');
});

app.listen(1000);