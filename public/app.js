var __isDevelopment = false;

if(window.location.host.indexOf('localhost') > -1){
	__isDevelopment = true;
}

var serverURL = null, dashboardURL = null;
var signUpURL = '';
var loginURL = '';


if(__isDevelopment){
	serverURL="http://localhost:3000";	
	dashboardURL = "http://localhost:1440";
	signUpURL="http://localhost:1440/accounts/#/signup";
	loginURL="http://localhost:1440/accounts";
}else{
	serverURL="https://service.cloudboost.io";	
	dashboardURL = "https://dashboard.cloudboost.io";
	signUpURL="https://dashboard.cloudboost.io/accounts/#/signup";	
	loginURL="https://dashboard.cloudboost.io/accounts";
}