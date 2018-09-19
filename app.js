const express = require('express');

const app= express();

var middleGreeter = function (req,res,next){
    if(req.method==='GET') console.log('que pasa por acá');
    if(req.method==='POST') console.log('tomá poné esto');
    next();
};

app.use(middleGreeter);

app.listen('3030', function(){console.log('listening at 3030')});

app.get('/',function(req, res){
    res.send('hola');
});
