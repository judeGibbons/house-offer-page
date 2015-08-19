$( document ).ready(function() {

 $( "body" ).removeClass( "no-js" );

 $( ".toggle" ).click(function() {
 	var target = $( event.target );
  	var affectedContent = target.parent().siblings()[0];
  	//var toggleText = $(".toggle").text();
  	var toggleText = target.text();
  	var toggleArrow = "<span class='arrow'></span>";
  	var toggleArrowClosed = "<span class='arrow closed'></span>";
  	$(affectedContent).slideToggle( "fast", function() {
  	  if (toggleText == "hide") {
  	  	target.html("show"+toggleArrowClosed);
  	  } else if (toggleText == "show") {
  	  	target.html("hide"+toggleArrow);
  	  };
	});
  });
});