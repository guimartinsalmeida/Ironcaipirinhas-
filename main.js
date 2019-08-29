const canvas = document.getElementById('jugador1')
const canvas2 = document.getElementById('jugador2')
const ctx = canvas.getContext('2d')
const ctx2 = canvas2.getContext('2d')
const botonInicio = document.getElementById('start-button')
botonInicio.onclick = start

window.onload = function() {
  let sprite = new Image()
}

let keys = {}
let interval

class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
  }
  draw() {
    ctx.beginPath()
    //da el color al làpiz
    ctx.fillStyle = 'blue'
    //dibujas un relleno
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.stroke()
    ctx.closePath()
    ctx2.beginPath()
    //da el color al làpiz
    ctx2.fillStyle = 'blue'
    //dibujas un relleno
    ctx2.fillRect(0, 0, canvas.width / 2, canvas.height)
    ctx2.stroke()
    ctx2.closePath()
  }
}

class Vasito {
  constructor() {
    this.x = 90
    this.y = 250
    this.spriteX = 0
    this.spriteY = 0
    this.spriteWidth = 120
    this.spriteHeight = 120
    this.img = new Image()
    this.img.src = './image/vasito3.png'
    this.img.onload = () => {
      this.drawVasito()
    }
  }
  drawVasito() {
    ctx.drawImage(this.img, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, this.x, this.y, 120, 120)
  }
}

let vaso1 = new Vasito()

class Vasito2 {
  constructor() {
    this.x = 90
    this.y = 250
    this.spriteX = 0
    this.spriteY = 0
    this.spriteWidth = 120
    this.spriteHeight = 120
    this.img = new Image()
    this.img.src = './image/vasito3.png'
    this.img.onload = () => {
      this.drawVasito2()
    }
  }
  drawVasito2() {
    ctx2.drawImage(this.img, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, this.x, this.y, 120, 120)
  }
}

let vaso2 = new Vasito2()

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  frames++
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
  vaso1.drawVasito()
  vaso2.drawVasito2()
}

function start() {
  interval = setInterval(update, 1000 / 60)
  playAudio()
}

let contador = 0
let contador2 = 0

addEventListener('keydown', e => {
  keys[e.keyCode] = true

  if (e.keyCode === 80) {
    contador2++
    console.log(contador2)
    if (contador2 === 10) {
      vaso2.spriteX += 120
    } else if (contador2 === 20) {
      vaso2.spriteX += 120
    } else if (contador2 === 30) {
      vaso2.spriteX += 120
    } else if (contador2 === 40) {
      vaso2.spriteX += 120
    } else if (contador2 === 50) {
      vaso2.spriteX += 120
    } else if (contador2 === 60) {
      vaso2.spriteX += 120
    } else if (contador2 === 70) {
      vaso2.spriteX += 120
    } else if (contador2 === 80) {
      vaso2.spriteX += 120
    } else if (contador2 === 90) {
      vaso2.spriteX += 120
    } else if (contador2 === 100) {
      vaso2.spriteX += 120
    } else if (contador2 === 110) {
      ganap2()
    }
  }

  if (e.keyCode === 82) {
    restart()
  }

  if (e.keyCode === 71) {
    contador++
    if (contador === 10) {
      vaso1.spriteX += 120
    } else if (contador === 20) {
      vaso1.spriteX += 120
    } else if (contador === 30) {
      vaso1.spriteX += 120
    } else if (contador === 40) {
      vaso1.spriteX += 120
    } else if (contador === 50) {
      vaso1.spriteX += 120
    } else if (contador === 60) {
      vaso1.spriteX += 120
    } else if (contador === 70) {
      vaso1.spriteX += 120
    } else if (contador === 80) {
      vaso1.spriteX += 120
    } else if (contador === 90) {
      vaso1.spriteX += 120
    } else if (contador === 100) {
      vaso1.spriteX += 120
    } else if (contador === 110) {
      ganap1()
    }
  }
})

function ganap1() {
  const ganasteZaque = document.getElementById('divimg')
  ctx.drawImage(ganasteZaque, 100, 40, 200, 150)
  ctx.font = '20px Courier'
  ctx.fillStyle = 'white'
  ctx.fillText('IMPRESIONANTE', canvas.width / 2 - 130, 100)
  clearInterval(interval)
  ctx2.font = '50px Courier'
  ctx2.fillStyle = 'white'
  ctx2.fillText('Perdiste', canvas.width / 2 - 120, 100)
  clearInterval(interval)
}

function ganap2() {
  const ganasteZaque = document.getElementById('divimg')
  ctx2.drawImage(ganasteZaque, 100, 40, 200, 150)
  ctx2.font = '20px Courier'
  ctx2.fillStyle = 'white'
  ctx2.fillText('IMPRESIONANTE', canvas.width / 2 - 130, 100)
  clearInterval(interval)
  ctx.font = '50px Courier'
  ctx.fillStyle = 'white'
  ctx.fillText('Perdiste', canvas.width / 2 - 120, 100)
  clearInterval(interval)
}

function playAudio() {
  const musiquita = document.getElementById('music')
  musiquita.play()
}

var boton = document.getElementById('play-button')
boton.addEventListener('click', function() {})
var sound = false
var v = document.getElementsByTagName('audio')[0]

boton.addEventListener('click', function() {
  if (!sound) {
    v.play()
    this.innerHTML = 'Pause'
    sound = true
  } else {
    v.pause()
    this.innerHTML = 'Play music'
    sound = false
  }
})
