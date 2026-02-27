document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".card__slider");

  sliders.forEach((sliderElement) => {
    const swiper = new Swiper(sliderElement, {
      loop: true,

      speed: 400,

      slidesPerView: 1,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: sliderElement.querySelector(".card__slider-button--next"),
        prevEl: sliderElement.querySelector(".card__slider-button--prev"),
      },
      pagination: {
        el: sliderElement.querySelector(".swiper-pagination"),
        clickable: true,
        type: "bullets",
      },

      breakpoints: {
        0: {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        },

        768: {
          autoplay: false,
        },
      },
    });
  });
});
