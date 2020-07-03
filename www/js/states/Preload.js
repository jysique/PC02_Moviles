Preload = function (game) {};

Preload.prototype = {
  preload: function () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // trata de centrar horizontalmente
    this.scale.pageAlignHorizontally = true;
    // trata de centrar verticalmente
    this.scale.pageAlignVertically = true;

    this.game.load.image("gameover","assets/images/gameover.png");
    this.game.load.image("gametitle","assets/images/gametitle.png");
    this.game.load.image("higher","assets/images/higher.png");
    this.game.load.image("lower","assets/images/lower.png");
    this.game.load.image("play","assets/images/play.png");

    this.game.load.spritesheet("numbers","assets/images/numbers.png",100,100,10);

  },
  create: function () {
    this.state.start("Menu");
  },
};
