app.controller('aboutController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.getCssClass ="about-page";
    $rootScope.showHeader=true;

    $scope.init = function(){        
    	var meta=document.getElementsByTagName("meta");
        for (var i=0; i<meta.length; i++) {
            if (meta[i].name.toLowerCase()=="description") {
                meta[i].content= "About us. Meet the HackerBay Mafia! ";
            }
        }

        document.title = "Meet the mafia.";

        $scope.htmlReady();
    };


 }]);
