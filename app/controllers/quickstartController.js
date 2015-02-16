app.controller('quickstartController',['$scope',function($scope){
    $scope.getCssClass ="features-page";

    $scope.init = function(){
		$('#feature-1').show();
		$('#feature-2').hide();
		$('#feature-4').hide();
    }

    $scope.switchFeature = function(id){
    	//remove active classes. 
    	$('#feature1List').removeClass('active');
    	$('#feature2List').removeClass('active');
    	$('#feature4List').removeClass('active');

    	$('#feature'+id+'List').addClass('active');

    	//switch tabs
    	$('#feature-1').hide();
		$('#feature-2').hide();
		$('#feature-4').hide();

    	$('#feature-'+id).show();

    };

 }]);
