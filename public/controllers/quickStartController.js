
var codeMirrorEnabled = [];

//Initialization
$(document).ready(function(){
    languageClick('js',1);
    switchFeature(1);
    featureSelected  = 1;

    //LoadTutorials
    getTutorials();

    mixpanel.track('Visted QuickStart Page', {"visited":"visited QuickStart Page"});

});
//Initialization

$(".js").click(function(event){
    event.preventDefault();
    languageClick('js');
});

$(".java").click(function(event){
    event.preventDefault();
    languageClick('java');
});

var languageClick=function(lang, id){

    if(lang){
        languageSelected = lang;
    }

    lang =languageSelected;
    $('.js').removeClass('active');
    $('.java').removeClass('active');
    $('.'+lang).addClass('active');
    $('.javaCode').hide();
    $('.jsCode').hide();
    $('.'+lang+'Code').show();

    if(id){
        featureSelected = id;
    }

    initCodeEditors( ['initCode-'+lang],'javascript',50);

    if(featureSelected  ===1){
        initCodeEditors( ['objectInsert-'+lang,'objectQuery-'+lang],'javascript');
    }

    if(featureSelected  === 2){
        initCodeEditors( ['objectNotifications-'+lang,'cloudNotifications-'+lang],'javascript');
    }

     if(featureSelected  === 3){
        initCodeEditors( ['searchSearch-'+lang,'indexSearches-'+lang],'javascript');
    }
};

$("#afeature1").click(function(event){
    event.preventDefault();
    switchFeature(1);
});

$("#afeature2").click(function(event){
    event.preventDefault();
    switchFeature(2);
});

$("#afeature3").click(function(event){
    event.preventDefault();
    switchFeature(3);
});

var switchFeature = function(id){
    //remove active classes.
    $('#feature1List').removeClass('active');
    $('#feature2List').removeClass('active');
    $('#feature3List').removeClass('active');

    $('#feature'+id+'List').addClass('active');

    $('#feature1').hide();
    $('#feature2').hide();
    $('#feature3').hide();

    $('#feature'+id).show();

    languageClick(null,id);
};


var initCodeEditors = function(arr,language,size){
    var codeEditors = arr;

    for(var i=0;i<codeEditors.length; i++){

        if(document.getElementById(codeEditors[i]) && codeMirrorEnabled.indexOf(codeEditors[i]) === -1){

            var myCodeMirror = CodeMirror.fromTextArea(document.getElementById(codeEditors[i]),
            {
                mode:  language,
                lineNumbers: true,
                //theme : 'ambiance',
                readOnly : true
            });

            if(size){
                myCodeMirror.setSize(null,size);
            }

            codeMirrorEnabled.push(codeEditors[i]);
        }
    }
};

//getTutorials
function getTutorials(){
    $.get('https://service.cloudboost.io/tutorial', function(data, status){
        if(status=="success"){
          for(var i=0;i<data.length;++i){
            bindTutorialData(data[i]);
          }
        }
        $(".tutorials-loading").remove();
    });
}

function bindTutorialData(tutData){

    var tutHtml='<section id="" class="cb-tutorials">';
        tutHtml+='<div class="container bx-list">';
        tutHtml+='<!--Heading-->';
        tutHtml+='<div class="tut-heading flex-general-column-wrapper-center" style="margin-bottom:30px !important;"">';
        tutHtml+='<h1 style="color:#737373; font-family:Signika, sans-serif; font-weight: 700; ">'+tutData.name+'</h1>';
        tutHtml+='<span style="margin-top:10px; color:#737373; font-family: Signika, sans-serif; font-weight: 300; ">'+tutData.description+'</span>';
        tutHtml+='</div>';

        tutHtml+='<!--Boxes-->';
        tutHtml+='<div class="tut-bx-wrapper flex-general-row-wrapper">';
                //Create Tutorial Boxes

                tutData.tutorials.sort(function (a, b) {
                  if (a.order > b.order) {
                    return 1;
                  }
                  if (a.order < b.order) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
                });
                var result=createTutorialBox(tutData.tutorials);
                tutHtml+=result;
        tutHtml+='</div>';
        tutHtml+='</div>';
        tutHtml+='</section>';

    $(".tutorials-parent").append(tutHtml);
}

