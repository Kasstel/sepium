document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("[data-card]");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
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

      if (!isInteractive) {
        window.open("/card", "_blank");
      }
    });

    card.addEventListener("mouseenter", () => {
      card.style.cursor = "pointer";
    });

    card.addEventListener("mouseleave", () => {
      card.style.cursor = "default";
    });
  });
});
