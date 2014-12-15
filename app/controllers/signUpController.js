app.controller('signupController',['$scope','userService',function($scope,userService){
  $scope.getCssClass =["signup-page", "access-page", "has-full-screen-bg"];


      document.getElementById("spinner").style.display="none";
      $scope.signUp=function(isValid){

        if(isValid)
          {

              document.getElementById("spinner").style.display="block";
              $scope.loading="false";
              var signUpPromise=userService.signUpUser($scope.email,$scope.password);
              signUpPromise.then(
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
