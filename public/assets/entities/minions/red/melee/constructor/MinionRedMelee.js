class MinionRedMelee {
    constructor (pos ={x:0,y:0},isLeft = true) {
        this.uuid = `object-${Math.random()}`;
        this.canvas = null;
        this.pos = pos;
        this.healthbar = new Healthbar()
        this.assets = {
            idle : new Image()
        }
        this.assets.idle.src = '../assets/entities/minions/red/melee/anim/minion.png'
        this.render = (offset={x:0,y:0}) => {
            this.canvas.context.save()
            this.canvas.context.translate(this.pos.x+offset.x, this.pos.y+offset.y);
            if (isLeft) {
                this.canvas.context.scale(0.8,0.8)
            } else {
                    this.canvas.context.scale(-0.8,0.8)
            }
            this.canvas.context.drawImage(this.assets.idle,-this.assets.idle.width/2,-this.assets.idle.height/2)
            this.canvas.context.restore()
            this.healthbar.canvas = this.canvas
            this.healthbar.render(this.pos,offset,150)
        }
    }
}