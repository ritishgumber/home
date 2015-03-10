app.controller('indexController',['$scope',function($scope){

	$scope.init = function(){

		var meta=document.getElementsByTagName("meta");
		for (var i=0; i<meta.length; i++) {
		    if (meta[i].name.toLowerCase()=="description") {
		        meta[i].content= "CloudBoost is one complete backend and storage solution for your apps which does data-storage, search and realtime notifications.";
		    }
		}

		document.title = "CloudBoost : Complete backend and storage solution for your apps.";
		
		$scope.htmlReady();
	};

	$scope.toCta = function(){
    	$('html,body').animate({scrollTop: $('#cta').offset().top-200},500); //smooth scroll animation.
    };

 }]);
