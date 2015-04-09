app.controller('loginController',['$scope','userService','$http','$cookies','$rootScope',function($scope,userService,$http,$cookies,$rootScope){
  $rootScope.showHeader=false;
  $scope.getCssClass =["login-page","access-page","has-full-screen-bg"];

  $scope.init=function()  {   
      $scope.showSpinner=false;
      var meta=document.getElementsByTagName("meta");
        for (var i=0; i<meta.length; i++) {
            if (meta[i].name.toLowerCase()=="description") {
                meta[i].content= "Login to CloudBoost. Build your apps with with our simple SDK.";
            }
            if (meta[i].name.toLowerCase()=="keywords") {
                meta[i].content= "login, login to cloudboost, baas, backend as a service, database as a service, hybrid database, cloudboost, search, realtime, storage, app storage, signup, cloudboost";
            }
        }
      document.title = "Login.";

      window.seojsSnapshotReady = true;
  }

  $scope.logIn=function(isValid){
    if(isValid)
      {
          $scope.showSpinner=true;

          var logInPromise=userService.logIn($scope.email,$scope.password);

          logInPromise.then(
              function(data){
                  $cookies.userId = data._id;
                  $cookies.userFullname = data.name; 
                  $cookies.email = data.email;
                  $cookies.createdAt = data.createdAt;
                  
                  window.location.href=dashboardURL;
                  //$scope.showSpinner=false;
              },
              function(error){
                   $scope.showSpinner=false;
                   $scope.err=error.message;
              }
          );

      }
  };


 }]);
