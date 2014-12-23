app.controller('pricingController',['$scope',function($scope){
  $scope.getCssClass ="pricing-page";

  $scope.faqExpand = function(id){
  	if($('#'+id).hasClass( "in" )){
  		$('#'+id).removeClass( "in" );
  	}else{
  		$('#'+id).addClass( "in" );
  	}
  };


 }]);
