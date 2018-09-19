const express = require('express');
const nunjucks = require('nunjucks');

const app= express();

var middleGreeter = function (req,res,next){
    if(req.method==='GET') console.log('que pasa por acá');
    if(req.method==='POST') console.log('tomá poné esto');
    next();
};

app.use(middleGreeter);

app.listen('3030', function(){console.log('listening at 3030')});

nunjucks.configure('views', { noCache: true });

app.set('view engine', 'html');

app.engine('html', nunjucks.render);

var people=[{name: 'Gandalf'}, {name: 'Frodo'}, { name: 'Hermione'}];

console.log(people);

app.get('/',function(req, res){
    res.render('index',{title:'Un ejemplo', p:'Esto es un esqueleto de un template.', people:people});
});



nunjucks.render('index.html');
