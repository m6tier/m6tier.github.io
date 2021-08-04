  
//  $("#mshlLogoFooter, .navbar-brand, .social-icon ul li a, .nav-item").hover(
//    function () {
//      $(this).addClass('animate__animated animate__pulse');
//    }, 
//    function () {
//      $(this).removeClass('animate__animated animate__pulse');
//    }
//  );


$(window).on('load', function () {
  setTimeout(function() {
    $('.hero-title').addClass('animate__animated animate__fadeInDown');
    $('.hero-subtitle').addClass('animate__animated animate__flipInX');
    $('.scroll-downs').addClass('animate__animated animate__fadeInUp');
    $('.hero-title').css("opacity", "1");
    $('.hero-subtitle').css("opacity", "1");
    $('.scroll-downs').css("opacity", "1");
  }, 400);
  });


$(document).ready(function(){
  $('#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});

(function () {
  $('.burger-btn').on('click', function() {
    $('.hamburger-menu').toggleClass('animate');
  })
})();