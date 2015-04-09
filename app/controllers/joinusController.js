app.controller('joinusController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.getCssClass ="blog-page";
    $rootScope.showHeader=false;
    
    $scope.init = function(){        
    	var meta=document.getElementsByTagName("meta");
    	
        for (var i=0; i<meta.length; i++) {
            if (meta[i].name.toLowerCase()=="description") {
                meta[i].content= "CloudBoost Careers : Join us and help us change the world. ";
            }

            if (meta[i].name.toLowerCase()=="keywords") {
                meta[i].content= "work at cloudboost, cloudboost careers , baas, backend as a service, database as a service, hybrid database, cloudboost, search, realtime, storage, app storage, signup, cloudboost";
            }
        }

        document.title = "Be one of us. Join the mafia.";

        window.seojsSnapshotReady = true;
    };

 }]);
