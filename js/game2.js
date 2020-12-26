// canvas Setup
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500
let score = 0
let gameFrame = 0
ctx.font = '50px Georgia'
let gameSpeed = 1
// Mouse interactivity
let canvasPosition = canvas.getBoundingClientRect()
const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    click: false
}
canvas.addEventListener('mousedown', function (event) {
    mouse.click = true
    mouse.x = event.x - canvasPosition.left
    mouse.y = event.y - canvasPosition.top
})
canvas.addEventListener('mouseup', function () {
    mouse.click = false
})

// Player
const playerLeft = new Image()
const playerRight = new Image()
const choosePlayers = [
    {
        PlayerRight:'../img/playerRight.jpg',
        PlayerLeft:'../img/playerLeft.jpg'
    },
    {
        PlayerRight:'../img/haivuRight.jpg',
        PlayerLeft:'../img/haivuLeft.jpg'
    }
]

let choosePlayer = document.getElementsByClassName('choosePlayer')
for(let i = 0; i < choosePlayers.length; i++){
    choosePlayer[i].addEventListener('click', () => {
        choosePlayer[i].style.display = 'none'
        playerLeft.src = `${choosePlayers[i].PlayerLeft}`
        playerRight.src = `${choosePlayers[i].PlayerRight}`
    })
}




class Player {
    constructor() {
        this.x = canvas.width / 2
        this.y = canvas.height / 2
        this.radius = 50
        this.angle = 0
        this.frameX = 0
        this.frameY = 0
        this.frame = 0
        this.spriteWidth = 498
        this.spriteHeight = 327
    }

    update() {
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y
        let theta = Math.atan(dy, dx)
        this.angle = theta
        if (mouse.x != this.x) {
            this.x -= dx / 20
        }
        if (mouse.y != this.y) {
            this.y -= dy / 20
        }
    }

    draw() {
        if (mouse.click) {
            ctx.lineWidth = 0.2
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
        }
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
        ctx.fillRect(this.x, this.y, this.radius, 10)

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        if (this.x >= mouse.x) {
            ctx.drawImage(playerLeft, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth + 80, this.spriteHeight + 180, 0 - 60, 0 - 45, this.spriteWidth / 4, this.spriteHeight / 4)
        } else {
            ctx.drawImage(playerRight, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth + 80, this.spriteHeight + 180, 0 - 60, 0 - 45, this.spriteWidth / 4, this.spriteHeight / 4)
        }
        ctx.restore()
    }
}

const player = new Player()

// Bubbles
const bubblesArray = []
const bubbleImg = new Image()
bubbleImg.src = '../img/bubbleImg.jpg'
class Bubble {
    constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + 100
        this.radius = 50
        this.speed = Math.random() * 9 + 1
        this.distance
        this.counted = false
        this.sound = Math.random() < 0.5 ? 'sound1' : 'sound2'
    }

    update() {
        this.y -= this.speed
        const dx = this.x - player.x
        const dy = this.y - player.y
        this.distance = Math.sqrt(dx * dx + dy * dy)
    }

    draw() {
        // ctx.fillStyle = 'blue'
        // ctx.beginPath()
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        // ctx.fill()
        // ctx.closePath()
        // ctx.stroke()
        ctx.drawImage(bubbleImg, this.x, this.y, this.radius * 1.4 , this.radius * 1.4)
    }
}

const bubblePop1 = document.createElement('audio')
bubblePop1.src = '../sound/correct_sound.mp3'
const bubblePop2 = document.createElement('audio')
bubblePop2.src = '../sound/Plop.ogg'



function handleBubbles() {
    if (gameFrame % 50 == 0) {
        bubblesArray.push(new Bubble)
        console.log(bubblesArray.length);
    }
    for (let i = 0; i < bubblesArray.length; i++) {
        bubblesArray[i].update()
        bubblesArray[i].draw()
        if (bubblesArray[i].y < 0 - bubblesArray[i].radius * 2) {
            bubblesArray.splice(i, 1)
            i--
            score--
            if(score < 0){
               let finish = document.getElementById('finish')
               finish.style.display = 'block'
               let btn_tryAgain = document.getElementById('btn_tryAgain')
               btn_tryAgain.addEventListener('click', () => {
                   location.reload()
               })
            }
        } else if (bubblesArray[i].distance < bubblesArray[i].radius + player.radius) {
                (console.log('collision'));
                if (!bubblesArray[i].counted) {
                    if (bubblesArray[i].sound == 'sound1') {
                        bubblePop1.play()
                    } else {
                        bubblePop2.play()
                    }
                    score++
                    bubblesArray[i].counted = true
                    bubblesArray.splice(i, 1)
                    i--
                }
            }  
    }
    for (let i = 0; i < bubblesArray.length; i++) {
        

    }
}

// Repeating background
// const background = new Image()
// background.src = '../img/backgroundOfGame2.jpg'

// const BG = {
//     x1: 0,
//     x2: canvas.width,
//     y: 450,
//     width: canvas.width,
//     height: canvas.height
// }
// function handleBackground() {
//     // BG.x1--
//     // if(BG.x1 < -canvas.width) BG.x1 = BG.width
//     // BG.x2--
//     // if(BG.x2 < -canvas.width) BG.x2 = BG.width
//     ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height)
//     // ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height)
// }


// Animation loop


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    player.draw()
    ctx.fillText('Score: ' + score, 10, 50)
    gameFrame++
    // handleBackground()
    handleBubbles()
    requestAnimationFrame(animate)
}

// animate()

window.addEventListener('resize', function() {
    canvasPosition = canvas.getBoundingClientRect()
})

let btn = document.getElementById('btn')
let btn_back = document.getElementById('btn_back')
let btn_start = document.getElementById('btn_start')
btn_start.addEventListener('click', () => {
    btn.style.display = 'none'
    animate()
})
btn_back.addEventListener('click', () => {
    window.open('selection.html')
})