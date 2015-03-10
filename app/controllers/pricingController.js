app.controller('pricingController',['$scope',function($scope){
  $scope.getCssClass ="pricing-page";

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
		}

		document.title = "Pricing";
		
		$scope.htmlReady();
	};


 }]);
