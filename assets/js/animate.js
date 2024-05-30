let animate = () => {
    UpdateDeltaTime(); UpdateFPS(); window["dt"] = deltaTime

    if(druhok.width < 500 && druhok.height < 500){
        druhok.width += 300 * dt
        druhok.height += 300 * dt
    } else if(druhok.width >= 500 || druhok.height >= 500){
        druhok.width = 500
        druhok.height = 500
    }

    Draw()

    requestAnimationFrame(animate)
}; animate()