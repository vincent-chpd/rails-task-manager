// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const checkboxes = document.querySelectorAll('.task-checkbox');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const taskTitle = checkbox.closest('.container').querySelector('p');

    if (checkbox.checked) {
      taskTitle.style.textDecoration = 'line-through';
    } else {
      taskTitle.style.textDecoration = 'none';
    }
  });
});

// const binButtons = document.querySelectorAll('.fa-trash')

// binButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     event.preventDefault();
//     const elementToRemove = event.target.closest('.fa-solid');
//     if (elementToRemove) {
//       elementToRemove.remove();
//     }
//   });
// });
