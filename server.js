
var express = require('express');
var app = express();

var seojs = require('express-seojs');
app.use(seojs('14f59vej5dr1mmx95pvzb9qlx'));

app.use('/',express.static(__dirname));

//app.use(require('prerender-node').set('prerenderToken', 'nYvFcfW9ZFKOxaTP8Vsj'));

app.set('port', process.env.PORT || 1444);

var server = app.listen(app.get('port'), function() {
	
});
