  
  $("#mshlLogoFooter, .navbar-brand, .social-icon ul li a, .nav-item").hover(
    function () {
      $(this).addClass('animate__animated animate__pulse');
    }, 
    function () {
      $(this).removeClass('animate__animated animate__pulse');
    }
  );


$(window).on('load', function () {
  $('.hero-title').addClass('animate__animated animate__fadeInDown');
  $('.hero-subtitle').addClass('animate__animated animate__flipInX');
  $('.scroll-downs').addClass('animate__animated animate__fadeIn');
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