
app.service('SubscriberService', function($q,$http){


    this.addSubscriber=function(email){
       var q=$q.defer();

       $http.post(serverURL+'/subscribe', {email:email}).
         success(function(data, status, headers, config) {          
           q.resolve("Voila! You're looped in. We'll keep you posted. Thanks!" );

         }).
         error(function(data, status, headers, config) {
            if(status === 406)
               q.reject("You've already subscribed with us, We'll keep you posted. Thank you.");
             if(status === 500)
              q.reject("Error, We cannot communicate with the server at this point in time. Try us out again soon.");
         });


       return q.promise;
   }



});
