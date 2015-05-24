app.controller('privacyController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.getCssClass ="about-page";
    $rootScope.showHeader=true;
    
    $scope.init = function(){       
        var meta=document.getElementsByTagName("meta");
        for (var i=0; i<meta.length; i++) {
            if (meta[i].name.toLowerCase()=="description") {
                meta[i].content= "CloudBoost | Privacy Policy";
            }

            if (meta[i].name.toLowerCase()=="keywords") {
                meta[i].content= "partners, become a cloudboost partner,  baas, backend as a service, database as a service, hybrid database, cloudboost, search, realtime, storage, app storage, signup, cloudboost";
            }
        }

        document.title = "CloudBoost | Privacy Policy.";
        
        window.seojsSnapshotReady = true;
        
    };

 }]);