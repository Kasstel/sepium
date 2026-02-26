// js/highlight.js

document.addEventListener('DOMContentLoaded', () => {
  
  const materialsContainers = document.querySelectorAll('.materials');
  
  materialsContainers.forEach((container) => {
    
    const materialButtons = container.querySelectorAll('.material');
    const highlight = container.querySelector('.highlight');
    
   
    function moveHighlight(element) {
      const { offsetLeft, offsetWidth } = element;
      
      highlight.style.width = `${offsetWidth}px`;
      highlight.style.left = `${offsetLeft}px`;
    }
    
    
    materialButtons.forEach((button) => {
      button.addEventListener('click', () => {
        
        const activeButton = container.querySelector('.material.active');
        if (activeButton) {
          activeButton.classList.remove('active');
        }
        
       
        button.classList.add('active');
        
        // Двигаем highlight
        moveHighlight(button);
      });
    });
  
    const initialActive = container.querySelector('.material.active');
    if (initialActive) {
      moveHighlight(initialActive);
    }
    
  });
  
});