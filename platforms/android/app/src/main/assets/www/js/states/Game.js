Game = function(){}

Game.prototype = {
    init:function(){
        this.game.stage.backgroundColor = '#FFFFFF';
        this.score = 20;
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

        
        this.indexOld = this.game.rnd.integerInRange(0, 9);
        // this.old_number = this.game.add.sprite(200, 200,'numbers',this.indexOld);
        // this.old_number.anchor.setTo(0.5);
        
        this.old_number = new NumberSprite(this.game,200,200,this.indexOld);
        console.log("xdd ",this.old_number);
    },
    update:function(){
        if(this.score <= 0){
            this.state.start("Gameover");
        }
    },
    tweenAction(){
        // this.new_number = this.game.add.sprite(400, 200,'numbers',this.indexCurrent);
        // this.new_number.anchor.setTo(0.5);
        this.new_number = new NumberSprite(this.game,400,200,this.indexCurrent);

        this.tween = this.game.add.tween(this.old_number);
        this.tween.to({ x: [100], y: [200] }, 300, "Linear");
        this.tween.start();

        this.tween2 = this.game.add.tween(this.new_number);
        this.tween2.to({ x: [200], y: [200] }, 300, "Linear");
        this.tween2.start();
    },
    higherAction:function(){
        console.log("higher");
        this.indexCurrent = this.game.rnd.integerInRange(0, 9);
        this.tweenAction();
        if(this.indexCurrent>this.indexOld){
            this.score+=10;
        }else{
            this.score-= 5;
        }
        console.log(this.indexOld," ; ", this.indexCurrent, " =>score:", this.score);
        this.old_number = this.new_number;
        this.indexOld = this.indexCurrent;
    },
    lowerAction:function(){
        console.log("lower");
        this.indexCurrent = this.game.rnd.integerInRange(0, 9);
        this.tweenAction();
        if(this.indexCurrent < this.indexOld){
            this.score+=10;
        }else{
            this.score-= 5;
        }
        console.log(this.indexOld," ; ", this.indexCurrent, " =>score:", this.score);
        this.old_number = this.new_number;
        this.indexOld = this.indexCurrent;
    },
}