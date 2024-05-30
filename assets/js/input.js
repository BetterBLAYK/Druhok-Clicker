let CheckClick = () => {
    CPS++; setTimeout(function(){CPS--},1e3)

    if(!ismobile || ismobile) skibidiClick()

    if(ismobile){
        setTimeout(function(){
            mouse.x = 0
            mouse.y = 0
        },150)
    }

}


let skibidiClick = () => {
    if(scene == 0){
        if(mouse.x >= druhok.position.x - druhok.width * .5 && mouse.x <= druhok.position.x + druhok.width * .5 
        && mouse.y >= druhok.position.y - druhok.height * .5 && mouse.y <= druhok.position.y + druhok.height * .5) druhokClicked()
    }

    ctx.fillRect(1, 1719, 538, 199)
    ctx.fillStyle = "#F00"
    ctx.fillRect(541, 1719, 538, 199)

    if(mouse.x > 0 && mouse.x < 540 && mouse.y >= 1720 && mouse.y < 1920) scene = 0
    else if(mouse.x > 540 && mouse.x < 1080 && mouse.y >= 1720 && mouse.y < 1920) scene = 1

    if(scene == 1 && shopPage == 0 && mouse.x >= 140 && mouse.y >= 100 && mouse.x <= 940 && mouse.y <= 350) UpgradeAskKRIdama()
    if(scene == 1 && shopPage == 0 && mouse.x >= 140 && mouse.y >= 400 && mouse.x <= 940 && mouse.y <= 750) UpgradeBuySubs()
}

CheckScroll = (dir) => {
    
}