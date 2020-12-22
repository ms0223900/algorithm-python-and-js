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

function renderBtreeData(btree) {
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

module.exports = {
  renderBtreeData,
}