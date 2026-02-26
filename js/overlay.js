document.addEventListener('DOMContentLoaded', () => {
  
  const cards = document.querySelectorAll('[data-card]');
  
  cards.forEach((card) => {
    
    // Клик на ЛЮБУЮ часть карточки
    card.addEventListener('click', (e) => {
      
      // Проверяем, кликнули ли на интерактивный элемент
      const isInteractive = e.target.closest(`
        .card__slider-button,
        .card__zoom,
        .card__button,
        .card__like,
        .card__summary,
        .card__link,
        .material,
        .swiper-pagination
      `);
      
      // Если кликнули НЕ на интерактивный элемент
      if (!isInteractive) {
        // Открываем ссылку на карточку
        window.open('/card', '_blank');
      }
      
    });
    
    // Hover-эффект (опционально)
    card.addEventListener('mouseenter', () => {
      card.style.cursor = 'pointer';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.cursor = 'default';
    });
    
  });
  
});