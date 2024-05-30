const druhok0 = new Image(); druhok0.src = "assets/images/druhokvlese.png"
const background0 = new Image(); background0.src = "assets/images/background0.png"

const beatBoxVLese = new Audio(); beatBoxVLese.src = "assets/audio/beatbox-v-lese.ogg"
const buysound = new Audio(); buysound.src = "assets/audio/boughtsucesfully.mp3"
const notenougmoney = new Audio(); notenougmoney.src = "assets/audio/no.mp3"

let scene = 0, score = 0, CPS = 0, fullScore = 0, druhoksWhileOff
let scorePopups = []; buttonParticles = []
let earnPerSec, druhokCPS = 0
let shopPage = 0

let askKRIdama = {
    cost: 50,
    amount: 0,
    earn: 5
}
let buySubs = {
    cost: 100,
    amount: 0
}

let druhok = {
    position: {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
    width: 500,
    height: 500
}

let user = {
    multiplier: 1,
    offlinePercentage: 20
}

loadFont("Jersey25", "assets/fonts/jersey25.ttf")


load()