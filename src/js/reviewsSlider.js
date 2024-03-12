const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 29,
  breakpoints: {
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 29,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 85,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 65,
    },
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
