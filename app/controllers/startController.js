app.controller('startController',
	['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
	$rootScope.showHeader=true;
	$scope.showNotifications=false;
	var codeMirrorEnabled = [];

	$scope.commentsList=[];
	$scope.notificationCount=0;
	$scope.commentIndex=0;
	var newAdminComment={
		index:$scope.commentIndex,
		isUser:false,
		userPic:"defult-user",
		comment:"Welcome to CloudBoost",
		notify:false,
		name:"CloudBoost"		
	}
	$scope.commentsList.push(newAdminComment);
	
	$scope.init = function(){		

		var meta=document.getElementsByTagName("meta");
		for (var i=0; i<meta.length; i++) {
		    if (meta[i].name.toLowerCase()=="description") {
		        meta[i].content= "CloudBoost is one complete backend and storage solution for your apps which does data-storage, search and realtime.";
		    }

		    if (meta[i].name.toLowerCase()=="keywords") {
		        meta[i].content= "baas, backend as a service, database as a service, hybrid database, cloudboost, search, realtime, storage, app storage";
		    }
		}

		document.title = "CloudBoost : One API to build your next big thing.";		
		window.seojsSnapshotReady = true;


		//For Code tab        
        $('#feature1').show();
        $('#feature2').hide();
        $('#feature4').hide();
        $scope.initCodeEditors( ['objectInsert', 'objectQuery']);
	};

	$scope.toCta = function(){
    	$('html,body').animate({scrollTop: $('#cta').offset().top-200},500); //smooth scroll animation.
    };

    $scope.toggleNotifications=function(){
    	
		if($scope.showNotifications){
    		$scope.showNotifications=false;    		
    	}else{
    		$scope.showNotifications=true;
    		$scope.notificationCount=0	    		
    	}
    	   	    	
    };

    $scope.postComment=function(valid){
    	if(valid && $scope.comment){
	    		++$scope.commentIndex;
	    	var newComment={
	    		index:$scope.commentIndex,
	    		isUser:true,
	    		userPic:"user-comment",
	    		comment:$scope.comment,
	    		notify:false,
	    		name:"You"    		   		
	    	};
	    	$scope.commentsList.push(newComment);
	    	$scope.comment=null;

	    	$timeout(function(){ 
	    		++$scope.commentIndex;
	            var newAdminComment={
	            	index:$scope.commentIndex,
					isUser:false,
					userPic:"defult-user",
					comment:"Hey, How Are You, Welcome to CloudBoost",
					notify:true,
					name:"CloudBoost"
									
				} 
				$scope.commentsList.push(newAdminComment);
				++$scope.notificationCount;
	        }, 2000);
    	}	

    };

    $scope.filterUserFn=function(commentObj){
    	if(!commentObj.isUser && commentObj.notify){
            return true;
        }else{
            return false;
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
