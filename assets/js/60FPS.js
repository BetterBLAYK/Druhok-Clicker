setInterval(function(){
    buttonParticles.forEach(v => {
        v.speed *= (Math.random() * 0.1) + 0.9
        v.speed *= 0.8
        v.verticalSpeedMultiplier += Math.random() * 0.02
    })
}, 1000 / 60)