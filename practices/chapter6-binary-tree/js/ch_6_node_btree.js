const {
  renderBtreeData,
} = require('./renderBtreeData')
const {
  NodeBtreeCrud,
} = require('./ch_6_node_btree_crud')
const { rl } = require('../../lib/cmdReadline')

class BasicNode {
  constructor(data) {
    this.data = data
    this.left = undefined
    this.right = undefined
  }
}

class NodeBtreeOrderPrint extends BasicNode {
  inorderPrint(res=[]) {
    // 從小(左)到大(右)
    if(this.left) {
      this.left.inorderPrint(res)
    }
    res.push(this.data)
    if(this.right) {
      this.right.inorderPrint(res)
    }
    return res
  }

  inorderPrintDesc(res=[]) {
    // 從大(右)到小(左)
    if(this.right) {
      this.right.inorderPrintDesc(res)
    }
    res.push(this.data)
    if(this.left) {
      this.left.inorderPrintDesc(res)
    }
    return res
  }

  preOrderPrint(res=[]) {
    // 先取根節點
    res.push(this.data)
    if(this.left) {
      this.left.preOrderPrint(res)
    }
    if(this.right) {
      this.right.preOrderPrint(res)
    }
    return res
  }

  postOrderPrint(res=[]) {
    if(this.left) {
      this.left.preOrderPrint(res)
    }
    if(this.right) {
      this.right.preOrderPrint(res)
    }
    // 從最深的節點開始取值
    res.push(this.data)
    return res
  }
}

class NodeBtree extends NodeBtreeOrderPrint {
  insertData(data) {
    if(!this.data) {
      this.data = data
    }
    else {
      if(data < this.data) {
        if(this.left) {
          this.left.insertData(data)
        } else {
          this.left = new NodeBtree(data)
        }
      }
      else {
        if(this.right) {
          this.right.insertData(data)
        } else {
          this.right = new NodeBtree(data)
        }
      }
    }
  }

  insertFromArrData(dataArr=[]) {
    for (const data of dataArr) {
      this.insertData(data)
    }
    return this
  }
}

NodeBtree.prototype.searchValue = NodeBtreeCrud.prototype.searchValue

const initDataArr = [10, 20, 11, 5, 21, 38, 22, 100]

function nodeBtreeExample(dataArr=initDataArr) {
  const btree = new NodeBtree()
  btree.insertFromArrData(dataArr)
  return btree
}

function printBtree(btree) {
  console.log(`inorder print(asc): ${btree.inorderPrint()}`)
  console.log(`inorder print(desc): ${btree.inorderPrintDesc()}`)
}

function crudBtree(btree) {
  rl.question('Search value from btree: ', ans => {
    console.log(`search value ${ans}: `, btree.searchValue(ans))
    rl.close()
  })
}

function main() {
  const btree = nodeBtreeExample()
  // console.log(btree)
  // printBtree(btree)
  crudBtree(btree)
  // console.log(renderBtreeData(btree))
}

main()

module.exports = {
  initDataArr,
  nodeBtreeExample,
  BasicNode,
  NodeBtree,
}
