var codeMirrorEnabled = [];
var langTabSelected = 'js';
var featureSelected = 'storage';

//Initialization
$(document).ready(function(){

	hideAllCode();
    $('#div-storage-js').show();
    $(".storagefeat").addClass('activatefeat');
    $(".jstab").addClass('activatelang');
    initCodeEditors( ['storage-js']);


    /****Tracking************/
     mixpanel.track('Visted Home Page', {"visited":"visited Home Page"});
    /****End of Tracking*****/

});
//Initialization


//Functions
$(".each-feature-wrap").click(function () {
    $(".each-feature-wrap").each(function(){
        $(this).removeClass('activatefeat');
    });

    $(this).addClass('activatefeat');
    var featureName=$(this).data('featname');
    featureClick(featureName);

    $(".introrap").remove();
    var introJson=feautureIntroText(featureName);

    var introHtml='<div class="introrap">';
        introHtml+='<div class="intro1">';
            introHtml+='<span style="color:#159CEE;font-size:26px;font-weight:100;line-height:27px;">'+introJson.intro1+'</span>';
        introHtml+='</div>';

        introHtml+='<div class="intro2" style="margin-top:12px;">';
           introHtml+='<span style="color:#383838;font-size:16px;">'+introJson.intro2+'</span>';
        introHtml+='</div>';
    introHtml+='</div>';

    $(".todos-explain").html(introHtml);
});

$(".lang-fliprlabel").click(function(event){
    event.preventDefault();

    $(".lang-fliprlabel").each(function(){
        $(this).removeClass('activatelang');
    });

    $(this).addClass('activatelang');

    var langName=$(this).data("langname");
    languageClick(langName);
});

var languageClick = function(lang){
    hideAllCode();
    langTabSelected = lang;
    featureClick(featureSelected);
};

var featureClick = function(feature){
    hideAllCode();
    var WidgetId=feature+'-'+langTabSelected;
    $('#div-'+WidgetId).show();
    initCodeEditors( [WidgetId]);
    featureSelected = feature;
};

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

var hideAllCode = function(){
    $('#div-storage-js').hide();
    $('#div-storage-nodejs').hide();
    $('#div-storage-java').hide();
    $('#div-storage-dotnet').hide();
    $('#div-storage-curl').hide();

    $('#div-search-js').hide();
    $('#div-search-nodejs').hide();
    $('#div-search-java').hide();
    $('#div-search-dotnet').hide();
    $('#div-search-curl').hide();

    $('#div-realtime-js').hide();
    $('#div-realtime-nodejs').hide();
    $('#div-realtime-java').hide();
    $('#div-realtime-dotnet').hide();
    $('#div-realtime-curl').hide();

    $('#div-queues-js').hide();
    $('#div-queues-nodejs').hide();
    $('#div-queues-java').hide();
    $('#div-queues-dotnet').hide();
    $('#div-queues-curl').hide();


    $('#div-cache-js').hide();
    $('#div-cache-nodejs').hide();
    $('#div-cache-java').hide();
    $('#div-cache-dotnet').hide();
    $('#div-cache-curl').hide();
};

function feautureIntroText(featureName){
    var IntroJson={
        intro1:null,
        intro2:null
    };

    if(featureName=="storage"){
        IntroJson.intro1="Rock solid performance and scale. Store data. Any data.";
        IntroJson.intro2="Our API ensures compatibility with a variety of development tools, platforms and app infrastructures. Eliminate the risk and cost involved with scale thanks to CloudBoost's horizontal scaling architecture. Our Enhanced features ensure data is always available and durable throughout any situation.";
    }
    if(featureName=="search"){
        IntroJson.intro1="Implement search engine in your apps with CloudSearch.";
        IntroJson.intro2="Implementing a search engine in your app can never be much easier. We index your data for search and let your users use our CloudSearch feature to get most accurate and relevant data as possible.";
    }
    if(featureName=="realtime"){
        IntroJson.intro1="Build realtime apps, effortlessly.";
        IntroJson.intro2="When data changes, apps built with CloudBoost update instantly across every device -- web or mobile. Get an instant notification when data is inserted, updated, or deleted.";
    }
    if(featureName=="queues"){
        IntroJson.intro1="Reliable queues that tie your services and components together. ";
        IntroJson.intro2="CloudQueue is the glue that ties micro-services together by providing a reliable way to communicate between components. Highly available, persistent by design, with best-effort one-time delivery, CloudQueue is the most industrial strength, cloud-native solution for your modern application architecture.";
    }
    if(featureName=="cache"){
        IntroJson.intro1="Turbo charge your apps with CloudBoost Cache.";
        IntroJson.intro2="CloudCache is an scalable key/value store that’s perfect for applications that need to share state, pass data, and coordinate activity between processes and devices. Boost your apps by making use of high-performance middle tier for processing and communication.";
    }
    return IntroJson;
}

function getAnnouncement(categories){
  var res=null;
  for(var j=0;j<categories.length;++j){
    if(categories[j]=="announcement"){
      res=categories[j];
      break;
    }
  }
  return res;
}

/****************************************Mixpanel Area********************************************************************/
$("#header-signupbtn").click(function(){

       mixpanel.track('Landing Header Sign Up Button', {"Clicked":"Sign up for free"});

});

$("#header-loginbtn").click(function(){

       mixpanel.track('Landing Header Login Button', {"Clicked":"Login"});

});

$("#home-body-signup-btn").click(function(){

       mixpanel.track('HomePage Body Sign Up Button', {"Clicked":"HomePage Body Sign Up Button"});

});

$("#home-body-quickstart-btn").click(function(){

       mixpanel.track('HomePage CodeWidget QuickStart Button', {"Clicked":"HomePage CodeWidget QuickStart Button"});

});
$("#home-body-compare-btn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/
       mixpanel.track('HomePage CodeWidget Compare Button', {"Clicked":"HomePage CodeWidget Compare Button"});
      /****End of Tracking*****/
    }
});

$("#home-bottom-quickstart-btn").click(function(){

       mixpanel.track('HomePage Bottom QuickStart Button', {"Clicked":"HomePage Bottom QuickStart Button"});

});
$("#home-bottom-compare-btn").click(function(){

       mixpanel.track('HomePage Bottom Compare Button', {"Clicked":"HomePage Bottom Compare Button"});

});

$(".dockerlink").click(function(){

       mixpanel.track('HomePage Docker Link', {"Clicked":"HomePage Docker Link"});

});
$(".kuberneteslink").click(function(){

       mixpanel.track('HomePage Kubernetes Link', {"Clicked":"HomePage Kubernetes Link"});

});

$(".instagramclone").click(function(){

       mixpanel.track('HomePage Instagram Clone', {"Clicked":"HomePage Instagram Clone"});

});
$(".hnewsclone").click(function(){

       mixpanel.track('HomePage HackerNews Clone', {"Clicked":"HomePage HackerNews Clone"});

});
$(".slackclone").click(function(){

       mixpanel.track('HomePage Slack Clone', {"Clicked":"HomePage Slack Clone"});

});
$(".tinderclone").click(function(){

       mixpanel.track('HomePage Tinder Clone', {"Clicked":"HomePage Tinder Clone"});

});
$(".whatsappclone").click(function(){

       mixpanel.track('HomePage Whatsapp Clone', {"Clicked":"HomePage Whatsapp Clone"});
      
});
