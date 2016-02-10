var serverlightON;
var serverlightOFF;
var datauploadingServer;
var dataMoving;

//Initialization
$(document).ready(function(){  
    var windowsWidth = $(window).width(); 
    if(windowsWidth<=1023){
        var signUpBtn='<button type="button" class="sing-up-btn-demo">Sign Up &nbsp;<i class="fa fa-angle-right bounce-arrow" style="font-size:18px;"></i></button>';
        $(".demo-start-btn").html(signUpBtn);
    }       
});

function serverLights(elmClass,onTime,offTime){
    serverlightON=setInterval(function(){
        $(elmClass).css({"background-color":"white","opacity":1});
    },onTime);

    serverlightOFF=setInterval(function(){
        $(elmClass).css({"background-color":"white","opacity":0.2});
    },offTime);
}

$(document).on( "click",".sing-up-btn-demo",function() {
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('Landing SmallScreens Sign Up Button', {"Clicked":"Sign up for free"});
      /****End of Tracking*****/
    } 
    window.open('https://dashboard.cloudboost.io/accounts/#/signup');
});

$(document).on( "click",".start-demo",function() {
    $(".trending-wrapper").addClass("nonews");
    $(".trending-slides").addClass("letsstart");
    var animationEnd = animationEndEventName();
    $(".letsstart .animsec1 .mbl-slide2 .mbl-app-searchin-wrap .inputlike p")[0].addEventListener(animationEnd, showsearchpeople, false );

    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('Landing StartAnimation Button', {"Clicked":"Show me"});
      /****End of Tracking*****/
    }
});

var showsearchpeople=function(e){
    $(".trending-slides").addClass("showsearchpeople"); 
    var transitionEnd = transitionEndEventName();
    $(".showsearchpeople .dotyped")[0].addEventListener(transitionEnd, serverspace, false ); 

    //Passive
    $(".showsearchpeople .dotyped")[0].addEventListener(transitionEnd, setupServerSlide, false );         
};

var serverspace=function(){
    $(".trending-slides").addClass("serverspace");     
    var transitionEnd = transitionEndEventName();
    $(".serverspace .animsec4 .graphic-column2 .datatrans-head .sub")[0].addEventListener(transitionEnd, beginlast, false );

    //Passive
    var animationEnd = animationEndEventName();
    $(".serverspace .animsec4 .graphic-column2 .datatrans-body")[0].addEventListener(transitionEnd, stopTyping, false );   
};

var beginlast = function (e){ 
    $(".trending-slides").addClass("beginlast");
    $(".trending-slides").removeClass("showsearchpeople");          

    var transitionEnd = transitionEndEventName();      
    $(".beginlast .animsec5 .graphic-row3 .allplatforms")[0].addEventListener(transitionEnd, readytoscroll, false ); 

    //Passive
    $(".beginlast .animsec5 .graphic-row1 .graphic-column1 .demo-main-heading .sent1")[0].addEventListener(transitionEnd, stopallintervals, false );       
}

var stopallintervals=function() {
    clearInterval(dataMoving);
    clearInterval(datauploadingServer);
    clearInterval(serverlightON);
    clearInterval(serverlightOFF);
};

var readytoscroll=function(){
    setTimeout(function(){
        $(".trending-wrapper").removeClass("nonews");
        $(".trending-slides").removeClass("letsstart");
        $(".trending-slides").removeClass("showsearchpeople");
        $(".trending-slides").removeClass("serverspace");
        $(".trending-slides").removeClass("beginlast");

        var htmlbdy=$('.trending-wrapper')[0];

        $('html,body').animate({scrollTop: 650},700,'linear',function(){
            $('.trending-wrapper').remove();
            $('.trending-container').html(htmlbdy);
        });         
    }, 1500);    
};

var stopTyping=function(){
    //$(".dotyped").remove();
};

$(".dotyped").typed({
    stringsElement: $('.realtime-feature-wrap'),
    loop: true,
    contentType: 'html',
    typeSpeed: 100,
    backSpeed: 10,
    showCursor:false
});


function animationEndEventName () {
    var i,
        undefined,
        el = document.createElement('div'),
        animations = {
            'animation':'animationend',
            'OAnimation':'oanimationend',  // oTransitionEnd in very old Opera            
            'WebkitAnimation':'webkitAnimationEnd',
            'MsAnimation':'MSAnimationEnd'
        };

    for (i in animations) {
        if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
            return animations[i];
        }
    }     
}

function transitionEndEventName () {
    var i,
        undefined,
        el = document.createElement('div'),
        transitions = {
            'transition':'transitionend',
            'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd',
            'MsTransition':'msTransitionEnd'
        };

    for (i in transitions) {
        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
            return transitions[i];
        }
    }

    //TODO: throw 'TransitionEnd event is not supported in this browser'; 
}

var setupServerSlide=function() {
    switchServerLights();   
    pipelinedata();
    dataUploading();
};

function switchServerLights () {
    serverLights(".server-light1",3000,4000);
    serverLights(".server-light2",4000,5000);
    serverLights(".server-light3",5000,6000);
    serverLights(".server-light4",6000,7000);
    serverLights(".server-light5",3000,4000);
    serverLights(".server-light6",4000,5000);
    serverLights(".server-light7",6000,7000);
    serverLights(".server-light8",3000,4000);
    serverLights(".server-light9",4000,5000);
    serverLights(".server-light10",5000,6000);
    serverLights(".server-light11",6000,7000);
}


function pipelinedata () {
    var dataNo=0;
    dataMoving=setInterval(function(){
         ++dataNo;
        var dataId="dataid"+dataNo;
        var rt=' <div class="eachpipeline '+dataId+' flex-general-row-wrapper"> <div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div></div>';
        $(".datatrans-body").append(rt);
    },500);
}

function dataUploading () {
     var docusCount=0;
    var appendoc;
    var totaldocCount=0;
    datauploadingServer=setInterval(function(){ 
        ++totaldocCount;
        var uniqueId="uniqueId"+totaldocCount;            
        if(docusCount==0){
            appendoc='<img class="rollingimg animateimg '+uniqueId+'" src="/images/metro-image.png">'; 
        }
        if(docusCount==1){
            appendoc='<img class="rollingimg animateimg '+uniqueId+'" src="/images/metro-music.png">'; 
        }
        if(docusCount==2){
            appendoc='<img class="rollingimg animateimg '+uniqueId+'" src="/images/metro-movie.png">'; 
        }
        if(docusCount==3){
            appendoc='<img class="rollingimg animateimg '+uniqueId+'" src="/images/metro-folder.png">'; 
        }

        $(".data-trans-wrap").append(appendoc);
        ++docusCount;
        if(docusCount==4){
            docusCount=0;
        }
    }, 2700);
}