var express = require('express');
var router = express.Router();
var Q = require('q');
var request = require('request');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/quickstart', function(req, res) {
  res.render('quickstart');
});

router.get('/pricing', function(req, res) {
  res.render('pricing');
});

router.get('/development-service', function(req, res) {
  res.render('development-service');
});

router.get('/software-development-service', function(req, res) {
  res.render('development-service');
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

router.get('/partners/:id', function(req, res) {
    var patnerId=req.params.id;

    if(!patnerId){
      return res.render('partner');
    }

    if(patnerId){

      _getResultsById(patnerId).then(function(results){
        res.render('partnerDetails',{
          partnerDetails:results
        });
      },function(error){
        res.render('partner');
      });

    }
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

router.get('/compare', function(req, res) {
  res.render('compare');
});

module.exports = router;


/***********************Pinging Frotend Services*********************************/

function _getResultsById(partnerId){

  console.log("Fetch results by typeformId");

  var deferred = Q.defer();

  try{

    var url = "https://service.cloudboost.io/partner/item/"+partnerId;

    request.get(url,function(err,response,body){

        if(err || response.statusCode === 500 || response.statusCode === 400 || body === 'Error'){
          console.log("Error on Fetch results by partnerId");
          deferred.reject(err);
        }else {

          console.log("Success on Fetch results by partnerId");

          try{
            var respBody=JSON.parse(body);
            deferred.resolve(respBody);
          }catch(e){
            deferred.reject(e);
          }

        }
    });

  }catch(err){
    deferred.reject(err)
  }

  return deferred.promise;
}
