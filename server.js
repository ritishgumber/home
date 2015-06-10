
var express = require('express');
var app = express();
var request = require('request');
var path = require('path');

//Convert the Content
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
//Convert the Content
/****************************************************************************************************/

//Routers
var routes = require('./routes/routes');

//View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

//Ending
app.set('port', process.env.PORT || 1444);
var server = app.listen(app.get('port'), function() {	
});
