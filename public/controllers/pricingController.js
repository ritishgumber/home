var apiArray = [];
var storageArray = [];
var searchArray = [];
var realtime = [];

var storageAmt = (1 * 2) ;
var apiAmt = (0.5 * 100) * 0.6;
var realtimeAmt = (50) * 0.2 ;
var searchAmt = (0.2) * 20 ;

//Initialization
$(document).ready(function(){
   

    for(var i=0;i<=2000; i+=50){
      realtime.push(i);
    }

    for(var i=0;i<=20; i+=0.5){
      apiArray.push(i);
    }

    for(var i=0;i<=20; i+=1){
      storageArray.push(Math.floor(i*1.8));
    }

    for(var i=0;i<=2; i+=0.2){
      searchArray.push(Math.round(i * 10) / 10);
    }

    
    $('#storageText').text(storageAmt);    
    $('#apiText').text(apiAmt);    
    $('#realtimeText').text(realtimeAmt);
    $('#searchText').text(searchAmt);

    updateTotal();

    $("#api").ionRangeSlider({
        values : apiArray,
        type: "single",
        from : 1,
        postfix: " million requests",
        grid: true,
        onChange: function (data) {
          
        apiAmt = (data.from_value * 100) * 0.6;          

          $('#apiText').text(apiAmt);

          updateTotal();
        },
    });

    $("#storage").ionRangeSlider({
        values : storageArray,
        type: "single",
        from : 1,
        postfix: " GB",
        grid: true,
        onChange: function (data) {
         
        storageAmt = (data.from_value * 2);         

          $('#storageText').text(storageAmt);

          updateTotal();
         
        },
    });


    $("#realtime").ionRangeSlider({
        values : realtime,
        type: "single",
        from : 1,
        postfix: " concurrent connections",
        grid: true,
        onChange: function (data) {

         
           realtimeAmt = (data.from_value) * 0.2;
          

          $('#realtimeText').text(realtimeAmt);

          updateTotal();
         
        },
    });


    $("#search").ionRangeSlider({
        values : searchArray,
        type: "single",
        from : 1,
        postfix: " million documents",
        grid: true,
        onChange: function (data) {
          
            searchAmt = (data.from_value) * 20 ;
            

            $('#searchText').text(searchAmt);

            updateTotal();
        },
    });

    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('Visted Pricing Page', {"visited":"visited Pricing Page"});
      /****End of Tracking*****/
    }
});
//Initialization

$("#dfaq1").click(function(event){
    event.preventDefault();
    faqExpand('faq1')
});

$("#dfaq2").click(function(event){
    event.preventDefault();
    faqExpand('faq2')
});

$("#dfaq3").click(function(event){
    event.preventDefault();
    faqExpand('faq3')
});

$("#dfaq4").click(function(event){
    event.preventDefault();
    faqExpand('faq4')
});

$("#dfaq5").click(function(event){
    event.preventDefault();
    faqExpand('faq5')
});

$("#dfaq6").click(function(event){
    event.preventDefault();
    faqExpand('faq6')
});

$("#dfaq7").click(function(event){
    event.preventDefault();
    faqExpand('faq7')
});

$("#dfaq8").click(function(event){
    event.preventDefault();
    faqExpand('faq8')
});

var faqExpand = function(id){  

    if($('#'+id).hasClass("in")){
        $('#'+id).removeClass("in");
    }else{
        $('#'+id).addClass("in");
    }    
};

function updateTotal(){
    $('#totalText').text(storageAmt + searchAmt + realtimeAmt + apiAmt);
}

$("#pricing-body-signup-btn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('PricingPage Body SignUp Button', {"Clicked":"PricingPage Body SignUp Button"});
      /****End of Tracking*****/
    }
});

$("#pricing-body-getintouch-btn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('PricingPage GetIn-Touch Button', {"Clicked":"PricingPage GetIn-Touch Button"});
      /****End of Tracking*****/
    }
}); 

$("#pricing-body-compare-btn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('PricingPage Compare Button', {"Clicked":"PricingPage Compare Button"});
      /****End of Tracking*****/
    }
});  

$("#pricing-bottom-getintouch-btn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('PricingPage Bottom GetIn-Touch Button', {"Clicked":"PricingPage Bottom GetIn-Touch Button"});
      /****End of Tracking*****/
    }
});
