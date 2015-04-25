app.controller('contactController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.getCssClass ="contact-page";
    $rootScope.showHeader=true;
    
    $scope.init = function(){        
    	var meta=document.getElementsByTagName("meta");
        for (var i=0; i<meta.length; i++) {
            if (meta[i].name.toLowerCase()=="description") {
                meta[i].content= "Contact us. We're listening.  ";
            }

            if (meta[i].name.toLowerCase()=="keywords") {
                meta[i].content= "cloudboost help, cloudboost support, baas, backend as a service, database as a service, hybrid database, cloudboost, search, realtime, storage, app storage, signup, cloudboost";
            }
        }

        document.title = "Contact us";

        window.seojsSnapshotReady = false;
    };
 }]);
