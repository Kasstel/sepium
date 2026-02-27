document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("[data-card]");

  const sliderData = [];

  cards.forEach((card, cardIndex) => {
    const slider = card.querySelector(".card__slider");
    const slides = slider.querySelectorAll(".card__slide img");
    const zoomButton = slider.querySelector("[data-zoom]");

    const images = Array.from(slides).map((img, index) => ({
      src: img.getAttribute("src"),
      caption: img.getAttribute("alt"),
    }));

    sliderData.push({
      slider,
      images,
      zoomButton,
      galleryId: `gallery-${cardIndex + 1}`,
    });
  });

  sliderData.forEach((data) => {
    data.zoomButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const swiperInstance = data.slider.swiper;
      const currentIndex = swiperInstance.realIndex;

      Fancybox.show(data.images, {
        startIndex: currentIndex,

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
