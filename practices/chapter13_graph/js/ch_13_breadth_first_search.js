function BFS(graph, start, goal) {
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
    // 跟DFS唯一的差別只在於從前面抓出元素(先進先出)，只要有新元素都先抓"最前面的"，會先把同一層的搜尋完，再往下一層找，所以是廣度搜尋
    const node = queue.shift()

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
  console.log('Result not found: ', BFS(dataGraph, 'Z', 'J'))
  console.log('Result found: ', BFS(dataGraph, 'B', 'J'))
}

main()