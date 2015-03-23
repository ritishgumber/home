app.controller('signupController',['$scope','userService','$rootScope',function($scope,userService,$rootScope){
      $rootScope.showHeader=false; 
      $scope.getCssClass =["signup-page", "access-page", "has-full-screen-bg"];

      $scope.init = function(){             
          $scope.showSpinner=false;
          var meta=document.getElementsByTagName("meta");
          
          for (var i=0; i<meta.length; i++) {
              if (meta[i].name.toLowerCase()=="description") {
                  meta[i].content= "Signup to CloudBoost. Build your apps with with our simple SDK.";
              }
          }

          document.title = "Signup";

          $scope.htmlReady();

      };

      $scope.signUp=function(isValid){

        if(isValid)
          {

              $scope.showSpinner=true;

              var signUpPromise=userService.signUp($scope.name,$scope.email,$scope.password);
              signUpPromise.then(
                  function(data){
                     $scope.showSpinner=false;
                     window.location.href=dashboardURL;
                  },
                  function(error){
                        $scope.showSpinner=false;
                        $scope.err=error;
                  }
              );

          }
      };



      $scope.facebookSignUp=function(){

              $scope.showSpinner=true;

              var facebookSignUpPromise=userService.facebookSignUp();
              facebookSignUpPromise.then(
                  function(data){
                    console.log(data);
                     $scope.showSpinner=false;
                        //console.log(data);
                  },
                  function(error){
                        $scope.showSpinner=false;
                        $scope.err=error;
                  }
              );

      };

      $scope.googleSignUp=function(){
        
              $scope.showSpinner=true;
              var facebookSignUpPromise=userService.facebookSignUp();
              facebookSignUpPromise.then(
                  function(data){
                    console.log(data);
                     $scope.showSpinner=false;
                        //console.log(data);
                  },
                  function(error){
                        $scope.showSpinner=false;
                        $scope.err=error;
                  }
              );

      };


 }]);
