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
    initCodeEditors( ['objectInsert-js']);
    $('#InsertIcon').addClass('active');  
    $("#notificationContainer").hide();
    $("#red-counter").hide();    
    //$('html,body').animate({scrollTop: $('#cta').offset().top-200},500); //smooth scroll animation.
     setTimeout(function(){ 
         var newAdminComment={
                    index:commentIndex,
                    isUser:false,
                    userPic:"cb-user",
                    comment:" Hey, Thanks for coming up. CloudBoost is one simple API that you can build your next big app on. Infact, the app you see here can be built on CloudBoost too! Feel free to play with it. ",
                    notify:false,
                    name:"Jeff Whietman from CloudBoost"      
                }
            commentsList.push(newAdminComment);
            initAppendComments(commentsList);
            initAppendNotifications();
            ++notificationCount;
            toggleNotification();
            commentsList = [];

        setTimeout(function(){ 

               var newAdminComment={
                    index:commentIndex,
                    isUser:false,
                    userPic:"defult-user",
                    comment:"I've used <a href='https://twitter.com/search?q=%23cloudboost' target='blank'> #CloudBoost </a> to build my local social networking app and I can tell you, it was a breeze to integrate.",
                    notify:false,
                    name:"Sara Lane shared a post"      
                }
                commentsList.push(newAdminComment);

                initAppendComments(commentsList);
                initAppendNotifications();
                ++notificationCount;
                toggleNotification();
         }, 2000);

 }, 1000);
    
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

