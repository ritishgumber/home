

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

    var dataTypeArray=[];

    var dmusic='<div>';
        dmusic+='<img src="/images/data-music.png" style="width:20px;">';
    dmusic+='</div>';
    dataTypeArray.push(dmusic);

    var dphoto='<div style="margin-top:3px;">';
        dphoto+='<img src="/images/data-photo.png" style="width:24px;">';
    dphoto+='</div>';
    dataTypeArray.push(dphoto);

    var dfile='<div style="margin-top:1px;">';
        dfile+='<img src="/images/data-file.png" style="width:20px;">';
    dfile+='</div>';
    dataTypeArray.push(dfile);    

    var dataNo=0;
    setInterval(function(){
        ++dataNo;
        var dataId="dataid"+dataNo;

        var serverdata='<div style="width:26px;" class="movetoserver '+dataId+'">';
            var randmElm=Math.floor(Math.random() * dataTypeArray.length); 
            serverdata+=dataTypeArray[randmElm];

            var randmElm=Math.floor(Math.random() * dataTypeArray.length); 
            serverdata+=dataTypeArray[randmElm];

            var randmElm=Math.floor(Math.random() * dataTypeArray.length); 
            serverdata+=dataTypeArray[randmElm];       
        serverdata+='</div>';

        $(".datatrans-body").append(serverdata);
    },200);

    setTimeout(function(){

        var dataRemvNo=0;
        setInterval(function(){
            ++dataRemvNo;
            var dataRemvId=".dataid"+dataRemvNo;
            $(dataRemvId).remove();
        },200);

    }, 2990);        
        
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
    //$(".letsstart .animsec1 .mobile")[0].addEventListener( 'webkitTransitionEnd', on2DevicesDisapear, false );
});

var on2DevicesDisapear = function ( e ){ 
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
    $(".goToSlide3 .animsec4 .graphic-column2 .datatrans-head .sub")[0].addEventListener( 'webkitTransitionEnd', onendofslide3, false );
}

var onendofslide3=function(e){
    $(".trending-slides").addClass("goToSlide4");
    $(".goToSlide4 .animsec5 .graphic-row3 .plat5")[0].addEventListener( 'webkitTransitionEnd', readytoscroll, false );
}

var readytoscroll=function(){
    setTimeout(function(){
        $('html,body').animate({scrollTop: 650},'slow',function(){
            $('.trending-slides').remove();
            $('.trending-wrapper').html(trendingHtml);
        });
         
    }, 1000);    
}


