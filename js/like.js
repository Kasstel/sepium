

document.addEventListener('DOMContentLoaded', () => {
  const allLikeBlocks = document.querySelectorAll('.card__like');

  allLikeBlocks.forEach((likeBlock) => {

          const likeButton = likeBlock.querySelector('.card__like-button');
          const count = likeBlock.querySelector('.card__like-text');

          likeButton.addEventListener('click', () => {
            let currentValue = parseInt(count.textContent);

            if (likeButton.classList.contains('active')) {
              likeButton.classList.remove('active');
              count.textContent = currentValue - 1;
            } else {
              likeButton.classList.add('active');
              count.textContent = currentValue + 1;
            }
          });
  });
});

