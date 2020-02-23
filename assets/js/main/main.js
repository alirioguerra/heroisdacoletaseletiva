// owl with jquery
const $owl = $('.owl-carousel');
$owl.children().each(function(index) {
  $(this).attr('data-position', index);
});

$owl.owlCarousel({
  center: true,
  loop: true,
  items: 3,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    800: {
      items: 3,
    },
  },
});

$(document).on('click', '.owl-item>div', function() {
  $owl.trigger('to.owl.carousel', [$(this).data('position')]);
});

//lixeiras fast JS
const lixeiraReciclavel = document.getElementById(
  'como-separar-lixeiras-reciclaveis',
);
const lixeiraOrganicos = document.getElementById(
  'como-separar-lixeiras-organicos',
);

lixeiraReciclavel.addEventListener('click', () => {
  lixeiraOrganicos.classList.remove('active');
  lixeiraReciclavel.classList.toggle('active');
});

lixeiraOrganicos.addEventListener('click', () => {
  lixeiraReciclavel.classList.remove('active');
  lixeiraOrganicos.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0,
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// Debounce do Lodash
debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

(function() {
  var $target = $('.anime'),
    animationClass = 'anime-start',
    offset = ($(window).height() * 3) / 3;

  function animeScroll() {
    var documentTop = $(document).scrollTop();

    $target.each(function() {
      var itemTop = $(this).offset().top;
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }

  animeScroll();

  $(document).scroll(
    debounce(function() {
      animeScroll();
    }, 200),
  );
})();
