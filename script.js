// Simple Accordion Script
const buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    // If the clicked content is already open, close it
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      // Close all accordion contents
      document.querySelectorAll('.accordion-content').forEach(section => {
        section.style.display = 'none';
      });

      // Open the clicked content
      content.style.display = 'block';
    }
  });
});


