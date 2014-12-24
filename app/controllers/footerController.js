app.controller('footerController',['$scope','SubscriberService',function($scope,SubscriberService){


  $scope.addSubscriber=function(isValid){
    if(isValid)
      {
          $scope.footerShowSpinner=true;
          $scope.footerSubscribeResult="";
          $scope.footerSubscribeErr="";

          var subscribePromise=SubscriberService.addSubscriber($scope.footerSubscribeEmail);

          subscribePromise.then(
              function(data){
                  $scope.footerShowSpinner=false;
                  $scope.footerSubscribeResult=data.email+" got subscribed successfully";
              },
              function(error){
                   $scope.footerShowSpinner=false;
                    $scope.footerSubscribeErr=error;
              }
          );

      }
  };


 }]);
