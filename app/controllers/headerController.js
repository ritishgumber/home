app.controller('headerController',['$scope','$location',function($scope,$location){
	
    $scope.toCta = function(){
    	$('html,body').animate({scrollTop: $('#cta').offset().top-200},500); //smooth scroll animation.
    };

    $scope.isActive = function(route) {
        return route === $location.path();
    };

    $scope.navigate = function(loc){
    	window.location.href = loc;
    	location.reload();
    };

 }]);
