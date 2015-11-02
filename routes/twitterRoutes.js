
var express = require('express');
var app = express();
var Twitter = require('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": "nXk6rNn3wYCeYlw7EIbrKLpOh",
    "consumerSecret": "xrcRRGKGHfTOpJvuMJ9zDnNuVdF7b87FWdDfYbN0i328bQs3SO",
    "accessToken": "2819292446-kNy4jtqcOHcBhCJ4D5d6siqXaUy3Mmy9ndsyWo8",
    "accessTokenSecret": "giifFeiLQeGNoWVgH2pGursr9Aqd20B9ViPtxuxA4VkGx"
}
var twitter = new Twitter(config);

module.exports = function() {

    // routes
    app.get('/twitter/search', function(req,res,next) {

    	twitter.getSearch({'q':'@cloudboostio','count': 10}, function (err, response, body) {    		
		    return res.status(500).send(err); 
		  }, function (data) {
		    var obj=JSON.parse(data);    
		    //console.log(obj.statuses);

		    var returnJson={twitterFeed : obj.statuses};
		    return res.status(200).json(returnJson);		
		  });
    });

	app.get('/twitter/:tweetId', function(req,res,next) {
		var tweetId=req.params.tweetId;
		//tweetId=JSON.stringify(tweetId);		

	    twitter.getCustomApiCall('/statuses/oembed.json',{hide_media: true,id: tweetId}, function(err,response,body){
	    	  console.log(err);
	    	  return res.status(500).send(err); 
		    },function(newobj){
		      //console.log(JSON.parse(newobj));
		      return res.status(200).json(JSON.parse(newobj));		      
		    });	    
			   
	    });

    return app;
}


  