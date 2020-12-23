const {
  NodeBtree,
  nodeBtreeExample,
} = require('./ch_6_node_btree')
const {
  rl
} = require('../../lib/cmdReadline')

class NodeBtreeDeleter {
  deleteNode(btree, value) {
    if(!btree) {
      return undefined
    }
    if(value < btree.data) {
      btree.left = this.deleteNode(btree.left, value)
      return btree
    }
    if(value > btree.data) {
      btree.right = this.deleteNode(btree.right, value)
      return btree
    }

    if (!btree.left) {
      return btree.right
    }
    if (!btree.right) {
      return btree.left
    }
    // matched
    //方法一，找左邊節點中最大的
    const leftMaxNode = this.getBtreeMaxNode(btree.left)
    let newTree = new NodeBtree(leftMaxNode.data)
    newTree.left = this.getLeftBtree(btree.left)
    newTree.right = btree.right

    return newTree
  }

  getBtreeMinNode(btree) {
    let tree = btree
    while(tree.left) {
      tree = tree.left
    }
    return tree
  }
  getBtreeMaxNode(btree) {
    let tree = btree
    while(tree.right) {
      tree = tree.right
    }
    return tree
  }

  getLeftBtree(btree) {
    let tree = btree
    if(!tree.right) {
      let newTree = tree.left
      return newTree
    }
    tree.right = this.getLeftBtree(tree.right)
    return tree
  }
}

module.exports = {
  NodeBtreeDeleter,
}

function main() {
  const deleter = new NodeBtreeDeleter()
  const btree = nodeBtreeExample()
  console.log('Before delte: ', btree.inorderPrint())

  rl.question("Input value for delete: ", ans => {
    const newTree = deleter.deleteNode(btree, ans)
    if(!newTree) {
      console.log('')
    }
    console.log('After delte: ', newTree.inorderPrint())
    rl.close()
  })
}

main()