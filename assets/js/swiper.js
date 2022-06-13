const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  Keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  slidesPerView: 1,

  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
        clickable: true
  },

  autoplay: {
    delay: 3000,
    disableoninteraction: false,
  },

  speed: 900,
});


