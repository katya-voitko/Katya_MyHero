$( document ).ready(function() {

  // IMAGE
  var myImage = $(".myHero__background").data("image");
  var myImageUrl = $(".myHero__background").data("url");


  console.log(myImageUrl);
  $(".myHero__background").css("background-image","url('../img/"+myImage+"')");
  $(".myHero__background").css("background-image"," url('"+myImageUrl+"')" );

 // OPACITY

  var myOpacity = $(".overlay").data("opacity");


  $(".overlay").css("opacity",myOpacity);

// GREDIENT
var myGredientColor1 = $(".overlay").data("color1");
var myGredientColor2 = $(".overlay").data("color2");
var myGredientDirection = $(".overlay").data("direction");


$(".overlay").css("background","linear-gradient("+myGredientDirection+","+myGredientColor1+","+myGredientColor2+")");


});
