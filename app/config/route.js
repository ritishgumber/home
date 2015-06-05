app.config(['$urlRouterProvider','$stateProvider','$httpProvider','$locationProvider',
  function($urlRouterProvider,$stateProvider,$httpProvider,$locationProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('start',{url:'/',templateUrl:'app/views/start.html',controller:'startController'});
  $stateProvider.state('quickstart',{url:'/quickstart',templateUrl:'app/views/quickstart.html',controller:'quickstartController'});
  $stateProvider.state('pricing',{url:'/pricing',templateUrl:'app/views/pricing.html',controller:'pricingController'});  
  $stateProvider.state('contact',{url:'/contact',templateUrl:'app/views/contact.html',controller:'contactController'});
  $stateProvider.state('about',{url:'/about',templateUrl:'app/views/about.html',controller:'aboutController'});
  $stateProvider.state('careers',{url:'/joinus',templateUrl:'app/views/careers.html',controller:'joinusController'});  
  $stateProvider.state('partners',{url:'/partners',templateUrl:'app/views/partners.html',controller:'partnersController'});
  $stateProvider.state('terms',{url:'/terms',templateUrl:'app/views/terms.html',controller:'termsController'});
  $stateProvider.state('privacy',{url:'/privacy',templateUrl:'app/views/privacypolicy.html',controller:'privacyController'});

  //For to enable cross-origin resource sharing
  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

}]);



