// js/modal.js

document.addEventListener('DOMContentLoaded', () => {
  
  // === Присваиваем уникальные ID галерей ===
  const cards = document.querySelectorAll('[data-card]');
  
  // Храним информацию о каждом слайдере
  const sliderData = [];
  
  cards.forEach((card, cardIndex) => {
    const slider = card.querySelector('.card__slider');
    const slides = slider.querySelectorAll('.card__slide img');
    const zoomButton = slider.querySelector('[data-zoom]');
    
    // Собираем данные о слайдах
    const images = Array.from(slides).map((img, index) => ({
      src: img.getAttribute('src'),
      caption: img.getAttribute('alt'),
    }));
    
    sliderData.push({
      slider,
      images,
      zoomButton,
      galleryId: `gallery-${cardIndex + 1}`,
    });
  });
  
  
  // === Инициализация Fancybox ===
  
  // Клик на zoom-кнопку
  sliderData.forEach((data) => {
    data.zoomButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Получаем текущий индекс активного слайда
      const swiperInstance = data.slider.swiper;
      const currentIndex = swiperInstance.realIndex; // realIndex учитывает loop
      
      // Открываем Fancybox на текущем слайде
      Fancybox.show(data.images, {
        startIndex: currentIndex, // Открыть на текущем слайде
        
        Toolbar: {
          display: {
            left: [],
            middle: [],
            right: ["close"],
          },
        },

        trapFocus: true,
        autoFocus: true,
        
        hideScrollbar: true,
        
        touch: {
          vertical: true,
        },
        
        keyboard: {
          Escape: "close",
          ArrowLeft: "prev",
          ArrowRight: "next",
        },
        
        Image: {
          zoom: true,
          click: "toggleZoom",
        },
      });
    });
  });
  
});