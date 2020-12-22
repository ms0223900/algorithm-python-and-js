const { BasicNode, } = require('./ch_6_node_btree')

class NodeBtreeCrud extends BasicNode {
  searchValue(value) {
    if(value < this.data) {
      if(this.left) {
        this.left.searchValue(value)
      } else {
        return ({
          searchRes: 'not found.',
          value: undefined,
        })
      }
    }
    else if(value > this.data) {
      if(this.right) {
        this.right.searchValue(value)
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

module.exports = {
  NodeBtreeCrud
}