var initCodeEditors = function(arr){
    var codeEditors = arr;

    for(var i=0;i<codeEditors.length; i++){

        if(document.getElementById(codeEditors[i]) && codeMirrorEnabled.indexOf(codeEditors[i]) === -1){

            var myCodeMirror = CodeMirror.fromTextArea(document.getElementById(codeEditors[i]),
                {
                    mode:  "javascript",
                    readOnly : "nocursor",
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

$("#notificationshow").click(function(event){
    event.preventDefault();
    if(showNotifications){
        showNotifications=false; 
        $("#notificationContainer").hide();        
    }else{
        showNotifications=true;
        $("#notificationContainer").show();
        notificationCount=0;              
    }
    toggleNotification();         

});

var toggleNotification=function(){
    if(notificationCount>0){
        $("#red-counter").addClass('animated bounceIn').show();
        $(".count-number").text(notificationCount);
    }else{
        $("#red-counter").hide();
    }
};

$("#postBtn").click(function(event){
    event.preventDefault();
    var comment=$("#postTxt").val();

    if(comment){

        ++commentIndex;
        var newComment={
            index:commentIndex,
            isUser:true,
            userPic:"anonymous",
            comment:comment,
            notify:false,
            name:"You shared a post"                    
        };
        commentsList.push(newComment);
        appendEachComments(newComment);
        comment=null;
        $("#postTxt").val(null);        

        setTimeout(function(){ 
            ++commentIndex;
            if(commentIndex === 2){
                var newAdminComment={
                index:commentIndex,
                isUser:false,
                userPic:"cb-user",
                comment:"<span>Thank you for playing around with the app. You can now signup to Cloudboost <a href='https://dashboard.cloudboost.io/accounts/#/signup'>here.</a></span>",
                notify:true,
                name:"Jeff Whietman from CloudBoost"
                                
                };
                commentsList.push(newAdminComment);
                ++notificationCount;
                toggleNotification();
            }      
            if(commentIndex === 4){
                var newAdminComment={
                index:commentIndex,
                isUser:false,
                userPic:"user-comment",
                comment: "<span> Looks like you've fallen in love with the app. I'm sure, you'll love the API as much. Check out the  <a href='http://docs.cloudboost.io' target='blank'>docs here.</a></span>",
                notify:false,
                name:"Charlie Jen from CloudBoost"
                                
                };
                commentsList.push(newAdminComment);               
            }

            if(commentIndex === 6){
                var newAdminComment={
                index:commentIndex,
                isUser:false,
                userPic:"cb-user",
                comment: "<span> Thank you for your love. The app like this can be built on CloudBoost and I'm sure you can build great apps too! Share the links of apps you've built to <a mailto='hello@cloudboost.io'>hello@cloudbost.io </a>and we'll share it with the world. </span>",
                notify:false,
                name:"Jeff Whietman from CloudBoost"
                                
                };
                commentsList.push(newAdminComment);
            }

            if(commentIndex === 8){
                var newAdminComment={
                index:commentIndex,
                isUser:false, 
                userPic:"cb-user",
                comment: "Hey, We're looking for restless & kick-ass people like you. If you like what we've built, you're a hacker, and want to build CloudBoost together. Send us your Resume on <a mailto='careers@cloudboost.io'>careers@cloudboost.io </a>",
                notify:false,
                name:"Jeff Whietman from CloudBoost"
                                
                };
                commentsList.push(newAdminComment);
            } 
            appendEachComments(newAdminComment); 
            appendEachNotifications(newAdminComment);      
            
        }, 2000);
       
    }

});


function appendEachComments(comment){   

    var htmlTag='<div class="widget-comments-bx cf flex-general-row-wrapper">';
        htmlTag+='<div class="user-pic pull-left">';
        htmlTag+='<img src="/images/'+comment.userPic+'.png">';
        htmlTag+='</div>';
        htmlTag+='<div class="user-comment2 pull-left" style="margin:5px;margin-left:7px;">';
        htmlTag+='<span class="comment-username">'+comment.name+'</span>';
        htmlTag+='<span>'+comment.comment+'</span>';    
        htmlTag+='</div>';
        htmlTag+='</div>';

    $(".widget-comments-list").prepend(htmlTag)
}    
   

function initAppendComments(commentsList){
    if(commentsList.length>0){

        for(var i=0;i<commentsList.length;++i){


            var htmlTag='<div class="widget-comments-bx cf animated fadeInDown flex-general-row-wrapper">';

                htmlTag+='<div class="user-pic pull-left">';
                htmlTag+='<img src="/images/'+commentsList[i].userPic+'.png">';
                htmlTag+='</div>';
                htmlTag+='<div class="user-comment2 pull-left" style="margin:5px;margin-left:7px;">';
                htmlTag+='<span class="comment-username">'+commentsList[i].name+'</span>';
                htmlTag+='<span>'+commentsList[i].comment+'</span>';    
                htmlTag+='</div>';
                htmlTag+='</div>';

            $(".widget-comments-list").prepend(htmlTag);
        }
    }    
};

function appendEachNotifications(comment){   

    var htmlTag='<div class="comments-container cf flex-general-row-wrapper">';
        htmlTag+='<div class="user-pic2 pull-left">';
        htmlTag+='<img src="/images/'+comment.userPic+'.png">';
        htmlTag+='</div>';
        htmlTag+='<div class="user-comment pull-left">';
        htmlTag+='<span>Hi,You got a new notification from <span class="notify-username2">'+comment.name+' </span></span>';         htmlTag+='</div>';
        htmlTag+='</div>';
    $("#notificationsBody").prepend(htmlTag);    
   
}

function initAppendNotifications(){

    if(commentsList.length>0){

        for(var i=0;i<commentsList.length;++i){ 

            var htmlTag='<div class="comments-container cf flex-general-row-wrapper">';
                htmlTag+='<div class="user-pic2 pull-left">';
                htmlTag+='<img src="/images/'+commentsList[i].userPic+'.png">';
                htmlTag+='</div>';
                htmlTag+='<div class="user-comment pull-left">';
                htmlTag+='<span>Hi,You got a new notification from <span class="notify-username2">Sara Lane </span></span>';
                htmlTag+='</div>';
                htmlTag+='</div>';
            $("#notificationsBody").append(htmlTag);    
        }
    }else{
        var htmlTag='<div class="comments-container cf">';
            htmlTag+='<span style="color:black; font-size:12px;">There are no notifications</span>';
            htmlTag+='</div>';

        $("#notificationsBody").append(htmlTag);    
    }   
}


$("#search-input").keyup(function(){
    var search=$("#search-input").val();

    var newCommentList=[];
    if(commentsList.length>0){

        for(var i=0;i<commentsList.length;++i){
          if(commentsList[i].comment.indexOf(search)>-1){
            newCommentList.push(commentsList[i]);
          }
        }
    }
    $(".widget-comments-list").empty();
    initAppendComments(newCommentList);      
});

        
