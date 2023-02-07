$(window).scroll(function(){
    var sticky = $('.main_header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 50) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
