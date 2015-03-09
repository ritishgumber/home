var __isDevelopment = false;

var app=angular.module('cbLanding',['ui.router','picardy.fontawesome']);

var serverURL = null, dashboardURL = null;

if(__isDevelopment){
	var serverURL="http://localhost:3000";
	var serverURL="http://localhost:1440";
}else{
	var serverURL="https://service.cloudboost.io";
	var dashboardURL = "https://dashboard.cloudboost.io";
}


