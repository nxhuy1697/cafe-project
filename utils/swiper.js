const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
   effect: "fade",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  //autoplay 
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // And if we need scrollbar
 
});
