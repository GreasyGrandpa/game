$(document).ready(function(){
  var i = 0
  while (i < 1000) {
      $('.mainbutton a').animate({'opacity':'.3'}, 1000);
      $('.mainbutton a').animate({'opacity':'1'}, 1000).delay(100);
      i++;
    }
  $('.mainbutton a').mouseenter(function(){
    $('.mainbutton a').finish();
    var i = 1000;
  });
  $('.mainbutton a').mouseleave(function(){
    $('.mainbutton a').finish();
    var i = 0;
  });

});
