app.config(['$urlRouterProvider','$stateProvider','$httpProvider',function($urlRouterProvider,$stateProvider,$httpProvider){


  $urlRouterProvider.otherwise('/');
  $stateProvider.state('start',{url:'/',templateUrl:'app/views/start.html',controller:'indexController'});
  $stateProvider.state('features',{url:'/features',templateUrl:'app/views/features.html',controller:'featureController'});
  $stateProvider.state('pricing',{url:'/pricing',templateUrl:'app/views/pricing.html',controller:'pricingController'});
  $stateProvider.state('login',{url:'/login',templateUrl:'app/views/login.html',controller  : 'loginController'});
  $stateProvider.state('signup',{url:'/signup',templateUrl:'app/views/signup.html',controller  : 'signupController'});
  $stateProvider.state('index-2',{url:'/index-2',templateUrl:'app/views/index-2.html',controller  : 'index2Controller'});
  $stateProvider.state('download',{url:'/download',templateUrl:'app/views/download.html',controller  : 'downloadController'});
  $stateProvider.state('blog',{url:'/blog',templateUrl:'app/views/blog.html',controller  : 'blogController'});
  $stateProvider.state('blog-archive',{url:'/blog-archive',templateUrl:'app/views/blog-archive.html',controller  : 'blogArchiveController'});
  $stateProvider.state('blog-category',{url:'/blog-category',templateUrl:'app/views/blog-category.html',controller  : 'blogCategoryController'});
  $stateProvider.state('blog-single',{url:'/blog-single',templateUrl:'app/views/blog-single.html',controller  : 'blogSingleController'});
  $stateProvider.state('contact',{url:'/contact',templateUrl:'app/views/contact.html',controller:'contactController'});
  $stateProvider.state('about',{url:'/about',templateUrl:'app/views/about.html',controller:'aboutController'});
  $stateProvider.state('project',{url:'/project',templateUrl:'app/views/createProject.html',controller:'projectController'});

  //For to enable cross-origin resource sharing
  $httpProvider.defaults.withCredentials = false;
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  //End

}]);
