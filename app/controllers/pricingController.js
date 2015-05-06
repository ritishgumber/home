app.controller('pricingController',
  ['$scope','$rootScope',
  function($scope,$rootScope){
    
  $scope.getCssClass ="pricing-page";
  $rootScope.showHeader=true;

  $scope.faqExpand = function(id){
  	
    if($('#'+id).hasClass( "in" )){
  		$('#'+id).removeClass( "in" );
  	}else{
  		$('#'+id).addClass( "in" );
  	}

    
  };

  $scope.init = function(){ 

    var apiArray = [];
    var storageArray = [];
    var searchArray = [];
    var realtime = [];

    for(var i=0;i<=200000; i+=10000){
      realtime.push(i);
    }

    for(var i=0;i<=20; i+=0.5){
      apiArray.push(i);
    }

    for(var i=0;i<=20; i+=1){
      storageArray.push(Math.floor(i*1.8));
    }

    for(var i=0;i<=2; i+=0.2){
      searchArray.push(Math.round(i * 10) / 10);
    }

    $scope.storageAmt = 0;
    $('#storageText').text($scope.storageAmt);

     $scope.apiAmt = 0;
    $('#apiText').text($scope.apiAmt);

    $scope.realtimeAmt = 0;
    $('#realtimeText').text($scope.realtimeAmt);

    $scope.searchAmt = 0;
    $('#searchText').text($scope.searchAmt);

    updateTotal();

    $("#api").ionRangeSlider({
        values : apiArray,
        type: "single",
        from : 1,
        postfix: " million requests",
        grid: true,
        onChange: function (data) {
          if(data.from===1){
              $scope.apiAmt = 0;
          }else{
             $scope.apiAmt = (data.from_value * 100) * 0.6;
          }

          $('#apiText').text($scope.apiAmt);

          updateTotal();
        },
    });

    $("#storage").ionRangeSlider({
        values : storageArray,
        type: "single",
        from : 1,
        postfix: " GB",
        grid: true,
        onChange: function (data) {
          if(data.from===1){
              $scope.storageAmt = 0;
          }else{
             $scope.storageAmt = (data.from_value * 2) ;
          }

          $('#storageText').text($scope.storageAmt);

          updateTotal();
         
        },
    });


    $("#realtime").ionRangeSlider({
        values : realtime,
        type: "single",
        from : 1,
        postfix: " messages",
        grid: true,
        onChange: function (data) {

          if(data.from===1){
              $scope.realtimeAmt = 0;
          }else{
             $scope.realtimeAmt = (data.from_value / 1000) * 1.5 ;
          }

          $('#realtimeText').text($scope.realtimeAmt);

          updateTotal();
         
        },
    });


    $("#search").ionRangeSlider({
        values : searchArray,
        type: "single",
        from : 1,
        postfix: " million documents",
        grid: true,
        onChange: function (data) {
           if(data.from===1){
              $scope.searchAmt = 0;
            }else{
               $scope.searchAmt = (data.from_value) * 20 ;
            }

            $('#searchText').text($scope.searchAmt);

            updateTotal();
        },
    });


  	var meta=document.getElementsByTagName("meta");
		for (var i=0; i<meta.length; i++) {
		    if (meta[i].name.toLowerCase()=="description") {
		        meta[i].content= "CloudBoost Pricing. Free plan to begin with and pay as you go as you scale.  ";
		    }

         if (meta[i].name.toLowerCase()=="keywords") {
            meta[i].content= "pricing, baas, backend as a service, database as a service, hybrid database, cloudboost, search, realtime, storage, app storage, signup, cloudboost";
        }
		}

		document.title = "Pricing";
		
		window.seojsSnapshotReady = true;
	};

  function updateTotal(){
    $('#totalText').text($scope.storageAmt + $scope.searchAmt + $scope.realtimeAmt + $scope.apiAmt);

  }


 }]);
