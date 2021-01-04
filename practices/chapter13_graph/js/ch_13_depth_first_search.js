function DFS(graph, start, goal) {
  let findResult = false
  let visited = []

  if(!graph[start] || !graph[goal]) {
    return ({
      visited,
      findResult,
    })
  }

  let queue = [start]
  while(queue.length > 0) {
    // 跟BFS唯一的差別只在於從後面抓出元素(後進先出)，只要有新元素都先抓"最後面的"，所以是深度搜尋
    const node = queue.pop()

    if(node === goal) {
      visited.push(node)
      findResult = true
      break
    }

    if(!visited.includes(node)) {
      visited.push(node)
      queue.push(...graph[node])
    }
  }

  return ({
    visited,
    findResult,
  })
}


const dataGraph = {
  'A': ['B', 'C', 'D'],
  'B': ['A', 'E'],
  'C': ['A', 'F'],
  'D': ['A', 'G', 'H'],
  'E': ['B'],
  'F': ['C', 'I', 'J'],
  'G': ['D'],
  'H': ['D'],
  'I': ['F'],
  'J': ['F']
}

function main() {
  console.log('Result found: ', DFS(dataGraph, 'A', 'G'))
}

main()