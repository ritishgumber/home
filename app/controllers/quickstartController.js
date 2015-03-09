app.controller('quickstartController',['$scope',function($scope){
    $scope.getCssClass ="features-page";

    var codeMirrorEnabled = [];

    $scope.init = function(){

        $('#feature1').show();
        $('#feature2').hide();
        $('#feature4').hide();

        

        $scope.initCodeEditors( ['objectInsert', 'objectQuery']);

        
        
    }

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
                        theme : 'ambiance',
                        readOnly : "nocursor"
                    });

                codeMirrorEnabled.push(codeEditors[i]);
            }
        }
    };

 }]);
