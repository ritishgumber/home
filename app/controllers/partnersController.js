app.controller('partnersController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.getCssClass ="features-page";
    $rootScope.showHeader=true;
    
    $scope.init = function(){       
        var meta=document.getElementsByTagName("meta");
        for (var i=0; i<meta.length; i++) {
            if (meta[i].name.toLowerCase()=="description") {
                meta[i].content= "CloudBoost Partners : Join the CloudBoost Partner Program to earn client revenue share and access exclusive resources.";
            }
        }

        document.title = "CloudBoost Partners.";
        
        
    };


 }]);
