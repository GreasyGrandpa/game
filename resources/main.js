$(document).ready(function(){
  var i = 0
  while (i < 100) {
      $('.mainbutton a').animate({'opacity':'.3'}, 1000);
      $('.mainbutton a').animate({'opacity':'1'}, 1000);
      i++;
    }
  $('.mainbutton a').mouseenter(function(){
    var i = 100;
    $(this).css('color','red');
  });
});
