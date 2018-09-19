const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/stylesheets/style.css', function (req, res) {
    res.sendFile('/home/javi/Desktop/Bootcamp/twitter-js/public');
}); 

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  console.log(name);
  var list = tweetBank.find( { name: name } );
  console.log(list);
  res.render( 'index', { tweets: list, showForm: true, nombre:name } );
});

router.get('/tweets/:id', function(req, res) {
  var id = Number(req.params.id);
  //console.log(id);
  var list = tweetBank.find( { uID: id } );
  console.log(list);
  res.render( 'index', { tweets: list } );
});

router.post('/', function(req, res) {
  var newPost = req.body;
  tweetBank.add( newPost.name, newPost.content, tweetBank.getID());
  console.log(tweetBank.data);
  res.redirect('/');
});

module.exports = router;