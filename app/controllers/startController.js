app.controller('startController',
	['$scope','$rootScope','$timeout','$sce',function($scope,$rootScope,$timeout, $sce){
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
		comment:$sce.trustAsHtml("I've used <a href='https://twitter.com/search?q=%23cloudboost' target='blank'> #CloudBoost </a> to build my local social networking app and I can tell you, it was a breeze to integrate."),
		notify:false,
		name:"Sara Lane shared a post"		
	}
	$scope.commentsList.push(newAdminComment);
	
	$scope.init = function(){		

        hljs.initHighlightingOnLoad();

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
        $scope.hideAllCode();
        $('#Insert-js').show();
        $scope.initCodeEditors( ['objectInsert-js']);

        $('#InsertIcon').addClass('active');
        $scope.codeTabSelected = 'js';
        $scope.currentFeature = 'Insert';
        
	};

    $scope.hideAllCode = function(){
        $('#Insert-js').hide();
        $('#Realtime-js').hide();
        $('#Search-js').hide();
        $('#Insert-java').hide();
        $('#Realtime-java').hide();
        $('#Search-java').hide();
        //remove CSS classes. 
        $('#InsertIcon').removeClass('active');
        $('#RealtimeIcon').removeClass('active');
        $('#SearchIcon').removeClass('active');

    };

    $scope.languageClick = function(lang){
        $scope.hideAllCode();
        $scope.codeTabSelected = lang;
        $scope.featureClick($scope.currentFeature);
        $('#java').removeClass('active');
        $('#js').removeClass('active');
        $('#'+lang).addClass('active');

    };

    $scope.featureClick = function(feature){
        $scope.hideAllCode();
        $('#'+feature+'-'+$scope.codeTabSelected).show();
        $scope.initCodeEditors( ['object'+feature+'-'+$scope.codeTabSelected]);
        $('#'+feature+'Icon').addClass('active');
        $scope.currentFeature = feature;
    }

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
	    		userPic:"anonymous",
	    		comment:$sce.trustAsHtml($scope.comment),
	    		notify:false,
	    		name:"You shared a post"    		   		
	    	};
	    	$scope.commentsList.push(newComment);
	    	$scope.comment=null;

	    	$timeout(function(){ 
	    		++$scope.commentIndex;
                if($scope.commentIndex === 2){
                    var newAdminComment={
                    index:$scope.commentIndex,
                    isUser:false,
                    userPic:"cb-user",
                    comment: $sce.trustAsHtml("<span>Thank you for playing around with the app. You can now signup to Cloudboost <a href='/signup'>here.</a></span>"),
                    notify:true,
                    name:"Jeff Whietman from CloudBoost"
                                    
                    };
                    $scope.commentsList.push(newAdminComment);
                    ++$scope.notificationCount;
                }      
                if($scope.commentIndex === 4){
                    var newAdminComment={
                    index:$scope.commentIndex,
                    isUser:false,
                    userPic:"user-comment",
                    comment: $sce.trustAsHtml("<span> Looks like you've fallen in love with the app. I'm sure, you'll love the API as much. Check out the  <a href='http://docs.cloudboost.io' target='blank'>docs here.</a></span>"),
                    notify:false,
                    name:"Charlie Jen from CloudBoost"
                                    
                    };
                    $scope.commentsList.push(newAdminComment);
                   
                }

                if($scope.commentIndex === 6){
                    var newAdminComment={
                    index:$scope.commentIndex,
                    isUser:false,
                    userPic:"cb-user",
                    comment: $sce.trustAsHtml("<span> Thank you for your love. The app like this can be built on CloudBoost and I'm sure you can build great apps too! Share the links of apps you've built to <a mailto='hello@cloudboost.io'>hello@cloudbost.io </a>and we'll share it with the world. </span>"),
                    notify:false,
                    name:"Jeff Whietman from CloudBoost"
                                    
                    };
                    $scope.commentsList.push(newAdminComment);
                }

                if($scope.commentIndex === 8){
                    var newAdminComment={
                    index:$scope.commentIndex,
                    isUser:false,
                    userPic:"cb-user",
                    comment: $sce.trustAsHtml("Hey, We're looking for restless & kick-ass people like you. If you like what we've built, you're a hacker, and want to build CloudBoost together. Send us your Resume on <a mailto='careers@cloudboost.io'>careers@cloudboost.io </a>"),
                    notify:false,
                    name:"Jeff Whietman from CloudBoost"
                                    
                    };

                    $scope.commentsList.push(newAdminComment);
                }

            
				
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

    	$('#feature'+id+'List').addClass('active');

    	$('#feature1').hide();
        $('#feature2').hide();

        $('#feature'+id).show();

        if(id===1)
            $scope.initCodeEditors( ['objectInsert']);

        if(id===2){
            $scope.initCodeEditors( ['ObjectQuery']);
        }
    };

    $scope.initCodeEditors = function(arr){
        var codeEditors = arr;

        for(var i=0;i<codeEditors.length; i++){

            if(document.getElementById(codeEditors[i]) && codeMirrorEnabled.indexOf(codeEditors[i]) === -1){

                var myCodeMirror = CodeMirror.fromTextArea(document.getElementById(codeEditors[i]),
                    {
                        mode:  "javascript",
                        readOnly : "nocursor",
                        lineNumbers: true
                    });

                codeMirrorEnabled.push(codeEditors[i]);
            }
        }
    };

 }]);
