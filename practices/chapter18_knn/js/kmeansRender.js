const canvas = document.getElementById('canvas')

class Point {
  constructor({
    position=[0, 0], 
    fillColor='#f00',
    radius=3,
  }) {
    this.position = position
    this.color = fillColor
    this.radius = radius
  }

  render(ctx) {
    ctx.beginPath()
    ctx.arc(this.position[0], this.position[1], this.radius, 0, 360)
    // ctx.closePath()
    ctx.fill(this.fillColor)
  }
}

class Line {
  constructor({
    fromPosition=[0, 0],
    toPosition=[10, 10],
    strokeColor='#00f',
    lineWidth=1,
  }) {
    this.fromPosition = fromPosition
    this.toPosition = toPosition
    this.strokeColor = strokeColor
    this.lineWidth = lineWidth
  }

  render(ctx) {
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor
    ctx.lineWidth = this.lineWidth

    ctx.moveTo(this.fromPosition[0], this.fromPosition[1])
    ctx.lineTo(this.toPosition[0], this.toPosition[1])
    ctx.closePath()
    ctx.stroke()
  }
}

export class KmeansRender {
  constructor() {
    this.ctx = canvas.getContext('2d')
    this.els = []
  }

  clearCanvas() {
    this.ctx && this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  scatter(points=[[0, 0]], color='#aaa') {
    for (const pt of points) {
      const point = new Point({
        position: pt,
        fillColor: color,
      })
      this.els.push(point)
    }
  }

  plot(linePoints=[[[0, 0], [1, 1]]], color='#300') {
    // console.log(linePoints)
    for (const ln of linePoints) {
      const line = new Line({
        fromPosition: ln[0],
        toPosition: ln[1],
        strokeColor: color,
      })
      this.els.push(line)
    }
  }

  show() {
    if(this.ctx) {
      this.clearCanvas() // 一定要先清空畫布
      for (let i = 0; i < this.els.length; i++) {
        const element = this.els[i];
        element.render(this.ctx)
      }
    }
  }
}