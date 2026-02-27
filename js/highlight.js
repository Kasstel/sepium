document.addEventListener("DOMContentLoaded", () => {
  const materialsContainers = document.querySelectorAll(".materials");

  materialsContainers.forEach((container) => {
    const materialButtons = container.querySelectorAll(".material");
    const highlight = container.querySelector(".highlight");

    function moveHighlight(element) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      const top = elementRect.top - containerRect.top;
      const left = elementRect.left - containerRect.left;

      highlight.style.top = `${top}px`;
      highlight.style.left = `${left}px`;
      highlight.style.width = `${elementRect.width}px`;
      highlight.style.height = `${elementRect.height}px`;
    }

    materialButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const activeButton = container.querySelector(".material.active");
        if (activeButton) {
          activeButton.classList.remove("active");
        }

        button.classList.add("active");

        moveHighlight(button);
      });
    });

    const initialActive = container.querySelector(".material.active");
    if (initialActive) {
      moveHighlight(initialActive);
    }

    // Пересчитываем позицию при изменении размера окна
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const currentActive = container.querySelector(".material.active");
        if (currentActive) {
          moveHighlight(currentActive);
        }
      }, 100);
    });
  });
});
