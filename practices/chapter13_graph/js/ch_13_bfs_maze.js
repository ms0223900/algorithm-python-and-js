function checkIsGoal(node='') {
  return node === 'GOAL'
}

function bfsSolveMaze(mazeGraph, startNode) {
  let visitedNodes = []
  let queue = mazeGraph[startNode] ? [startNode] : []
  let isMazeSolved = false

  while(queue.length > 0) {
    const node = queue.pop()

    if(checkIsGoal(node)) {
      visitedNodes.push(node)
      isMazeSolved = true
      break
    } else {
      if(!visitedNodes.includes(node)) {
        visitedNodes.push(node)
        const childrenNodes = mazeGraph[node]
        queue.push(...childrenNodes)
      }
    }
  }

  return ({
    visitedNodes,
    isMazeSolved,
  })
}

const mazeGraph = {
  'A': ['B'],
  'B': ['A', 'C'],
  'C': ['B', 'D', 'E'],
  'D': ['C'],
  'E': ['C', 'H'],
  'F': ['G'],
  'G': ['F', 'H', 'J'],
  'H': ['E', 'G', 'I'],
  'I': ['H', 'GOAL'],
  'J': ['G'],
  'GOAL': ['J']
}

function main() {
  console.log(bfsSolveMaze(mazeGraph, 'A'))
}

main()