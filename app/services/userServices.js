
app.service('userService', function($q,$http){

     this.signUp=function(email,password){
        var q=$q.defer();
        $http.post(serverURL+'/auth/register', {email:email,password:password}).
          success(function(data, status, headers, config) {
                q.resolve(data);
          }).
          error(function(data, status, headers, config) {
                q.reject(data);
          });
        return q.promise;
    }

    this.logIn=function(email,password){
       var q=$q.defer();

       $http.post(serverURL+'/auth/signin', {email:email,password:password}).
         success(function(data, status, headers, config) {
           console.log(data);
           q.resolve(data);

         }).
         error(function(data, status, headers, config) {
               q.reject(data);
         });


       return q.promise;
   }

});
