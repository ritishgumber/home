
var codeMirrorEnabled = [];

//Initialization
$(document).ready(function(){
    languageClick('js',1);
    switchFeature(1);
    featureSelected  = 1;  

    //LoadTutorials
    getTutorials();   
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
                readOnly : "nocursor"
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
    $.get(serverURL+'/tutorial', function(data, status){
        if(status=="success"){
          for(var i=0;i<data.length;++i){
            bindTutorialData(data[i]);
          }
        }
    }); 
}

function bindTutorialData(tutData){

    var tutHtml='<section id="why" class="section why why-quickstart cb-tutorials">';
        tutHtml+='<div class="container">';
        tutHtml+='<!--Heading-->';
        tutHtml+='<div class="tut-heading flex-general-column-wrapper-center">';
        tutHtml+='<h1>'+tutData.name+'</h1>';
        tutHtml+='<span>'+tutData.description+'</span>';
        tutHtml+='</div>';

        tutHtml+='<!--Boxes-->';
        tutHtml+='<div class="tut-bx-wrapper flex-general-row-wrapper">';
                //Create Tutorial Boxes
                var result=createTutorialBox(tutData.tutorials); 
                tutHtml+=result;             
        tutHtml+='</div>';    
        tutHtml+='</div>';
        tutHtml+='</section>';

    $(".tutorials-parent").append(tutHtml);  
}

function createTutorialBox(tutorialBoxList){
    var tutBoxHtml="";
    for(var i=0;i<tutorialBoxList.length;++i){    
    var boxHtml='<!--******BOX*******-->';
        boxHtml+='<div style="position:relative">';
        boxHtml+='<div class="tut-bx-container" data-boxid="'+tutorialBoxList[i].id+'">';
        boxHtml+='<div class="tut-name">';
        boxHtml+='<h3 class="flex-general-column-wrapper-center" style="margin:0">'+tutorialBoxList[i].name+'</h3>';
        boxHtml+='</div>'; 
        boxHtml+='<div class="tut-desc">';
        boxHtml+='<div class="flex-general-column-wrapper-center">';
        boxHtml+='<span>'+tutorialBoxList[i].description+'</span>';
        boxHtml+='</div>';
        boxHtml+='</div>'; 
        boxHtml+='<div class="tut-labels flex-general-row-wrapper-center" style="margin-top:20px;">';
        boxHtml+='<div class="flex-general-row-wrapper" style="width:85%">';
        boxHtml+='<div class="flex-equal-ratio-items flex-general-row-wrapper-center">';
        boxHtml+='<i class="fa fa-graduation-cap"></i>';
        boxHtml+='&nbsp;'+tutorialBoxList[i].difficulty;
        boxHtml+='</div>';
        boxHtml+='<div class="flex-equal-ratio-items flex-general-row-wrapper-center">';
        boxHtml+='<i class="fa fa-clock-o"></i>';
        boxHtml+='&nbsp;'+tutorialBoxList[i].time;
        boxHtml+='</div>';
        boxHtml+='</div>';                        
        boxHtml+='</div>';
        boxHtml+='<div style="border-top:1px solid #BCBABA;margin-top:25px;">';
        boxHtml+='</div>';        
           
        boxHtml+='<div class="tut-prog-langs" style="margin-top:5px;">';
        boxHtml+='<div class="flex-general-column-wrapper-center" style="margin:0;">';
        boxHtml+='<span style="margin:0;color:#BCBABA;">Available</span>';
        boxHtml+='</div>'; 
        boxHtml+='<div class="prog-lang-list flex-general-column-wrapper-center" style="margin-top:10px;">';
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
            //PHP
            //Android
            //IOS
            
        }
        boxHtml+=langs;//Bind languages

        boxHtml+='</div>';
        boxHtml+='</div>';   
        boxHtml+='</div>'; 
        boxHtml+='</div>';

        boxHtml+='<!--On Hover-->';
        boxHtml+='<div id="'+tutorialBoxList[i].id+'" class="tut-bx-container-gray-bx flex-general-column-wrapper-center">';
        boxHtml+='<a href="'+tutorialBoxList[i].tutorialLink+'" target="_blank" class="btn tut-view-btn"><p style="margin-top:3px;">View</p></a>';
        boxHtml+='</div>'; 
        boxHtml+='</div>'; 
        boxHtml+='<!--****/END BOX****-->';

        tutBoxHtml+=boxHtml;  
    } 

    return tutBoxHtml;
}

//Tutorials functions
$(document).on("mouseenter",".tut-bx-container",function(event){  
    var targetDiv="#"+$(this).data("boxid");  
    $(targetDiv).css("visibility", "visible");    
});

$(document).on("mouseleave",".tut-bx-container-gray-bx",function(event){
    $(this).css("visibility", "hidden");    
});
