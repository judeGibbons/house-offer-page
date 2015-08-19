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

/* =============== doesn't work yet! ===================
  function insertCommas() {
	var charsInNewOfferPrice = 0;
	$( "input#offerPrice" ).keypress(function() {
	  charsInNewOfferPrice++;
	  if ((charsInNewOfferPrice>1) && (charsInNewOfferPrice%3 == 1)) {
	  console.log(charsInNewOfferPrice);


	  $("input#offerPrice").val(',' + $("input#offerPrice").val());
	  }; 	  
	});
  };
  insertCommas();
===================================================== */

  $( "form" ).submit(function( event ) {
    var newOfferPrice = +$( "input#offerPrice" ).val().replace(/[^\d\.]/g, '');
    event.preventDefault();
    console.log(JSON.stringify($("input#offerPrice").serializeArray()));
    validation(newOfferPrice);
  });


  function validation(newOfferPrice) {
    var askingPrice = +$("#askingPrice").text().replace(/[^\d\.]/g, '');
	  $(askingPrice).val(askingPrice);
	  if (newOfferPrice >= askingPrice) {
	  	$("#validationMessage").text("Your offer matches or exceeds the asking price.");
	  } else {
	  	$("#validationMessage").text("Error: your offer is less than the asking price.");
	  };
	};

});