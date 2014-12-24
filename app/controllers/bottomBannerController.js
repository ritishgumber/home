app.controller('bottomBannerController',['$scope','SubscriberService',function($scope,SubscriberService){


  $scope.addSubscriber=function(isValid){
    if(isValid)
      {
          $scope.bottomShowSpinner=true;
          $scope.bottomSubscribeResult="";
          $scope.bottomSubscribeErr="";

          var subscribePromise=SubscriberService.addSubscriber($scope.bottomSubscribeEmail);

          subscribePromise.then(
              function(data){
                  $scope.bottomShowSpinner=false;
                  $scope.bottomSubscribeResult=data.email+" got subscribed successfully";

              },
              function(error){
                   $scope.bottomShowSpinner=false;
                   $scope.bottomSubscribeErr=error;

              }
          );

      }
  };


 }]);
