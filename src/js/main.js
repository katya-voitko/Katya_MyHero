$( document ).ready(function() {

  // IMAGE
  var myImage = $(".myHero__background").data("image");

  console.log(myImage);
  $(".myHero__background").css("background-image","url('../img/"+myImage+"')");

 // OPACITY

  var myOpacity = $(".overlay").data("opacity");

  console.log(myOpacity);
  $(".overlay").css("opacity",myOpacity);

// GREDIENT
var myGredientColor1 = $(".overlay").data("color1");
var myGredientColor2 = $(".overlay").data("color2");
var myGredientDirection = $(".overlay").data("direction");
console.log(myGredientDirection);

$(".overlay").css("background","linear-gradient("+myGredientDirection+","+myGredientColor1+","+myGredientColor2+")");


});
