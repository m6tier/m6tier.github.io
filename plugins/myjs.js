$(".social-icon ul li a").hover(
  function () {
    $(this).addClass('animate__animated animate__pulse');
  }, 
  function () {
    $(this).removeClass('animate__animated animate__pulse');
  }
  );
  
  $("#mshlLogoFooter").hover(
    function () {
      $(this).addClass('animate__animated animate__pulse');
    }, 
    function () {
      $(this).removeClass('animate__animated animate__pulse');
    }
  );

$(document).ready(function(){
  $('.hero-title').addClass('animate__animated animate__fadeInDown');
  $('.hero-subtitle').addClass('animate__animated animate__flipInX');
  $('.scroll-downs').addClass('animate__animated animate__fadeIn');
  });
