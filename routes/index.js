const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/styles.css', function (req, res) {
    res.sendFile( '/home/fersiri/twitterjs/public/stylesheets/style.css');
}); 

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  console.log(name);
  var list = tweetBank.find( { name: name } );
  console.log(list);
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:id', function(req, res) {
  var id = Number(req.params.id);
  console.log(id);
  var list = tweetBank.find( { uID: id } );
  console.log(list);
  res.render( 'index', { tweets: list } );
});

module.exports = router;