app.controller('loginController',['$scope','userService','$http',function($scope,userService,$http){


  $scope.init=function()
  {
      $scope.getCssClass =["login-page","access-page","has-full-screen-bg"];
      $scope.showSpinner=false;
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
