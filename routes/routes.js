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

router.get('/experts', function(req, res) {
  res.render('expertProgram');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/partners', function(req, res) {
  res.render('partner');
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

router.get('/service-level-agreement', function(req, res) {
  res.render('sla');
});

router.get('/tutorials', function(req, res) {
  res.render('tutorial');
});

module.exports = router;
