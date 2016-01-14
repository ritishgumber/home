//Initialization
$(document).ready(function(){       

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
    /* end of server lights*/

    /*var dataTypeArray=[];

    var dmusic='<div style="margin-top:3px;">';
        dmusic+='<div style="width:10px;height:10px; background-color:#E3E5E5;"></div>';
    dmusic+='</div>';
    dataTypeArray.push(dmusic);

    var dphoto='<div style="margin-top:3px;">';
        dphoto+='<div style="width:10px;height:10px; background-color:#00383F;"></div>';
    dphoto+='</div>';
    dataTypeArray.push(dphoto);

    var dfile='<div style="margin-top:3px;">';
        dfile+='<div style="width:10px;height:10px; background-color:#2DC7FF;"></div>';
    dfile+='</div>';
    dataTypeArray.push(dfile);  

    var dfile2='<div style="margin-top:3px;">';
        dfile2+='<div style="width:10px;height:10px; background-color:#08C1DD;"></div>';
    dfile2+='</div>';
    dataTypeArray.push(dfile2);   

    var dataNo=0;
    setInterval(function(){
        ++dataNo;
        var dataId="dataid"+dataNo;

        var serverdata='<div style="width:10px !important; padding-top:2px;" class="movetoserver '+dataId+'">';
            var randmElm=Math.floor(Math.random() * dataTypeArray.length); 
            serverdata+=dataTypeArray[randmElm];

            var randmElm=Math.floor(Math.random() * dataTypeArray.length); 
            serverdata+=dataTypeArray[randmElm];

            var randmElm=Math.floor(Math.random() * dataTypeArray.length); 
            serverdata+=dataTypeArray[randmElm]; 

            var randmElm=Math.floor(Math.random() * dataTypeArray.length); 
            serverdata+=dataTypeArray[randmElm];

        serverdata+='</div>';

        $(".datatrans-body").append(serverdata);
    },90);*/

     /*setTimeout(function(){

        var dataRemvNo=0;
        setInterval(function(){
            ++dataRemvNo;
            var dataRemvId=".dataid"+dataRemvNo;
            $(dataRemvId).remove();
        },200);

    }, 2500); */ 

    var dataNo=0;
    setInterval(function(){
         ++dataNo;
        var dataId="dataid"+dataNo;
        var rt=' <div class="eachpipeline '+dataId+' flex-general-row-wrapper"> <div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div></div><div style="width:10px !important; margin-left:2px; margin-right:2px; padding-top:2px;" class=""> <div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#08C1DD;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#00383F;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#2DC7FF;"> </div></div><div style="margin-top:3px;"> <div style="width:10px;height:10px; background-color:#E3E5E5;"> </div></div></div></div>';
        $(".datatrans-body").append(rt);
    },500);  


    var docusCount=0;
    var appendoc;
    var totaldocCount=0;
    setInterval(function(){ 
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

        
});

function serverLights(elmClass,onTime,offTime){
    setInterval(function(){
        $(elmClass).css({"background-color":"white","opacity":1});
    },onTime);
    setInterval(function(){
        $(elmClass).css({"background-color":"white","opacity":0.2});
    },offTime);
}

$(document).on( "click",".start-demo",function() {
    $(".trending-slides").addClass("letsstart");
    var animationEnd = animationEndEventName();
    $(".letsstart .animsec1 .mbl-slide2 .mbl-app-searchin-wrap .inputlike p")[0].addEventListener(animationEnd, showsearchpeople, false );

});

var showsearchpeople=function(e){
    $(".trending-slides").addClass("showsearchpeople");
    var transitionEnd = transitionEndEventName();
    $(".showsearchpeople .dotyped")[0].addEventListener(transitionEnd, serverspace, false );           
};

var serverspace=function(){
    $(".trending-slides").addClass("serverspace"); 
    var transitionEnd = transitionEndEventName();
    $(".serverspace .animsec4 .graphic-column2 .datatrans-head .sub")[0].addEventListener(transitionEnd, beginlast, false );   
};

var beginlast = function (e){ 
    $(".trending-slides").addClass("beginlast");
    var transitionEnd = transitionEndEventName();      
    $(".beginlast .animsec5 .graphic-row3 .allplatforms")[0].addEventListener(transitionEnd, readytoscroll, false );        
}


var readytoscroll=function(){
    setTimeout(function(){
        $(".trending-slides").removeClass("letsstart");
        $(".trending-slides").removeClass("showsearchpeople");
        $(".trending-slides").removeClass("serverspace");
        $(".trending-slides").removeClass("beginlast");

        var htmlbdy=$('.trending-slides')[0];

        $('html,body').animate({scrollTop: 650},'slow',function(){
            $('.trending-slides').remove();
            $('.trending-wrapper').html(htmlbdy);
        });         
    }, 2000);    
}


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