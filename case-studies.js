const tiles = document.querySelectorAll('.case-tile');

/* click to expand */
tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    tiles.forEach(t => t.classList.remove('active'));
    tile.classList.add('active');
  });
});

/* staggered entrance on scroll */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      tiles.forEach((tile, index) => {
        setTimeout(() => {
          tile.classList.add('is-visible');
        }, index * 120); // stagger delay
      });
      observer.disconnect();
    }
  });
}, { threshold: 0.3 });

observer.observe(document.querySelector('.case-studies'));
