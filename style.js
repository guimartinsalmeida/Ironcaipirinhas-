var canvas = document.getElementById('example')
var ctx = canvas.getContext('2d')
const ctx2 = canvas.getContext('2d')

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