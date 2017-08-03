$(document).ready(function(){
 		// client_id = "agn02sjinnmerxrzak626tuutu92ko";
    var twitch_streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];	
	
$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=agn02sjinnmerxrzak626tuutu92ko').done(function(data){

 if(data.stream === null){
		$('#fccStatus').html("freeCodeCamp is currently OFFLINE"); 
	}
	else{
		$('#fccStatus').html("freeCodeCamp is currently ONLINE");  
	}
  
});
	
  for(var i=0; i < twitch_streamers.length; i++){
	$.ajax({
	  type: 'GET',
      url: 'https://api.twitch.tv/kraken/channels/' + twitch_streamers[i],
      headers: {
		'client-ID': 'agn02sjinnmerxrzak626tuutu92ko'
	},	
    success: function(response) {
	    
	  $.getJSON('https://api.twitch.tv/kraken/streams/' + response.name + '?client_id=agn02sjinnmerxrzak626tuutu92ko').done(function(data2){
        
		//var name = data2._links.self.slice(37);
		var name = response.name;
        var logo = response.logo;
		var status = response.status;
	
		if(data2.stream === null){

		$("#followerInfo").append("<div class='row'>" +
		                          "<div class='col-md-4'>" + '<a target = "blank" href="https://www.twitch.tv/' + name + '">' + name +'</a>' + "</div>" + 
								  "<div class='col-md-4'>" + status + "</div>" + 
								  "<div class='col-md-4'>" + '<img class="img" src="' + logo + '">' + "</div>" + "</div>" + "<br>");
		
		} else{
		$("#followerInfo").append("<div class='row'>" +
		                          "<div class='col-md-4'>" + '<a target = "blank" href="https://www.twitch.tv/' + name + '">' + name +'</a>' + "</div>" + 
								  "<div class='col-md-4'>" + status + "</div>" + 
								  "<div class='col-md-4'>" + '<img class="img" src="' + logo + '">' + "</div>" + "</div>" + "<br>");
		}	 
      });
	  
    },
	error: function(err) {
      console.log("unable to access json");
    }	
	});  
  }	
	
});



