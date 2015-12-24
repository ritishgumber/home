//Initialization
$(document).ready(function(){
    //Keyframes
    //var supportedFlag = $.keyframe.isSupported();
    //$.keyframe.debug = true;

    /*
    var fadeout={        
        name: 'fadeout',
        '0%':{
            'opacity': '1',            
        },
        '100%':{
            'opacity': '0',            
        }
    };

    var fadein={        
        name: 'fadein',
        '0%':{
            'opacity': '0',            
        },
        '100%':{
            'opacity': '1',            
        }
    };

    var scaledown={        
        name: 'scaledown',
        '0%':{
            'opacity': '1',            
            'transform':'translate(0,7px)'
        },        
        '50%':{
            'opacity': '1',            
            'transform':'translate(0,15px)'
        },
        '100%':{
            'opacity': '0',            
            'transform':'translate(0,20px)'
        }
    };

    var scaleupHead={        
        name: 'scaleupHead',
        '0%':{
            'opacity': '0',            
            'transform':'translate(0,-200px)'            
        }, 
        '20%':{
            'opacity': '0.2',            
            'transform':'translate(0,-240px)'            
        }, 
        '40%':{
            'opacity': '0.4',            
            'transform':'translate(0,-280px)'            
        },       
        '60%':{
            'opacity': '0.6',            
            'transform':'translate(0,-310px)'            
        },       
        '80%':{
            'opacity': '0.8',            
            'transform':'translate(0,-350px)'            
        },
        '100%':{
            'opacity': '1',            
            'transform':'translate(0,-396px)',           
        }
    };

    var scaleSub={        
        name: 'scaleupSub',
        '0%':{
            'opacity': '0',            
            'transform':'translate(0,-270px)'            
        },        
        '50%':{
            'opacity': '0.5',            
            'transform':'translate(0,-290px)'            
        },
        '100%':{
            'opacity': '1',            
            'transform':'translate(0,-310px)',           
        }
    };

    var scaleupHead2={        
        name: 'scaleupHead2',
        '0%':{
            'opacity': '0',            
            'transform':'translate(500px,-300px)'            
        },        
        '50%':{
            'opacity': '0.5',            
            'transform':'translate(500px,-320px)'            
        },
        '100%':{
            'opacity': '1',            
            'transform':'translate(500px,-330px)',           
        }
    };

    var scaleupSub2={        
        name: 'scaleupSub2',
        '0%':{
            'opacity': '0',            
            'transform':'translate(500px,-270px)'            
        },        
        '50%':{
            'opacity': '0.5',            
            'transform':'translate(500px,-290px)'            
        },
        '100%':{
            'opacity': '1',            
            'transform':'translate(500px,-310px)',           
        }
    }

    var sect2Part1ExplainFadein={        
        name: 'sect2Part1ExplainFadein',
        '0%':{
            'opacity': '0',
            'transform':'translate(100px,-396px)',            
        },
        '100%':{
            'opacity': '1', 
            'transform':'translate(100px,-396px)',            
        }
    };

    $.keyframe.define([fadeout,fadein,scaledown,scaleupHead,scaleSub,scaleupHead2,scaleupSub2,sect2Part1ExplainFadein]);
    */
    //keyframes

    
    
});


    /*$(".animsec1 .demo-explain").hide();
    $(".animsec2 .graphic-column1").css("display","block");

    $(".animsec1 .demo-product-wrap")
    .playKeyframe(['fadeout 1s ease 0s 1 normal forwards'],
    function(){       
    });

    $(".animsec2 .demo-product-wrap")
    .playKeyframe(['fadein 1s ease 0s 1 normal forwards','scaleupHead 1s ease 1s 1 normal forwards'],
    function(){

        $(".animsec2 .graphic-column2").css("display","block"); 
        $(".animsec2 .demo-main-heading")
        .playKeyframe(['sect2Part1ExplainFadein 1s ease 1s 1 normal forwards'],
        function(){

            $(".animsec2 .demo-sub-heading")
            .playKeyframe(['sect2Part1ExplainFadein 1s ease 1s 1 normal forwards'],
            function(){

            });
        });  

    });*/


$(".start-demo").click(function(){       

    $(".trending-slides").addClass("goToSlide1");
    $(".goToSlide1 .animsec1 .graphic-column2 .demo-product")[0].addEventListener( 'webkitTransitionEnd', onDeviceDisapear, false );
     
}); 

var onDeviceDisapear = function ( e ){ 
    $(".trending-slides").addClass("goToSlide2");
    $(".goToSlide2 .animsec1 .demo-product")[0].addEventListener( 'webkitTransitionEnd', onSection2Appear, false );
}

var onSection2Appear = function ( e ){ 
    $(".trending-slides").addClass("goToSlide3");    
}





