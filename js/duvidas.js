const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  const header = accordion.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    const body = accordion.querySelector('.accordion-body');
    if (body.classList.contains('active')) {
      body.classList.remove('active');
    } else {
      // Remove active class from all other accordion bodies
      accordions.forEach(otherAccordion => {
        const otherBody = otherAccordion.querySelector('.accordion-body');
        otherBody.classList.remove('active');
      });
      body.classList.add('active');
    }
  });
});