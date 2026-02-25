const materials = document.querySelectorAll('.material');
const highlight = document.querySelector('.highlight');

function moveHighlight(element) {
  const { offsetLeft, offsetWidth } = element;

  highlight.style.width = `${offsetWidth}px`;
  highlight.style.left = `${offsetLeft}px`;
}

materials.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.material.active')?.classList.remove('active');
    button.classList.add('active');
    moveHighlight(button);
  });
});

moveHighlight(document.querySelector('.material.active'));