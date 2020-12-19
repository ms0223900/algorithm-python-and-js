const {
  Node, printNode,
} = require('./3-0-basic-node')

class LinkedList {
  constructor(headNode=null) {
    this.head = headNode
  }

  printList() {
    printNode(this.head)
  }

  insertHead(newData) {
    const newNode = new Node(newData)
    newNode.next = this.head
    this.head = newNode
  }
}

const n1 = new Node(100)
const n2 = new Node(200)
n1.next = n2

const linkedNode = new LinkedList(n1)
linkedNode.insertHead(1200)
linkedNode.printList()