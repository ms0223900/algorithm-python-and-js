const { HeapTree } = require("../../chapter7_heap/js/ch_7_heap_tree")
const { consoleSort } = require("./consoleSort")

function heaptreeSort(dataList=[]) {
  const heapTree = new HeapTree()
  heapTree.create([...dataList])

  let sorted = []
  dataList.forEach(() => {
    const min = heapTree.pop()
    sorted.push(min)
  })
  return sorted
}

const main = consoleSort(heaptreeSort)

main()