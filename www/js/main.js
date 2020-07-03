window.onload = function () {
  let game = new Phaser.Game(400, 700, Phaser.AUTO);
  // let game = new Phaser.Game("100%","80%",Phaser.AUTO);
  //nombre del diccionario, nombra de la clase
  game.state.add("Preload", Preload);
  game.state.add("Menu", Menu);
  game.state.add("Game", Game);
  game.state.add("Gameover", Gameover);
  game.state.start("Preload");
};
