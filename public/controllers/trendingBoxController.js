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
}





