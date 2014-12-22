app.config(['$urlRouterProvider','$stateProvider','$httpProvider','$locationProvider',function($urlRouterProvider,$stateProvider,$httpProvider,$locationProvider){


  $urlRouterProvider.otherwise('/');

  $stateProvider.state('start',{url:'/',templateUrl:'app/views/start.html',controller:'indexController'});
  $stateProvider.state('features',{url:'/features',templateUrl:'app/views/features.html',controller:'featureController'});
  $stateProvider.state('pricing',{url:'/pricing',templateUrl:'app/views/pricing.html',controller:'pricingController'});
  $stateProvider.state('login',{url:'/login',templateUrl:'app/views/login.html',controller  : 'loginController'});
  $stateProvider.state('signup',{url:'/signup',templateUrl:'app/views/signup.html',controller  : 'signupController'});
  $stateProvider.state('contact',{url:'/contact',templateUrl:'app/views/contact.html',controller:'contactController'});
  $stateProvider.state('about',{url:'/about',templateUrl:'app/views/about.html',controller:'aboutController'});
  $stateProvider.state('dropby',{url:'/dropby',templateUrl:'app/views/dropby.html',controller:'dropbyController'});

  //For to enable cross-origin resource sharing
  $httpProvider.defaults.withCredentials = false;
  $httpProvider.defaults.useXDomain = false;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  //End

}]);
