app.controller('loginController',['$scope','userService',function($scope,userService){


  $scope.init=function()
  {
      $scope.getCssClass =["login-page","access-page","has-full-screen-bg"];
      $scope.spinnerSwitch=false;

  }
  $scope.logIn=function(isValid){
    if(isValid)
      {
          $scope.spinnerSwitch=true;
          var logInPromise=userService.logIn($scope.email,$scope.password);

          logInPromise.then(
              function(data){
                    $scope.spinnerSwitch=false;
                    //console.log(data);
              },
              function(error){
                   $scope.spinnerSwitch=false;
                    $scope.err=error;
              }
          );

      }
  };


 }]);
