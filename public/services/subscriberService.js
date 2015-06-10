
var addSubscriber=function(email){
  var dfd = jQuery.Deferred();

    $.post(serverURL+'/subscribe',{email:email},
      function(data, status){
        if(status=="success"){
          dfd.resolve("Voila! You're looped in. We'll keep you posted. Thanks!" );
        }else{
          dfd.reject("You've already subscribed with us, OR Something went wrong with us");
        }        
    });

  return dfd.promise();  
}


