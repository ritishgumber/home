//Initialization
$(document).ready(function(){  
    
    
});

$(".start-demo").click(function(){       

    $(".trending-slides").addClass("letsstart");
    $(".letsstart .animsec1 .smalltab-wrap")[0].addEventListener( 'webkitTransitionEnd', on2DevicesDisapear, false );
     
}); 

var on2DevicesDisapear = function ( e ){ 
    $(".trending-slides").addClass("accelerate");
    $(".accelerate .animsec1 .bigtab-wrap")[0].addEventListener( 'webkitTransitionEnd', onother2DevicesDisapear, false );
}

var onother2DevicesDisapear = function ( e ){ 
    $(".trending-slides").addClass("translatembl");  
    $(".translatembl .animsec1 .mobile")[0].addEventListener( 'webkitTransitionEnd', onmbldeviceready, false );  
}

var onmbldeviceready=function (e) {
    $(".animsec1 .mobile-screen-inn").addClass("goToMblSlide1");    
    $(".animsec1 .goToMblSlide1 .mbl-slide1")[0].addEventListener( 'webkitTransitionEnd', onreadytodemo, false ); 
}

var onreadytodemo=function(e){
    $(".trending-slides").addClass("goToSlide1"); 
    $(".goToSlide1 .animsec2 .graphic-column1 .demo-sub-heading")[0].addEventListener( 'animationend', onreadyToSearch, false ); 
}

var onreadyToSearch=function(e){
    $(".animsec1 .mobile-screen-inn").addClass("goToMblSlide2"); 
    $(".animsec1 .goToMblSlide2 .mbl-slide2 .mbl-app-searchin-wrap .search-icon .searchicon-mode2")[0].addEventListener( 'webkitTransitionEnd', showspinner, false ); 
}

var showspinner=function (e) {
    $(".animsec1 .mobile-screen-inn").addClass("showspinner"); 
    $(".animsec1 .showspinner .mbl-slide2 .mbl-app-searchin-wrap .search-icon .searchspinner")[0].addEventListener( 'webkitTransitionEnd', onreadyToShowResults, false ); 
}
var onreadyToShowResults=function (e) {
    $(".mobile-screen-inn").addClass("showsearchresults");
    $(".animsec1 .showsearchresults .mbl-slide2 .mbl-app-content")[0].addEventListener( 'animationend', ondemofinished, false );  
}

var ondemofinished=function (e) {
    $(".trending-slides").addClass("slidedemofinished");
    $(".slidedemofinished .animsec2 .graphic-column3 .demo-explain2")[0].addEventListener( 'animationend', onreadyforrelatime, false );
}

var onreadyforrelatime=function (e) {
    $(".trending-slides").addClass("readyforrealtime");
    $(".readyforrealtime .animsec1 .mbl-slide1 .mbl-app-notify-bubble")[0].addEventListener( 'webkitTransitionEnd', getslide2, false ); 
}

var getslide2=function (e) {
    $(".trending-slides").addClass("goToSlide2");
    $(".goToSlide2 .animsec3 .graphic-column1 .demo-sub-heading")[0].addEventListener( 'animationend', readytodemorealtime, false );  
}

var readytodemorealtime=function(e){
    $(".animsec1 .mobile-screen-inn").addClass("goToMblSlide3"); 
    $(".animsec1 .goToMblSlide3 .mbl-slide3 .mbl-app-notify-bubble")[0].addEventListener( 'webkitTransitionEnd', finishingrealtime, false );
}

var finishingrealtime=function(){
    $(".trending-slides").addClass("finishrealtime"); 
    $(".finishrealtime .animsec3 .graphic-column3 .demo-sub-heading2")[0].addEventListener( 'animationend', onrealtimeend, false );
}

var onrealtimeend=function (e) {
    $(".trending-slides").addClass("goToSlide3");
}

