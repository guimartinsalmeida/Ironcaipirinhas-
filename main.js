var canvas = document.getElementById('jugador1')
var canvas2 = document.getElementById('jugador2')
var ctx = canvas.getContext('2d')
const ctx2 = canvas2.getContext('2d')
var botonInicio = document.getElementById('start-button')
botonInicio.onclick = start
console.log(botonInicio)

window.onload = function() {
  var sprite = new Image()
}

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
    this.spriteX = this.spriteY = 0
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
  vaso1.drawVasito()
  vaso2.drawVasito()
}

function start() {
  interval = setInterval(update, 1000 / 60)
}

let contador = 0

document.onkeydown = e => {
  switch (e.keyCode) {
    case 71:
      contador++
      if (contador === 10) {
        vaso2.spriteX += 120
      } else if (contador === 20) {
        console.log('si sirve esta mamada')
      } else if (contador === 30) {
        console.log('si sirve esta mamada')
      } else if (contador === 40) {
        console.log('si sirve esta mamada')
      } else if (contador === 50) {
        console.log('si sirve esta mamada')
      } else if (contador === 60) {
        alert('ya estas pedo')
      } else if (contador === 70) {
        console.log('si sirve esta mamada')
      } else if (contador === 80) {
        console.log('si sirve esta mamada')
      } else if (contador === 90) {
        console.log('si sirve esta mamada')
      } else if (contador === 100) {
        console.log('si sirve esta mamada')
      } else if (contador === 110) {
        console.log('si sirve esta mamada')
      } else if (contador === 120) {
        console.log('si sirve esta mamada')
      }
      break
    case 82:
      restart()
      break

    default:
      break
  }
}

document.onkeydown = e => {
  switch (e.keyCode) {
    case 80:
      contador++
      if (contador === 10) {
        console.log('sisirve esta mamada2')
      } else if (contador === 20) {
        console.log('si sirve esta mamada2')
      } else if (contador === 30) {
        console.log('si sirve esta mamada2')
      } else if (contador === 40) {
        console.log('si sirve esta mamada2')
      } else if (contador === 50) {
        console.log('si sirve esta mamada2')
      } else if (contador === 60) {
        alert('ya estas pedo')
      } else if (contador === 70) {
        console.log('si sirve esta mamada2')
      } else if (contador === 80) {
        console.log('si sirve esta mamada2')
      } else if (contador === 90) {
        console.log('si sirve esta mamada2')
      } else if (contador === 100) {
        console.log('si sirve esta mamada2')
      } else if (contador === 110) {
        console.log('si sirve esta mamada2')
      } else if (contador === 120) {
        console.log('si sirve esta mamada2')
      }
      break
    case 82:
      restart()
      break

    default:
      break
  }
}
