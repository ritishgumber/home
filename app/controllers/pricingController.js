app.controller('pricingController',['$scope','$rootScope',function($scope,$rootScope){
  $scope.getCssClass ="pricing-page";
  $rootScope.showHeader=true;

  $scope.faqExpand = function(id){
  	if($('#'+id).hasClass( "in" )){
  		$('#'+id).removeClass( "in" );
  	}else{
  		$('#'+id).addClass( "in" );
  	}
  };

  $scope.init = function(){    
  	var meta=document.getElementsByTagName("meta");
		for (var i=0; i<meta.length; i++) {
		    if (meta[i].name.toLowerCase()=="description") {
		        meta[i].content= "CloudBoost Pricing. Free plan to begin with and pay as you go as you scale.  ";
		    }

         if (meta[i].name.toLowerCase()=="keywords") {
            meta[i].content= "pricing, baas, backend as a service, database as a service, hybrid database, cloudboost, search, realtime, storage, app storage, signup, cloudboost";
        }
		}

		document.title = "Pricing";
		
		$scope.htmlReady();
	};


 }]);
