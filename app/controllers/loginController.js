app.controller('loginController',['$scope','userService','$http',function($scope,userService,$http){


  $scope.init=function()
  {
      $scope.getCssClass =["login-page","access-page","has-full-screen-bg"];
      $scope.showSpinner=false;



      var meta=document.getElementsByTagName("meta");
        for (var i=0; i<meta.length; i++) {
            if (meta[i].name.toLowerCase()=="description") {
                meta[i].content= "Login to CloudBoost. Build your apps with with our simple SDK.";
            }
        }

        document.title = "Login.";

        $scope.htmlReady();
 
  }
  $scope.logIn=function(isValid){
    if(isValid)
      {
          $scope.showSpinner=true;

          var logInPromise=userService.logIn($scope.email,$scope.password);

          logInPromise.then(
              function(data){
                  $scope.showSpinner=false;
                  window.location.href=dashboardURL;
              },
              function(error){
                   $scope.showSpinner=false;
                   $scope.err=error.message;
              }
          );

      }
  };


 }]);
