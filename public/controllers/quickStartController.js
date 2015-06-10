
var codeMirrorEnabled = [];

//Initialization
$(document).ready(function(){
    languageClick('js',1);
    switchFeature(1);
    featureSelected  = 1;     
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