function createTutorialBox(tutorialBoxList){
    var tutBoxHtml="";
    var tutorialURL = "https://tutorials.cloudboost.io";
    for(var i=0;i<tutorialBoxList.length;++i){
    var boxHtml='<!--******BOX*******-->';
        boxHtml+='<div style="position:relative; margin-top:20px; margin-bottom:5px;">';
        boxHtml+='<div class="tut-bx-container" data-boxid="'+tutorialBoxList[i].id+'">';
        boxHtml+='<div class="tut-name">';
        boxHtml+='<h3 class="flex-general-column-wrapper-center" style="margin-top:30px;color:#737373; font-family: Signika, sans-serif; font-weight: 300; ">'+tutorialBoxList[i].name+'</h3>';
        boxHtml+='</div>';
        boxHtml+='<div class="tut-desc">';
        boxHtml+='<div class="flex-general-column-wrapper-center">';
        boxHtml+='<span style="color:#737373; font-family: Signika, sans-serif; font-weight: 300; font-size:15px">'+tutorialBoxList[i].description+'</span>';
        boxHtml+='</div>';
        boxHtml+='</div>';
        boxHtml+='<div class="tut-labels flex-general-row-wrapper-center" style="margin-top:30px;">';
        boxHtml+='<div class="flex-general-row-wrapper" style="width:85%; color:#737373;">';
        boxHtml+='<div class="flex-equal-ratio-items flex-general-row-wrapper-center">';
        boxHtml+='<i class="fa fa-graduation-cap" style="color:#BEB7BF !important"></i>';
        boxHtml+='<span style="color:#BEB7BF !important">';
        boxHtml+='&nbsp;'+tutorialBoxList[i].difficulty;
        boxHtml+='</span>';
        boxHtml+='</div>';
        boxHtml+='<div class="flex-equal-ratio-items flex-general-row-wrapper-center">';
        boxHtml+='<i class="fa fa-clock-o" style="color:#BEB7BF !important"></i>';
        boxHtml+='<span style="color:#BEB7BF !important">';
        boxHtml+='&nbsp;'+tutorialBoxList[i].time;
        boxHtml+='</span>';
        boxHtml+='</div>';
        boxHtml+='</div>';
        boxHtml+='</div>';
        boxHtml+='<div style="border-top:1px solid #BCBABA;margin-top:25px;">';
        boxHtml+='</div>';

        boxHtml+='<div class="tut-prog-langs" style="margin-top:5px;">';
        boxHtml+='<div class="flex-general-column-wrapper-center" style="margin:0;">';
        boxHtml+='<span style="margin:0;color:#BCBABA;">Available</span>';
        boxHtml+='</div>';
        boxHtml+='<div class="prog-lang-list flex-general-column-wrapper-center">';
        boxHtml+='<div class="flex-general-row-wrapper">';

        //Loop over languages
        var langs="";
        for(var j=0;j<tutorialBoxList[i].languages.length;++j){
            //Javascript
            if(tutorialBoxList[i].languages[j]=="Javascript"){
                var langHtml='<div class="flex-equal-ratio-items langIcon">';
                    langHtml+='<i class="icon ion-social-javascript fa-lg"></i>';
                    langHtml+='</div>';
                langs+=langHtml;
            }
            //.Net
            if(tutorialBoxList[i].languages[j]=="DotNet"){
                var langHtml='<div class="flex-equal-ratio-items langIcon">';
                    langHtml+='<i class="icon ion-social-windows fa-lg"></i>';
                    langHtml+='</div>';
                langs+=langHtml;
            }
            //Node.js
            if(tutorialBoxList[i].languages[j]=="Nodejs"){
                var langHtml='<div class="flex-equal-ratio-items langIcon">';
                    langHtml+='<i class="icon ion-social-nodejs fa-lg"></i>';
                    langHtml+='</div>';
                langs+=langHtml;
            }
            //Java
            if(tutorialBoxList[i].languages[j]=="Java"){
                var langHtml='<div class="flex-equal-ratio-items langIcon">';
                    langHtml+='<img src="./images/java.png" style="height:24px;width:22px;margin-top:-6px;">';
                    langHtml+='</div>';
                langs+=langHtml;
            }
            //Android
            if(tutorialBoxList[i].languages[j]=="Android"){
                var langHtml='<div class="flex-equal-ratio-items langIcon">';
                    langHtml+='<i class="icon ion-social-android fa-lg"></i>';
                    langHtml+='</div>';
                langs+=langHtml;
            }
            //IOS
            if(tutorialBoxList[i].languages[j]=="IOS"){
                var langHtml='<div class="flex-equal-ratio-items langIcon">';
                    langHtml+='<i class="icon ion-social-apple fa-lg"></i>';
                    langHtml+='</div>';
                langs+=langHtml;
            }
            //.Net
            //PHP
            //IOS
        }
        boxHtml+=langs;//Bind languages

        boxHtml+='</div>';
        boxHtml+='</div>';
        boxHtml+='</div>';
        boxHtml+='</div>';

        var tURL=tutorialURL+"/"+tutorialBoxList[i].tutorialLink.lang+"/"+tutorialBoxList[i].tutorialLink.category+"/"+tutorialBoxList[i].tutorialLink.subcategory;
        boxHtml+='<!--On Hover-->';
        boxHtml+='<div id="'+tutorialBoxList[i].id+'" class="tut-bx-container-gray-bx flex-general-column-wrapper-center">';
        boxHtml+='<a href="'+tURL+'" target="_blank" data-subcat="'+tutorialBoxList[i].tutorialLink.subcategory+'" class="btn tut-view-btn"><p style="margin-top:3px;">View</p></a>';
        boxHtml+='</div>';
        boxHtml+='</div>';
        boxHtml+='<!--****/END BOX****-->';

        tutBoxHtml+=boxHtml;
    }

    return tutBoxHtml;
}

//Tutorials functions
$(document).on("mouseenter",".tut-bx-container",function(event){
    $(".tut-bx-container-gray-bx").css("visibility", "hidden");
    var targetDiv="#"+$(this).data("boxid");
    $(targetDiv).css("visibility", "visible");
    $(targetDiv).find(".tut-view-btn").css("display", "initial");
    $(targetDiv).removeClass('animated fadeOut');
    $(targetDiv).addClass('animated fadeIn');
});

$(document).on("mouseleave",".tut-bx-container-gray-bx",function(event){
    $(this).find(".tut-view-btn").css("display", "none");
    $(this).removeClass('animated fadeIn');
    $(this).addClass('animated fadeOut');
    $(this).css("visibility", "hidden");
});

$(document).on("click",".tut-view-btn",function(event){
   var subCategory=$(this).data("subcat");

       mixpanel.track('Quickstart-View Tutorial', {"subcategory":subCategory});

});

$(".quickstart-getstarted-btn").click(function(){

       mixpanel.track('Quickstart-Getting Started Tutorial', {"clicked":"Clicked on short button for first app"});

});
