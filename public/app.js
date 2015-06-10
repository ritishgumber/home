var __isDevelopment = false;

if(window.location.host.indexOf('localhost') > -1){
	__isDevelopment = true;
}

var serverURL = null, dashboardURL = null;

if(__isDevelopment){
	var serverURL="http://localhost:3000";	
	var dashboardURL = "http://localhost:1440";
	var signUpURL="http://localhost:1440/accounts/#/signup";
	var loginURL="http://localhost:1440/accounts";
}else{
	var serverURL="https://service.cloudboost.io";	
	var dashboardURL = "https://dashboard.cloudboost.io";
	var signUpURL="https://dashboard.cloudboost.io/accounts/#/signup";	
	var loginURL="https://dashboard.cloudboost.io/accounts";
}