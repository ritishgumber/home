app.controller('quickstartController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.getCssClass ="features-page";
    $rootScope.showHeader=true;

    var codeMirrorEnabled = [];

    $scope.init = function(){ 

        var meta=document.getElementsByTagName("meta");
        for (var i=0; i<meta.length; i++) {
            if (meta[i].name.toLowerCase()=="description") {
                meta[i].content= "Quickstart : Start building your app in under 2 minutes.  ";
            }
             if (meta[i].name.toLowerCase()=="keywords") {
                  meta[i].content= "quickstart, cloudbost quickstart, baas, backend as a service, database as a service, hybrid database, cloudboost, search, realtime, storage, app storage";
              }
        }

        document.title = "Quickstart";
        
        $('#feature1').show();
        $('#feature2').hide();
        $('#feature4').hide();


        window.seojsSnapshotReady = true;

        $scope.languageClick('js',1);
        $scope.featureSelected  = 1;


    };

    $scope.languageClick=function(lang, id){

        if(lang){
             $scope.languageSelected = lang;
        }

        lang = $scope.languageSelected;
        $('.js').removeClass('active');
        $('.java').removeClass('active');
        $('.'+lang).addClass('active');
        $('.javaCode').hide();
        $('.jsCode').hide();
        $('.'+lang+'Code').show();

        if(id){
            $scope.featureSelected = id;
        }
       
        $scope.initCodeEditors( ['initCode-'+lang],'javascript',50);

        if($scope.featureSelected  ===1){
            $scope.initCodeEditors( ['objectInsert-'+lang,'objectQuery-'+lang],'javascript');
        }

        if($scope.featureSelected  === 2){
            $scope.initCodeEditors( ['objectInsert-'+lang,'objectQuery-'+lang],'javascript');
        }
    };

    $scope.switchFeature = function(id){
    	//remove active classes. 
    	$('#feature1List').removeClass('active');
    	$('#feature2List').removeClass('active');
    	$('#feature4List').removeClass('active');

    	$('#feature'+id+'List').addClass('active');

    	$('#feature1').hide();
        $('#feature2').hide();
        $('#feature4').hide();

        $('#feature'+id).show();

        $scope.languageClick(null,id);
        


    };

    $scope.initCodeEditors = function(arr,language,size){
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

 }]);
