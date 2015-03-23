app.controller('contactController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.getCssClass ="contact-page";
    $rootScope.showHeader=true;
    
    $scope.init = function(){        
    	var meta=document.getElementsByTagName("meta");
        for (var i=0; i<meta.length; i++) {
            if (meta[i].name.toLowerCase()=="description") {
                meta[i].content= "Contact us. We're listening.  ";
            }
        }

        document.title = "Contact us";

        $scope.htmlReady();
    };
 }]);
