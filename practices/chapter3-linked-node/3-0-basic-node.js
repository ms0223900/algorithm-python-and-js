class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

function printNode(node) {
  let point = node
  while(point) {
    console.log(point.data)
    point = point.next
  }
}

module.exports = {
  Node,
  printNode,
}