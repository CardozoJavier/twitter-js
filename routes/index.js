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



module.exports = router;