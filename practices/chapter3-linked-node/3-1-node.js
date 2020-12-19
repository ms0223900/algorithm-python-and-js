class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

module.exports = {
  Node
}

const n1 = new Node('js-a')
const n2 = new Node('js-b')
const n3 = new Node('js-c')

n1.next = n2
n2.next = n3

let point = n1
while(point) {
  console.log(point.data)
  point = point.next
}