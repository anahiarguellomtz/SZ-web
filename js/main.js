jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
      var logo1 = document.getElementById('logo-sz'); //se define la variable "el" igual a nuestro div
      logo1.style.display =  "none" ;
      var logo2 = document.getElementById('logo-sz2'); //se define la variable "el" igual a nuestro div
      logo2.style.display =  "block" ;

    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
      var logo1 = document.getElementById('logo-sz'); //se define la variable "el" igual a nuestro div
      logo1.style.display =  "block" ;
      var logo2 = document.getElementById('logo-sz2'); //se define la variable "el" igual a nuestro div
      logo2.style.display =  "none" ;
    }
  });
  
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

 

});
