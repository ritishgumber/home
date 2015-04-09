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

        $scope.initCodeEditors( ['objectInsert', 'objectQuery']);

        window.seojsSnapshotReady = true;

        var myCodeMirror = CodeMirror.fromTextArea(document.getElementById('initCode'),
                    {
                        mode:  "javascript",
                        lineNumbers: true,
                        readOnly : "nocursor"
                    });  

        myCodeMirror.setSize(null,50);
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

        if(id===1)
            $scope.initCodeEditors( ['objectInsert', 'objectQuery']);

        if(id===2){
            $scope.initCodeEditors( ['cloudNotifications', 'objectNotifications']);
        }

        if(id===4){
            $scope.initCodeEditors( ['searchSearch', 'indexSearch']);
        }


    };

    $scope.initCodeEditors = function(arr){
        var codeEditors = arr;

        for(var i=0;i<codeEditors.length; i++){

            if(document.getElementById(codeEditors[i]) && codeMirrorEnabled.indexOf(codeEditors[i]) === -1){

                var myCodeMirror = CodeMirror.fromTextArea(document.getElementById(codeEditors[i]),
                    {
                        mode:  "javascript",
                        lineNumbers: true,
                        //theme : 'ambiance',
                        readOnly : "nocursor"
                    });

                codeMirrorEnabled.push(codeEditors[i]);
            }
        }
    };

 }]);
