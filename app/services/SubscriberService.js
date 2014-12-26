
app.service('SubscriberService', function($q,$http){


    this.addSubscriber=function(email){
       var q=$q.defer();

       $http.post(serverURL+'/subscribe', {email:email}).
         success(function(data, status, headers, config) {          
           q.resolve(data);

         }).
         error(function(data, status, headers, config) {
               q.reject(data);
         });


       return q.promise;
   }



});
