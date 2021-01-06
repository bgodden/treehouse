const game = new Game();

/**
* Listens for click on `#begin-game` and calls startGame() on game object
*/
document.getElementById('begin-game').addEventListener('click', (event) => {
  game.startGame();

  // Removes start button and renders game board
  document.getElementById('begin-game').style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});

/**
 * Listen for keyboard presses
 */
document.addEventListener('keydown', (event) => {
  game.handleKeyDown(event);
});


