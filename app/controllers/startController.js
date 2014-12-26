app.controller('indexController',['$scope',function($scope){

	$scope.init = function(){
		
	};

	 $scope.toCta = function(){
    	$('html,body').animate({scrollTop: $('#cta').offset().top-200},500); //smooth scroll animation.
    };

 }]);
