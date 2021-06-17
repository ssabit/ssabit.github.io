(function($) {

var message = "";
var name = "";
var email = "";
var subject = "";

//var isvalid=0;


function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


$("#sendMessage").on("click", function() {


  var name = $( '#name' ).val();
  var email = $( '#email' ).val();
  var subject = $( '#subject' ).val();
  var message = $( '#message' ).val();



if(name=="" || email=="" ||subject=="" ||message==""){
  $("#contactError").show();
  return false;

}else if(emailIsValid(email)==false ){
  $("#emailError").show();
return false;
}else{
  $.ajax({

    url: "https://formspree.io/xpzyjglk",
    method: "POST",
    data: {
      name:name,
      _replyto:email,
      _subject:subject,
      message: message

    },
    dataType: "json"

},
);
}
    $("#contactSuccess").show();
      return false;
});

$("#contactform").each(function(){
  this.reset();
});

})(jQuery);
