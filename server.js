
var express = require('express');
var app = express();

app.use(require('prerender-node').set('prerenderToken', '9I6PNQ4jxLzvPISvvUo7'));
app.use(express.static(__dirname));

//This will ensure that all routing is handed over to AngularJS 
app.get('*', function(req, res){
	console.log(__dirname);
  res.sendFile(__dirname+'/index.html'); 
}); 

app.set('port', process.env.PORT || 1444);

var server = app.listen(app.get('port'), function() {
	
});
