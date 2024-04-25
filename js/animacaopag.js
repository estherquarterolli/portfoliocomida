// Add a scroll animation to the home section
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $('#home').addClass('scrolled');
      } else {
        $('#home').removeClass('scrolled');
      }
    });
  });
  
  // Add a hover animation to the heart icons
  $(document).ready(function() {
    $('.dish-heart').hover(function() {
      $(this).find('i').toggleClass('fa-beat');
    });
  });
  
  // Add an animation to the accordion
  $(document).ready(function() {
    $('.accordion-header').click(function() {
      $(this).parent().toggleClass('active');
      $(this).find('.arrow').toggleClass('rotate');
    });
  });
  
  // Add a scroll animation to the footer
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('footer').addClass('scrolled');
      } else {
        $('footer').removeClass('scrolled');
      }
    });
  });