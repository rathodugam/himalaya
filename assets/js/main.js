$(window).scroll(function(){
    var sticky = $('.main_header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 50) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });


// swiper slider 
var swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // inner slider 
  var swiper1 = new Swiper('.inner_swiper', {
    slidesPerView: "auto",
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
},
  });