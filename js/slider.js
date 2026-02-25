

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.card__slider');

  sliders.forEach((sliderElement) => {
    const swiper = new Swiper(sliderElement, {
      loop: true,

      speed: 400,

      slidesPerView: 1,

      navigation: {
        nextEl: sliderElement.querySelector('.card__slider-button--next'),
        prevEl: sliderElement.querySelector('.card__slider-button--prev'),},
      pagination: {
        el: sliderElement.querySelector('.swiper-pagination'),
        clickable: true, // Можно кликать на точки для перехода
        type: 'bullets',  // Тип: bullets (точки), fraction (1/5), progressbar
      },
      
      });
  });  
});