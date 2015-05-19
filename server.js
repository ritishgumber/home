
var express = require('express');
var app = express();
var request = require('request');

//var seojs = require('express-seojs');
//app.use(seojs('14f59vej5dr1mmx95pvzb9qlx'));

app.use(require('prerender-node').set('prerenderServiceUrl', 'http://service.prerender.io/').set('prerenderToken', '9I6PNQ4jxLzvPISvvUo7'));
app.use(express.static(__dirname));

app.get('/js-sdk/1.0', function(req, res) {

	request('https://raw.githubusercontent.com/CloudBoost/JavaScriptSDK/master/dist/1.0.0.js', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        res.header("content-type","text/javascript");
	        res.send(body);
	    }else{
	    	res.status(404).send('Sorry, we cannot find the SDK. For more info, Please visit https://docs.cloudboost.io');
	    }
	});

});

//This will ensure that all routing is handed over to AngularJS 
app.get('*', function(req, res){
  console.log(__dirname);
  res.sendFile(__dirname+'/index.html'); 
}); 

app.set('port', process.env.PORT || 1444);

//serve SDK. 


var server = app.listen(app.get('port'), function() {
	
});
