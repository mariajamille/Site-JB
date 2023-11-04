var swiper = new Swiper(".teachers", {
  slidesPerView: 3,
  loop: true,
  keyboard: {
      enabled: true,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

    breakpoints:{
        0:{
            slidesPerView: 1,
            navigation: {
                enabled: false
            }
        },
        845:{
            slidesPerView:2,
            navigation: {
                enabled: true
            }
        },
        1360:{
            slidesPerView:3,
            navigation: {
                enabled: true
            }
        },

    },
  });