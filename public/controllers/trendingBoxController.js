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
    $(".animsec1 .goToMblSlide2 .mbl-slide2 .mbl-search-default")[0].addEventListener( 'webkitTransitionEnd', onreadytoshowspinner, false ); 
}

var onreadytoshowspinner=function(e){
    $(".animsec1 .mbl-slide2 .mbl-app-searchin-wrap").addClass("showspinner");
    $(".animsec1 .goToMblSlide2 .mbl-slide2 .showspinner .search-icon")[0].addEventListener( 'webkitTransitionEnd', onreadyToShowResults, false ); 
}

var onreadyToShowResults=function (e) {
    $(".mobile-screen-inn").addClass("showsearchresults");
}