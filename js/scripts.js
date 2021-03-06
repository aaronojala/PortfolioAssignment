// back to top button

jQuery(document).ready(function() {
  
  var btn = $('.backToTop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});


// image carousel

const mySiema = new Siema({
  perPage: 1,
  duration: 1000,
  loop: true,
});

setInterval(() => mySiema.next(), 5000);

// mobile menu

const mobileMenu = () => {
  const menu = document.querySelector('ul');

  menu.classList.toggle('mobilemenu');
};
