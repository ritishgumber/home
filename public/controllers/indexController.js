var showNotifications=false;
var codeMirrorEnabled = [];

var commentsList=[];
var notificationCount=0;
var commentIndex=0;


var codeTabSelected = 'js';
var currentFeature = 'Insert';
//End of default assignments

//Initialization
$(document).ready(function(){
    //hljs.initHighlightingOnLoad();	
	hideAllCode();

    $('#Insert-js').show();
    //initCodeEditors( ['objectInsert-js']);
    $('#InsertIcon').addClass('active');  
    $("#notificationContainer").hide();
    $("#red-counter").hide();     
    
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('Visted Home Page', {"visited":"visited Home Page"});
      /****End of Tracking*****/
    }  
});
//Initialization

//Functions
var hideAllCode = function(){
    $('#Insert-js').hide();
    $('#Realtime-js').hide();
    $('#Search-js').hide();
    $('#Insert-java').hide();
    $('#Realtime-java').hide();
    $('#Search-java').hide();
    //remove CSS classes. 
    $('#InsertIcon').removeClass('active');
    $('#RealtimeIcon').removeClass('active');
    $('#SearchIcon').removeClass('active');
};


var myCodeMirror = CodeMirror.fromTextArea($(".code")[0],{
    mode:  "javascript",
    readOnly : true,
    lineNumbers: true
});

var initCodeEditors = function(arr){
    var codeEditors = arr;

    for(var i=0;i<codeEditors.length; i++){

        if(document.getElementById(codeEditors[i]) && codeMirrorEnabled.indexOf(codeEditors[i]) === -1){

            var myCodeMirror = CodeMirror.fromTextArea(document.getElementById(codeEditors[i]),{
                mode:  "javascript",
                readOnly : true,
                lineNumbers: true
            });

            codeMirrorEnabled.push(codeEditors[i]);
        }
    }
};

$("#InsertIcon").click(function(event){
    event.preventDefault();
	featureClick('Insert');
});

$("#RealtimeIcon").click(function(event){
    event.preventDefault();
    featureClick('Realtime');
});

$("#SearchIcon").click(function(event){
    event.preventDefault();
    featureClick('Search');
});

var featureClick = function(feature){   
    hideAllCode();
    $('#'+feature+'-'+codeTabSelected).show();
    initCodeEditors( ['object'+feature+'-'+codeTabSelected]);
    $('#'+feature+'Icon').addClass('active');
    currentFeature = feature;
}

$("#js").click(function(event){
    event.preventDefault();
    languageClick('js');
});

$("#java").click(function(event){
    event.preventDefault();
    languageClick('java');
})

var languageClick = function(lang){
    hideAllCode();
    codeTabSelected = lang;
    featureClick(currentFeature);
    $('#java').removeClass('active');
    $('#js').removeClass('active');
    $('#'+lang).addClass('active');
};

var switchFeature = function(id){
    //remove active classes. 
    $('#feature1List').removeClass('active');
    $('#feature2List').removeClass('active');

    $('#feature'+id+'List').addClass('active');

    $('#feature1').hide();
    $('#feature2').hide();

    $('#feature'+id).show();

    if(id===1)
        initCodeEditors( ['objectInsert']);

    if(id===2){
        initCodeEditors( ['ObjectQuery']);
    }
};


/****************************************Mixpanel Area********************************************************************/
$("#header-signupbtn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('Landing Header Sign Up Button', {"Clicked":"Sign up for free"});
      /****End of Tracking*****/
    }
});

$("#header-loginbtn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('Landing Header Login Button', {"Clicked":"Login"});
      /****End of Tracking*****/
    }
}); 

$("#home-body-signup-btn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('HomePage Body Sign Up Button', {"Clicked":"HomePage Body Sign Up Button"});
      /****End of Tracking*****/
    }
});

$("#home-body-quickstart-btn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('HomePage Body QuickStart Button', {"Clicked":"HomePage Body QuickStart Button"});
      /****End of Tracking*****/
    }
}); 

 
