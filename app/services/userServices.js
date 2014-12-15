
app.service('userService', function($q,$http){

     this.signUpUser=function(email,password){
        var q=$q.defer();
        $http.post('http://localhost:3000/auth/register', {email:email,password:password}).
          success(function(data, status, headers, config) {
                q.resolve(data);
          }).
          error(function(data, status, headers, config) {
                q.reject(data);
          });
        return q.promise;
    }

    this.logInUser=function(email,password){
       var q=$q.defer();

       $http.post('http://localhost:3000/auth/signin', {email:email,password:password}).
         success(function(data, status, headers, config) {
               q.resolve(data);

         }).
         error(function(data, status, headers, config) {
               q.reject(data);
         });


       return q.promise;
   }

});
