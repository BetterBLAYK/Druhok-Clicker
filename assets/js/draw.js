let Draw = () => {
    ctx.imageSmoothingEnabled = false
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = window.getComputedStyle(canvas).backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background0, 0, 0, canvas.width, canvas.height)

    switch(scene){
        case 0: SC0(); break
        case 1: SC1(); break
    }

    earnPerSec = 0
    earnPerSec += askKRIdama.amount * askKRIdama.earn

    AddScore(earnPerSec * dt)

    earnPerSec += druhokCPS * user.multiplier


    ctx.fillStyle = "#00F"
    ctx.fillRect(0, 1720, 540, 200)
    ctx.fillStyle = "#F00"
    ctx.fillRect(541, 1720, 540, 200)
    ctx.fillStyle = "#000"

    ctx.font = "50pt Jersey25"
    ctx.fillStyle = "#DDD"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Druhok", 270, 1820, 540, 540)
    ctx.fillText("Obchůdek", 810, 1820)


    ctx.fillStyle = "#111"
    ctx.globalAlpha = 0.35

    if(mouse.x >= druhok.position.x - druhok.width * .5 && mouse.x <= druhok.position.x + druhok.width * .5 
    && mouse.y >= druhok.position.y - druhok.height * .5 && mouse.y <= druhok.position.y + druhok.height * .5 && scene == 0){
        canvas.style.cursor = "pointer"
        ctx.save()
        ctx.translate(-druhok.width * .5, -druhok.height * .5);
        ctx.fillRect(druhok.position.x, druhok.position.y, druhok.width, druhok.height)
        ctx.restore()
    } 
    else if(mouse.x > 0 && mouse.x < 540 && mouse.y >= 1720 && mouse.y < 1920){
        canvas.style.cursor = "pointer"
        ctx.fillRect(0, 1720, 540, 200)
    } 
    else if(mouse.x > 540 && mouse.x < 1080 && mouse.y >= 1720 && mouse.y < 1920){
        canvas.style.cursor = "pointer"
        ctx.fillRect(541, 1720, 540, 200)
    }
    else if(scene == 1 && shopPage == 0 && mouse.x >= 140 && mouse.y >= 100 && mouse.x <= 940 && mouse.y <= 350){
        canvas.style.cursor = "pointer"
        ctx.fillRect(140, 100, 800, 250)
    } 
    else if(scene == 1 && shopPage == 0 && mouse.x >= 140 && mouse.y >= 400 && mouse.x <= 940 && mouse.y <= 750){
        canvas.style.cursor = "pointer"
        ctx.fillRect(140, 400, 800, 250)
    } 
    else canvas.style.cursor = "default"


    offGatScore ? offGatScoreAlpha += 1 * dt : offGatScoreAlpha -= 1 * dt
    if(offGatScoreAlpha > 1) offGatScoreAlpha = 1
    if(offGatScoreAlpha < 0) offGatScoreAlpha = 0

    ctx.globalAlpha = offGatScoreAlpha

    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillStyle = "#DD2"
    ctx.font = "20pt Jersey25"
    ctx.fillText("Mezitím, co jsi tu nebyl", 555, 165)
    ctx.font = "50pt Jersey25"
    ctx.fillText("+" + ~~offGatScoreAmount + " Druhoků", 540, 200)


    ctx.globalAlpha = 1

    ctx.fillStyle = "#A00"

    scorePopups.forEach((v, i, a) => {
        v.position.x += v.randomForce * dt
        v.position.y -= 1e3 * dt
        ctx.fillText(v.amount, v.position.x, v.position.y)
        if(v.position.y < -100) a.splice(i, 1)
    })

    ctx.fillStyle = "#0FF"

    buttonParticles.forEach((v, i, a) => {
        v.direction == "left" ? v.position.x -= v.speed * dt : v.position.x += v.speed * dt
        v.position.y -= 500 * v.verticalSpeedMultiplier * dt

        if(v.position.y < -100) a.splice(i, 1)

        ctx.fillRect(v.position.x, v.position.y, 2, 2)
    })

    
    ctx.globalAlpha = 0.7
    ctx.fillStyle = "#DDD"
    ctx.font = "35pt Jersey25"
    ctx.textAlign = "right"
    ctx.textBaseline = "top"
    ctx.fillText("Sezóna " + season, 1070, 5, 380)
    ctx.textAlign = "left"
    if(scene == 0) ctx.fillText("All-time Druhoci: " + ~~fullScore, 10, 5, 700)
    else if(scene === 1) ctx.fillText("Druhoci: " + ~~score, 10, 5, 700)
    ctx.globalAlpha = 1

    if(beatBoxVLese.currentTime > 3) beatBoxVLese.currentTime = 0
    if(druhokCPS == 0){beatBoxVLese.pause(); beatBoxVLese.currentTime = 0} 

}