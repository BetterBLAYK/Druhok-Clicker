let getForOffline = (time) => {
    earnPerSec = 0
    earnPerSec += askKRIdama.amount * askKRIdama.earn
    druhoksWhileOff = earnPerSec * time * (user.offlinePercentage / 100)

    console.warn("While you were offline, you've earned: " + druhoksWhileOff + " Druhoks")
    DisplayOffScore(druhoksWhileOff)

    AddScore(druhoksWhileOff)
}

let loadFont = (name, src) => {
    window[name] = new FontFace(name, 'url(' + src + ')')
    window[name].load().then(function(font){
    document.fonts.add(font)
    console.warn("QUAXTARIAN FONT LOADER: " + name + " loaded")
})
}

let druhokClicked = () => {
    druhokCPS++; setTimeout(function(){druhokCPS--},1e3)
    let amount = user.multiplier
    if(druhok.width > 400 && druhok.height > 400){
        druhok.width -= 50
        druhok.height -= 50
    }
    AddScore(amount)
    scorePopups.push(new ScorePopup(amount, mouse.x, mouse.y))
    if(CPS > 0) beatBoxVLese.play()
}

let UpgradeAskKRIdama = () => {
    if(score >= askKRIdama.cost){
        score -= askKRIdama.cost
        askKRIdama.amount++
        askKRIdama.cost *= 1.5

        if(!buysound.paused) buysound.pause()
        buysound.currentTime = 0
        buysound.play()

        for(let i = 0; i < 100; ++i){
            buttonParticles.push(new ButtonParticle(mouse.x + Math.random()*100 - 50, mouse.y + Math.random()*100 - 50, 500))
        }

    } else{
        if(!notenougmoney.paused) notenougmoney.pause()
        notenougmoney.currentTime = 0
        notenougmoney.play()
    }
}

let UpgradeBuySubs = () => {
    if(score >= buySubs.cost){
        score -= buySubs.cost
        buySubs.amount++
        user.multiplier *= 2
        buySubs.cost *= 4
        
        if(!buysound.paused) buysound.pause()
        buysound.currentTime = 0
        buysound.play()

        for(let i = 0; i < 100; ++i){
            buttonParticles.push(new ButtonParticle(mouse.x + Math.random()*100 - 50, mouse.y + Math.random()*100 - 50, 500))
        }

    } else{
        if(!notenougmoney.paused) notenougmoney.pause()
        notenougmoney.currentTime = 0
        notenougmoney.play()
    }
}

let AddScore = (amount) => {
    score += amount
    fullScore += amount
}

let offGatScoreAmount = 0
let offGatScore = false
let offGatScoreAlpha = 0

let DisplayOffScore = (amount) => {
    offGatScoreAmount = amount
    offGatScore = true
    setTimeout(function(){offGatScore = false}, 3000)
}