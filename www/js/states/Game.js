Game = function(){}

Game.prototype = {
    init:function(){
        this.index = this.game.rnd.integerInRange(0, 9);
        this.game.stage.backgroundColor = '#FFFFFF';
        this.score = 5;
    },
    create:function(){
        this.initButtons();
    },
    initButtons:function(){
        this.higherbtn = this.game.add.sprite(200,50,'higher');
        this.higherbtn.anchor.setTo(0.5);
        this.higherbtn.inputEnabled = true;
        this.higherbtn.events.onInputDown.add(this.higherAction,this);
        this.lowerbtn = this.game.add.sprite(200,350,'lower');
        this.lowerbtn.anchor.setTo(0.5);
        this.lowerbtn.inputEnabled = true;
        this.lowerbtn.events.onInputDown.add(this.lowerAction,this);
        this.numbers = this.game.add.sprite(200, 200,'numbers',this.index);
        this.indexOld = this.index;
        this.numbers.anchor.setTo(0.5);
    },
    update:function(){
        if(this.score <= 0){
            this.state.start("Gameover");
        }
    },
    higherAction:function(){
        console.log("higher");
        this.indexCurrent = this.game.rnd.integerInRange(0, 9);
        this.numbers.loadTexture('numbers',this.indexCurrent);
        if(this.indexCurrent>this.indexOld){
            this.score+=10;
        }else{
            this.score-= 5;
        }
        console.log(this.indexOld," ; ", this.indexCurrent, " =>score:", this.score);
        this.indexOld = this.indexCurrent;
    },
    lowerAction:function(){
        console.log("lower");
        this.indexCurrent = this.game.rnd.integerInRange(0, 9);
        this.numbers.loadTexture('numbers',this.indexCurrent);
        if(this.indexCurrent < this.indexOld){
            this.score+=10;
        }else{
            this.score-= 5;
        }
        console.log(this.indexOld," ; ", this.indexCurrent, " =>score:", this.score);
        this.indexOld = this.indexCurrent;
    },
}