const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app= express();

var middleGreeter = function (req,res,next){
    if(req.method==='GET') console.log('que pasa por acá');
    if(req.method==='POST') console.log('tomá poné esto');
    next();
};

app.use(middleGreeter);

app.listen('3000', function(){console.log('listening at 3000')});

nunjucks.configure('views', { noCache: true });

app.set('view engine', 'html');

app.engine('html', nunjucks.render);

app.use('/', routes);

nunjucks.render('index.html');
