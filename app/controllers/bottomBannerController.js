app.controller('bottomBannerController',['$scope','SubscriberService',function($scope,SubscriberService){


  $scope.addSubscriber=function(isValid){
    if(isValid)
      {
          $scope.bottomShowSpinner=true;
          $scope.bottomSubscribeResult="";
          $scope.bottomSubscribeErr="";

          var subscribePromise=SubscriberService.addSubscriber($scope.bottomSubscribeEmail);

          subscribePromise.then(
              function(message){
                  $scope.bottomShowSpinner=false;
                  $scope.bottomSubscribeResult=message;

              },
              function(error){
                   $scope.bottomShowSpinner=false;
                   $scope.bottomSubscribeErr=error;

              }
          );

      }
  };


 }]);
