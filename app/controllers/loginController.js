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
						
							/*// Simple POST request example (passing data) :
							$http.post(serverURL+'/project/create', {name:"hello",url:"helloworld.com"}).
							  success(function(data, status, headers, config) {
								// this callback will be called asynchronously
								// when the response is available
								
								console.log(data);
								
							
								
							  }).
							  error(function(data, status, headers, config) {
								// called asynchronously if an error occurs
								// or server returns response with an error status.
								console.log(status);
							  });
               */

              },
              function(error){
                   $scope.showSpinner=false;
                    $scope.err=error;
              }
          );

      }
  };


 }]);
