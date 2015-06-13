var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/quickstart', function(req, res) {
  res.render('quickstart');
});

router.get('/pricing', function(req, res) {
  res.render('pricing');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/patners', function(req, res) {
  res.render('patner');
});

router.get('/joinus', function(req, res) {
  res.render('joinus');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.get('/terms', function(req, res) {
  res.render('terms');
});

router.get('/privacy', function(req, res) {
  res.render('privacy');
});

module.exports = router;
