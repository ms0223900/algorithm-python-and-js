const {
  rl,
} = require('../../lib/cmdReadline')

class HeapTreeIndexHadlers {
  static getChildLeftNodeIndex(index=0) {
    return index * 2 + 1
  }

  static getChildRightNodeIndex(index=0) {
    return index * 2 + 2
  }

  static getParentNodeIndex(index=0) {
    return Math.floor((index - 1) / 2)
  }

  static getChildNodeMinIndex(heapTree=new HeapTree(), index=0) {
    const childLeftNodeIndex = this.getChildLeftNodeIndex(index)
    const childRightNodeIndex = this.getChildRightNodeIndex(index)

    // 如果沒有右邊子節點(右邊子節點的index超過size)
    if (childRightNodeIndex >= heapTree.size) {
      return childLeftNodeIndex
    } else {
      if(heapTree.heap[childLeftNodeIndex] < heapTree.heap[childRightNodeIndex]) {
        return childLeftNodeIndex
      }
      return childRightNodeIndex
    }
  }
}

class HeapTree {
  constructor() {
    this.heap = []
    this.size = this.heap.length
  }

  dataDownChange(index) {
    let _idx = index
    while(HeapTreeIndexHadlers.getChildRightNodeIndex(_idx) <= this.size) {
      let childMinNodeIndex = HeapTreeIndexHadlers.getChildNodeMinIndex(this, _idx)
      // console.log(childMinNodeIndex)
      if(this.heap[_idx] > this.heap[childMinNodeIndex]) {
        // 對調
        [this.heap[_idx], this.heap[childMinNodeIndex]] = 
        [this.heap[childMinNodeIndex], this.heap[_idx]]
      }
      _idx = childMinNodeIndex
    }
    // console.log(this.heap)
  }

  dataUpChange(index=0) {
    let idx = index
    while(HeapTreeIndexHadlers.getParentNodeIndex(idx) >= 0) {
      const parentNodeIdx = HeapTreeIndexHadlers.getParentNodeIndex(idx)
      // 如果該節點比父節點還小則對調
      if(this.heap[idx] < this.heap[parentNodeIdx]) {
        [this.heap[parentNodeIdx], this.heap[idx]] = 
        [this.heap[idx], this.heap[parentNodeIdx]]
      }
      idx = parentNodeIdx
    }
  }

  create(dataList=[]) {
    this.heap = dataList
    this.size = dataList.length
    let index = Math.floor(this.size / 2) - 1
    while(index >= 0) {
      this.dataDownChange(index)
      index -= 1
    }
  }

  // 塞新的值
  append(data) {
    this.heap.push(data)
    this.size += 1
    let idx = this.size - 1
    while(idx >= 0) {
      this.dataUpChange(idx)
      idx = HeapTreeIndexHadlers.getParentNodeIndex(idx)
    }
    return this.heap
  }

  // 取得最小值
  pop() {
    const min = this.heap[0]
    this.size -= 1
    this.heap[0] = this.heap[this.size]
    this.heap.pop()
    this.dataDownChange(0)
    return min
  }
}

const dataArr = [10, 21, 5, 9, 13, 28, 3]
const heapTree = new HeapTree()
heapTree.create(dataArr)

function heapTreeSample() {
  console.log('Heap tree: ', heapTree.heap)
}

function heapTreeInsertSample() {
  rl.question('Insert value: ', ans => {
    heapTree.append(Number(ans))
    console.log('Heap tree: ', heapTree.heap)
    rl.close()
  })
}

function heapTreePopSample() {
  console.log('Heap tree: ', heapTree.heap)
  
  console.log('Heap tree pop: ', heapTree.pop())
  console.log('Heap tree poped(first): ', heapTree.heap)

  console.log('Heap tree pop: ', heapTree.pop())
  console.log('Heap tree poped(second): ', heapTree.heap)
  
  console.log('Heap tree pop: ', heapTree.pop())
  console.log('Heap tree poped(third): ', heapTree.heap)
  rl.close()
}

function main() {
  // heapTreeSample()
  // heapTreeInsertSample()
  heapTreePopSample()
}

main()

