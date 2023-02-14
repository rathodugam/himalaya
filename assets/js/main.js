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




  // scroll to top 
  let mybutton = document.getElementById("#scroll_top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll_top.style.display = "block";
  } else {
    scroll_top.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}