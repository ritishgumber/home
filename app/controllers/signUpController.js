app.controller('signupController',['$scope','userService',function($scope,userService){




      $scope.init=function()
      {
          $scope.getCssClass =["signup-page", "access-page", "has-full-screen-bg"];
          $scope.spinnerSwitch=false;

      }

      $scope.signUp=function(isValid){

        if(isValid)
          {

              $scope.spinnerSwitch=true;
              
              var signUpPromise=userService.signUp($scope.email,$scope.password);
              signUpPromise.then(
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
