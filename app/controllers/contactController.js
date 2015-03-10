app.controller('contactController',['$scope',function($scope){
    $scope.getCssClass ="contact-page";

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
