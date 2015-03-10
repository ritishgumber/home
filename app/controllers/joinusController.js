app.controller('joinusController',['$scope',function($scope){
    $scope.getCssClass ="blog-page";

    $scope.init = function(){

    	var meta=document.getElementsByTagName("meta");
    	
        for (var i=0; i<meta.length; i++) {
            if (meta[i].name.toLowerCase()=="description") {
                meta[i].content= "CloudBoost Careers : Join us and help us change the world. ";
            }
        }

        document.title = "Be one of us. Join the mafia.";

        $scope.htmlReady();
    };

 }]);
