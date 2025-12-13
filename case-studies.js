const tiles = document.querySelectorAll('.case-tile');

tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    tiles.forEach(t => t.classList.remove('active'));
    tile.classList.add('active');
  });
});
