
$("window").ready(function() {
	$("main").scroll(function() {    
		var mainscroll = $("main").scrollTop();
	  if (mainscroll >= 1) {
	    $(".scroll-shadow").addClass("active");
	  }
	  else{
	  	$(".scroll-shadow").removeClass("active");
	  }
	});
});