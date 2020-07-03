Gameover = function () {}
Gameover.prototype = {
    create:function(){
        // this.title = this.game.add.sprite(200,300,'gameover');
        // this.title.anchor.setTo(0.5);
        this.game.stage.backgroundColor = '#00000';
        this.playbtn = this.game.add.sprite(200,500,'gameover');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.inputEnabled = true;
		this.playbtn.events.onInputDown.add(this.goPlay,this);
	},
	goPlay:function(){
		this.state.start("Menu");
    }
};