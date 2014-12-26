app.controller('footerController',['$scope','SubscriberService',function($scope,SubscriberService){


  $scope.addSubscriber=function(isValid){
    if(isValid)
      {
          $scope.footerShowSpinner=true;
          $scope.footerSubscribeResult="";
          $scope.footerSubscribeErr="";

          var subscribePromise=SubscriberService.addSubscriber($scope.footerSubscribeEmail);

          subscribePromise.then(
              function(message){
                  $scope.footerShowSpinner=false;
                  $scope.footerSubscribeResult=message;
              },
              function(error){
                   $scope.footerShowSpinner=false;
                    $scope.footerSubscribeErr=error;
              }
          );

      }
  };


 }]);