/******Html****/
var trendingHtml='<div class="trending-slides cf"> <section class="animsec1"> <div class=""> <div class="graphic-row1"> </div><div class="graphic-row2 flex-general-row-wrapper"> <div class="graphic-column1 flex-general-column-wrapper-center"> <div class="demo-explain flex-general-column-wrapper-center"> <div class="demo-main-heading flex-general-column-wrapper-center"> <p> One API for all your needs</p></div><div class="demo-sub-heading flex-general-column-wrapper-center" style=""> <span style="font-size:25px;font-weight: 100;color:#333;"> The best payment flow </span> <span style="font-size:25px;font-weight: 100;margin-top: -5px;color:#333;"> on web and mobile</span> </div><div class="demo-start-btn flex-general-column-wrapper-center"> <button class="start-demo">Show me</button> </div></div></div><div class="graphic-column2 flex-general-column-wrapper-center"> <div class="demo-product-wrap flex-general-column-wrapper-center"> <div class="big-desktop-wrap flex-general-column-wrapper-center"> <div class="big-desktop"> <div class="big-deskscreen flex-general-column-wrapper-center"> <div class="big-deskscreen-inn"> <img src="/images/foodapp2.jpg" style="width:286px; height:164px;"> </div></div><div class="big-desktail flex-general-column-wrapper-center"> <div class="big-desktail-part1 flex-general-column-wrapper-center"> <div style="height:10px;width:10px; border-radius:25px;background-color:rgba(0, 0, 0, 0.38);"> </div></div><div class="big-desktail-part2"> </div><div class="big-desktail-part3"> </div></div></div></div><div class="laptop-wrap"> <div class="laptop flex-general-column-wrapper-center"> <div class="laptop-spl flex-general-column-wrapper-center"> <div class="laptop-head flex-general-column-wrapper-center"> <div style="height:3px;width:3px; border-radius:25px;background-color:#ccc;"> </div></div><div class="laptop-screen flex-general-column-wrapper-center"> <div class="laptop-inn"> <img src="/images/foodapp2.jpg" style="width:188px; height:102px;"> </div></div></div><div class="laptop-tail flex-general-column-wrapper-center"> </div></div></div><div class="bigtab-wrap"> <div class="bigtab flex-general-column-wrapper-center"> <div class="bigtab-head flex-general-column-wrapper-center"> <div class="cf"> <div class="pull-left" style="height:2px;width:2px;background-color:#ccc;"> </div><div class="pull-left" style="margin-left:2px; height:2px;width:6px;background-color:#ccc;"> </div></div></div><div class="bigtab-screen flex-general-column-wrapper-center"> <div class="bigtab-inn"> <img src="/images/foodapp2-bigtab.jpg" style="width:93px; height:115px;"> </div></div><div class="bigtab-tail flex-general-column-wrapper-center"> <div style="height:6px;width:6px;background-color:#ccc;border-radius:25px;"> </div></div></div></div><div class="smalltab-wrap"> <div class="smalltab flex-general-column-wrapper-center"> <div class="smalltab-head flex-general-column-wrapper-center"> <div class="cf"> <div class="pull-left" style="height:2px;width:2px;background-color:#ccc;"> </div><div class="pull-left" style="margin-left:2px; height:2px;width:6px;background-color:#ccc;"> </div></div></div><div class="smalltab-screen flex-general-column-wrapper-center"> <div class="bigtab-inn"> <img src="/images/foodapp2-smalltab.jpg" style="width:67px; height:91px;"> </div></div><div class="smalltab-tail flex-general-column-wrapper-center"> <div style="height:6px;width:6px;background-color:#ccc;border-radius:25px;"> </div></div></div></div><div class="mobile-wrap"> <div class="mobile flex-general-column-wrapper-center"> <div class="mobile-head flex-general-column-wrapper-center"> <div class="cf"> <div class="mbl-head-features-point1 pull-left"> </div><div class="pull-left mbl-head-features-point2"> </div></div></div><div class="mobile-screen flex-general-column-wrapper-center"> <div class="mobile-screen-inn"> <div class="mbl-slide0 demo-app-color-bg flex-general-column-wrapper-center"> <img src="/images/foodapp2-name.jpg"> </div><div class="mbl-slide1"> <div class="mbl-app-header demo-app-color-bg flex-general-row-wrapper"> <div class="mbl-app-head-logo"> <img src="/images/food-app2-mbl-head.jpg"> </div><div class="mbl-app-head-features"> <div class="mbl-app-notify-icon"> <i class="fa fa-bell"></i> </div><div class="mbl-app-notify-bubble flex-general-column-wrapper-center"> <span>2</span> </div></div></div><div class="mbl-app-search flex-general-row-wrapper"> <div class="mbl-app-searchin-wrap flex-general-row-wrapper"> <div class="search-input"> <div class="inputlike"> <p>Search Restaurants</p></div></div><div class="search-icon"> <i class="fa fa-search mbl-search-default"></i> </div></div></div><div class="mbl-app-content"> <div class="restaurants-box"> <div class="restaurants-box-img"> <img src="/images/app.pizza.jpg"> </div><div class="restaurants-box-det"> <div class="rest-name flex-general-column-wrapper-center"> <span>Almorzastee</span> </div><div class="rest-det flex-general-column-wrapper-center"> <span>Tomato pizza with double cheeze $40</span> </div><div class="rest-link flex-general-column-wrapper-center"> <span>Show Details</span> </div></div></div><div class="restaurants-box"> <div class="restaurants-box-img"> <img src="/images/food.food2.jpg"> </div><div class="restaurants-box-det"> <div class="rest-name flex-general-column-wrapper-center"> <span>Almorzastee</span> </div><div class="rest-det flex-general-column-wrapper-center"> <span>Tomato pizza with double cheeze $40</span> </div><div class="rest-link flex-general-column-wrapper-center"> <span>Show Details</span> </div></div></div></div></div><div class="mbl-slide2"> <div class="mbl-app-header demo-app-color-bg flex-general-row-wrapper"> </div><div class="mbl-app-search flex-general-row-wrapper"> <div class="mbl-app-searchin-wrap flex-general-row-wrapper"> <div class="search-input"> <div class="inputlike"> <p>Restaurants near santiago</p></div></div><div class="search-icon"> <div class="searchicon-mode1"> <i class="fa fa-search"></i> </div><div class="searchicon-mode2"> <i class="fa fa-search"></i> </div><div class="searchspinner"> <img src="/images/app-spinner.gif"> </div><div class="searchicon-mode3"> <i class="fa fa-search"></i> </div></div></div></div><div class="mbl-app-content"> <div class="restaurants-box"> <div class="restaurants-box-img"> <img src="/images/food.ragada.jpg"> </div><div class="restaurants-box-det"> <div class="rest-name flex-general-column-wrapper-center"> <span>Comida Hindu</span> </div><div class="rest-det flex-general-column-wrapper-center"> <span>Sweet and sour snacks $30</span> </div><div class="rest-link flex-general-column-wrapper-center"> <span>Show Details</span> </div></div></div><div class="restaurants-box"> <div class="restaurants-box-img"> <img src="/images/food.dessert.jpg"> </div><div class="restaurants-box-det"> <div class="rest-name flex-general-column-wrapper-center"> <span>Dulce house</span> </div><div class="rest-det flex-general-column-wrapper-center"> <span>Double creame cakes $20</span> </div><div class="rest-link flex-general-column-wrapper-center"> <span>Show Details</span> </div></div></div></div></div><div class="mbl-slide3"> <div class="mbl-app-header demo-app-color-bg flex-general-row-wrapper"> <div class="mbl-app-head-logo"> <img src="/images/food-app2-mbl-head.jpg"> </div><div class="mbl-app-head-features"> <div class="mbl-app-notify-icon"> <i class="fa fa-bell"></i> </div><div class="mbl-app-notify-bubble flex-general-column-wrapper-center"> <span>2</span> </div></div></div><div class="mbl-app-content"> <div class="notification-box"> <div class="datewise"> <div class="date"> <span>Today</span> </div><div class="each-notify-bx flex-general-row-wrapper"> <div class="notify-type"> <img src="/images/mbl-notify-icon.png"> </div><div class="notify-info"> <p> <span class="name">Michel</span> is following you <span class="time">7:30 am</span> </p></div></div><div class="each-notify-bx flex-general-row-wrapper"> <div class="notify-type"> <img src="/images/mbl-notify-icon.png"> </div><div class="notify-info"> <p> <span class="name">Michel</span> is following you <span class="time">7:30 am</span> </p></div></div><div class="each-notify-bx flex-general-row-wrapper"> <div class="notify-type"> <img src="/images/mbl-notify-icon.png"> </div><div class="notify-info"> <p> <span class="name">Michel</span> is following you <span class="time">7:30 am</span> </p></div></div></div><div class="datewise"> <div class="date"> <span>Yesterday</span> </div><div class="each-notify-bx flex-general-row-wrapper"> <div class="notify-type"> <img src="/images/mbl-notify-icon.png"> </div><div class="notify-info"> <p> <span class="name">Michel</span> is following you <span class="time">7:30 am</span> </p></div></div><div class="each-notify-bx flex-general-row-wrapper"> <div class="notify-type"> <img src="/images/mbl-notify-icon.png"> </div><div class="notify-info"> <p> <span class="name">Michel</span> is following you <span class="time">7:30 am</span> </p></div></div><div class="each-notify-bx flex-general-row-wrapper"> <div class="notify-type"> <img src="/images/mbl-notify-icon.png"> </div><div class="notify-info"> <p> <span class="name">Michel</span> is following you <span class="time">7:30 am</span> </p></div></div></div><div class="datewise"> <div class="date"> <span>Monday</span> </div><div class="each-notify-bx flex-general-row-wrapper"> <div class="notify-type"> <img src="/images/mbl-notify-icon.png"> </div><div class="notify-info"> <p> <span class="name">Michel</span> is following you <span class="time">7:30 am</span> </p></div></div></div></div></div></div><div class="mbl-slide4"> <div class="mbl-app-content"> <div class="data-trans-wrap flex-general-column-wrapper-center"> <img src="/images/printer.svg"> </div></div></div></div></div><div class="mobile-tail flex-general-column-wrapper-center"> <div class="mbl-tail-features"> </div></div></div></div></div></div><div class="graphic-column3 flex-general-column-wrapper-center"> </div><div class="graphic-column4 flex-general-column-wrapper-center"> </div></div><div class="graphic-row3"> </div></div></section> <section class="animsec2"> <div class=""> <div class="graphic-row1"> </div><div class="graphic-row2 flex-general-row-wrapper"> <div class="graphic-column1 flex-general-column-wrapper-center"> <div class="demo-explain flex-general-column-wrapper-center"> <div class="demo-main-heading flex-general-column-wrapper-center"> <p style="font-size:28px;"> Total Change</p></div><div class="demo-sub-heading flex-general-column-wrapper-center" style=""> <span style="font-size:25px;font-weight: 100;color:#333;"> The best payment flow </span> <span style="font-size:25px;font-weight: 100;margin-top: -5px;color:#333;"> on web and mobile</span> </div></div></div><div class="graphic-column2 flex-general-column-wrapper-center"> </div><div class="graphic-column3 flex-general-column-wrapper-center"> <div class="demo-explain2 flex-general-column-wrapper-center"> <div class="demo-main-heading2 flex-general-column-wrapper-center"> <p style="font-size:25px;color:#333;"> Powerfull search</p></div><div class="demo-sub-heading2 flex-general-column-wrapper-center" style=""> <span style="font-size:25px;font-weight: 100;color:#333;"> Results in 0.1 seconds </span> <span style="font-size:25px;font-weight: 100;margin-top: -5px;color:#333;"> Context Search</span> </div></div></div></div><div class="graphic-row3"> </div><div class="graphic-column4 flex-general-column-wrapper-center"> </div></div></section> <section class="animsec3"> <div class=""> <div class="graphic-row1"> </div><div class="graphic-row2 flex-general-row-wrapper"> <div class="graphic-column1 flex-general-column-wrapper-center"> <div class="demo-explain flex-general-column-wrapper-center"> <div class="demo-main-heading flex-general-column-wrapper-center"> <p style="font-size:28px;"> RealTime Notifications</p></div><div class="demo-sub-heading flex-general-column-wrapper-center" style=""> <span style="font-size:25px;font-weight: 100;color:#333;"> The global data stream network </span> <span style="font-size:25px;font-weight: 100;margin-top: -5px;color:#333;"> for Mobile and Web applications</span> </div></div></div><div class="graphic-column2 flex-general-column-wrapper-center"> </div><div class="graphic-column3 flex-general-column-wrapper-center"> <div class="demo-explain2 flex-general-column-wrapper-center"> <div class="demo-main-heading2 flex-general-column-wrapper-center"> <p style="font-size:25px;color:#333;"> Powerfull search</p></div><div class="demo-sub-heading2 flex-general-column-wrapper-center" style=""> <span style="font-size:25px;font-weight: 100;color:#333;"> Results in 0.1 seconds </span> <span style="font-size:25px;font-weight: 100;margin-top: -5px;color:#333;"> Context Search</span> </div></div></div></div><div class="graphic-row3"> </div><div class="graphic-column4 flex-general-column-wrapper-center"> </div></div></section> <section class="animsec4"> <div class=""> <div class="graphic-row1"> </div><div class="graphic-row2 flex-general-row-wrapper"> <div class="graphic-column1 flex-general-column-wrapper-center"> </div><div class="graphic-column2 flex-general-column-wrapper-center"> <div class="datatrans-head"> <div class="flex-general-column-wrapper-center" style="margin-top:130px;"> <span class="main" style="margin:0 auto;font-size:28px;font-weight:500;">30 requests per second,completely free.</span> </div><div class="flex-general-column-wrapper-center"> <span class="sub" style="margin:0 auto;font-size:15px;font-size:16px;font-weight:100;">30 requests per second,completely free.</span> </div></div><div class="datatrans-body flex-general-row-wrapper" style="padding-top:5px;"> <div style="width:26px;" class="movetoserver"> <div> <img src="/images/data-music.png" style="width:20px;"> </div><div style="margin-top:3px;"> <img src="/images/data-photo.png" style="width:24px;"> </div><div style="margin-top:1px;"> <img src="/images/data-file.png" style="width:20px;"> </div></div></div><div class="datatrans-tail"> <div class="flex-general-column-wrapper-center" style="margin-top:8px;"> <span style="margin:0 auto;">30 requests per second,completely free.</span> </div><div class="flex-general-column-wrapper-center"> <span style="margin:0 auto;">Every time your app stores or retrieves some data, that’s a request.</span> </div></div></div><div class="graphic-column3"> <div class="server-bx-wrap"> <div class="server-racks"> <div class="server-light-shape server-light1"> </div></div><div class="server-racks" style="margin-top:15px;"> <div class="server-light-shape server-light2"> </div></div><div class="server-racks" style="margin-top:15px;"> <div class="server-light-shape server-light3"> </div></div><div class="server-racks" style="margin-top:15px;"> <div class="server-light-shape server-light4"> </div></div><div class="server-racks" style="margin-top:15px;"> <div class="server-light-shape server-light5"> </div></div><div class="server-racks" style="margin-top:15px;"> <div class="server-light-shape server-light6"> </div></div><div class="server-racks" style="margin-top:15px;"> <div class="server-light-shape server-light7"> </div></div><div class="server-racks" style="margin-top:15px;"> <div class="server-light-shape server-light8"> </div></div><div class="server-racks" style="margin-top:15px;"> <div class="server-light-shape server-light9"> </div></div><div class="server-racks" style="margin-top:15px;"> <div class="server-light-shape server-light10"> </div></div><div class="server-racks" style="margin-top:15px;"> <div class="server-light-shape server-light11"> </div></div></div></div><div class="graphic-column4 flex-general-column-wrapper-center"> </div></div><div class="graphic-row3"> </div></div></section> <section class="animsec5"> <div class=""> <div class="graphic-row1"> <div class="graphic-column1 flex-general-column-wrapper-center"> <div class="demo-explain flex-general-column-wrapper-center"> <div class="demo-main-heading flex-general-column-wrapper-center" style=""> <span style="font-size:25px;font-weight: 500;color:#333;"> much more..</span> </div><div class="demo-sub-heading flex-general-column-wrapper-center" style=""> <span style="font-size:20px;font-weight: 100;color:#333;"> We start you out with 30 requests every second </span> </div></div></div></div><div class="graphic-row2 flex-general-row-wrapper"> <div class="graphic-column1 flex-general-column-wrapper-center"> <div class="flex-general-row-wrapper" style="width:78%;height:100%;"> <div class="more-functs funct1"> <div class="funct-head flex-general-column-wrapper-center"> <span>Queues</span> </div><div class="funct-body flex-general-column-wrapper-center"> <img src="/images/queues.jpg" style="width:140px;"> </div></div><div class="more-functs funct2"> <div class="funct-head flex-general-column-wrapper-center"> <span>Cache</span> </div><div class="funct-body flex-general-column-wrapper-center"> <i class="fa fa-bolt" style="font-size:120px;color:gray;"></i> </div></div><div class="more-functs funct3"> <div class="funct-head flex-general-column-wrapper-center"> <span>Offline Sync</span> </div><div class="funct-body flex-general-column-wrapper-center"> <img src="/images/sync.svg" style="width:170px;"> </div></div></div></div></div><div class="graphic-row3"> <div class="demo-explain flex-general-column-wrapper-center"> <div class="head flex-general-column-wrapper-center" style="margin-top:12px;"> <span style="font-size:20px;font-weight: 100;color:#333;"> Available in</span> </div><div class="head flex-general-column-wrapper-center" style="margin-top:3px;width:20%"> <div style="width:100%;" class="flex-general-row-wrapper"> <div style="width:20%" class="plat1"> <i class="icon ion-social-javascript" style="color:black;font-size:30px;"></i> </div><div style="width:20%" class="plat2"> <i class="icon ion-social-windows" style="color:black;font-size:30px;"></i> </div><div style="width:20%" class="plat3"> <i class="icon ion-social-nodejs" style="color:black;font-size:30px;"></i> </div><div style="width:20%" class="plat4"> <img src="./images/javablack3.png" style="height:32px;"> </div><div style="width:20%" class="plat5"> <i class="icon ion-social-android" style="color:black;font-size:30px;"></i> </div></div></div></div></div><div class="graphic-column4 flex-general-column-wrapper-center"> </div></div></section> </div>';