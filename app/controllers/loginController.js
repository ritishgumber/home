app.controller('loginController',['$scope','userService',function($scope,userService){
  $scope.getCssClass =["login-page","access-page","has-full-screen-bg"];

  document.getElementById("spinner").style.display="none";
  $scope.logIn=function(isValid){

    if(isValid)
      {
          document.getElementById("spinner").style.display="block";
          var logInPromise=userService.logInUser($scope.email,$scope.password);

          logInPromise.then(
              function(data){
                    document.getElementById("spinner").style.display="none";
                    console.log(data);
              },
              function(e){
                   document.getElementById("spinner").style.display="none";
                    console.log(e);
                    $scope.err=e;
              }
          );

      }
  };


 }]);
