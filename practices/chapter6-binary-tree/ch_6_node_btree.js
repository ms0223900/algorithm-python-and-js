class BasicNode {
  constructor(data) {
    this.data = data
    this.left = undefined
    this.right = undefined
  }
}

class NodeBtreeOrderPrint extends BasicNode {
  inorderPrint(res=[]) {
    if(this.left) {
      this.left.inorderPrint(res)
    }
    res.push(this.data)
    if(this.right) {
      this.right.inorderPrint(res)
    }
    return res
  }
}

class NodeBtree extends NodeBtreeOrderPrint {
  constructor(data) {
    super(data)
  }

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

const initDataArr = [10, 20, 11, 5, 21, 38, 22, 100]

function nodeBtreeExample(dataArr=initDataArr) {
  const btree = new NodeBtree()
  btree.insertFromArrData(dataArr)
  return btree
}

const BTREE_RENDER_CONFIGS = {
  initPos: {
    x: 300,
    y: 100,
  },
  dx: 50,
  dy: 100,
  directions: {
    left: 'left',
    right: 'right',
  }
}

function renderBtree(btree) {
  let res = []

  function renderNodeItem(data, { x, level, direction }) {
    return ({
      value: data,
      direction,
      x,
      y: BTREE_RENDER_CONFIGS.initPos.y + (level * BTREE_RENDER_CONFIGS.dy),
    })
  }

  function recusiveRenderBtree(btree, { 
    x=BTREE_RENDER_CONFIGS.initPos.x, 
    level=0,
    direction,
  }) {
    if(btree.data) {
      const nodeItem = renderNodeItem(btree.data, { x, level, direction, })
      res.push(nodeItem)
    }

    const childrens = [btree.left, btree.right]
    childrens.forEach((child, i) => {
      if(i === 0 && child) {
        recusiveRenderBtree(child, { 
          x: x-BTREE_RENDER_CONFIGS.dx, 
          level: level+1,
          direction: BTREE_RENDER_CONFIGS.directions.left, 
        })
      }
      if(i === 1 && child) {
        recusiveRenderBtree(child, { 
          x: x+BTREE_RENDER_CONFIGS.dx,
          level: level+1,
          direction: BTREE_RENDER_CONFIGS.directions.right, 
        })
      } 
    })
  }

  recusiveRenderBtree(btree)
  return res
}

function printBtree(btree) {
  const inorderRes = btree.inorderPrint()
  console.log(inorderRes)
}

function main() {
  const btree = nodeBtreeExample()
  // console.log(btree)
  // printBtree(btree)
  console.log(renderBtree(btree))
}

main()

