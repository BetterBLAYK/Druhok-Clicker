class ScorePopup {
    constructor(amount, posX, posY){
        this.amount = amount
        this.position = {
            x: posX,
            y: posY
        }
        this.randomForce = ~~(Math.random() * 150 - 75)
    }
}

class ButtonParticle {
    constructor(posX, posY, speed){
        this.position = {
            x: posX,
            y: posY
        }
        let dir = Boolean(Math.round(Math.random() * 1))
        dir ? dir = "left" : dir = "right"
        this.direction = dir
        this.speed = speed
        this.verticalSpeedMultiplier = 1
    }
}