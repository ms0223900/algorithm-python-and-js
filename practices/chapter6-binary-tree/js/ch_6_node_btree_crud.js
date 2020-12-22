const { nodeBtreeExample, NodeBtree, initDataArr } = require('./ch_6_node_btree')
const { rl } = require('../../lib/cmdReadline')

class NodeBtreeCrud {
  searchValue(value) {
    if(value < this.data) {
      if(this.left) {
        return this.left.searchValue(value)
      } else {
        return ({
          searchRes: 'not found.',
          value: undefined,
        })
      }
    }
    else if(value > this.data) {
      if(this.right) {
        return this.right.searchValue(value)
      } else {
        return ({
          searchRes: 'not found.',
          value: undefined,
        })
      }
    }
    return ({
      searchRes: 'found',
      value,
      node: this,
    })
  }
}

class DeleteBtreeNode {
  static deleteNode(btree, key) {

  }

  static getMaxNode() {

  }
}

module.exports = {
  NodeBtreeCrud
}