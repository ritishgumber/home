
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Convert the Content
//For Production SDK
app.get('/js-sdk/:id', function(req, res) {

	request('https://raw.githubusercontent.com/CloudBoost/JavaScriptSDK/master/dist/'+req.params.id, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        res.header("content-type","text/javascript");
	        res.send(body);
	    }else{
	    	res.status(404).send('Sorry, we cannot find the SDK. For more info, Please visit https://docs.cloudboost.io');
	    }
	});

});
//For Developement SDK
app.get('/js-sdk-development/:id', function(req, res) {

	request('https://raw.githubusercontent.com/CloudBoost/JavaScriptSDK/development/dist/'+req.params.id, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        res.header("content-type","text/javascript");
	        res.send(body);
	    }else{
	    	res.status(404).send('Sorry, we cannot find the SDK. For more info, Please visit https://docs.cloudboost.io');
	    }
	});

});
//Convert the Content
/****************************************************************************************************/

//Routers
var routes = require('./routes/routes');
var twitterRoutes=require('./routes/twitterRoutes')();

//View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/', twitterRoutes);

//Ending
app.set('port', process.env.PORT || 1444);
var server = app.listen(app.get('port'), function() {	
	console.log("CBLanding started on PORT:"+app.get('port'));
});
