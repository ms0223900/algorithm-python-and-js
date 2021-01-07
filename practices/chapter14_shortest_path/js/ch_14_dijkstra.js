const {
  rl
} = require('../../lib/cmdReadline')

function getInitRes(graph) {
  let res = {}
  for (const key in graph) {
    res[key] = Infinity
  }
  return res
}

function dijkstra(graph={}, start='') {
  let visitedNodes = []
  let node_now = start
  let res = getInitRes(graph)
  res[start] = 0

  while(visitedNodes.length < Object.keys(graph).length) {
    visitedNodes.push(node_now)

    for (const childNode in graph[node_now]) {
      // console.log(res, node_now, childNode)
      const childVal = graph[node_now][childNode]
      const newVal = childVal + res[node_now]
      // 找最小值並重新賦值
      if(newVal < res[childNode]) {
        res[childNode] = newVal
      }
    }

    // 找下一個node
    // 下一個node的值
    let next = Infinity
    // 從子node找
    for (const resNode in res) {
      // 跳過已經找過的
      if (visitedNodes.includes(resNode)) {
        continue
      }
      // 找node中的最小值
      if (res[resNode] < next) {
        next = res[resNode]
        node_now = resNode
      }
    }
  }

  return res
}

function main() {
  const graph = {
    'A': {'A': 0, 'B': 2, 'C': 4},
    'B': {'A': 2, 'B': 0, 'C': 7, 'E': 6},
    'C': {'A': 4, 'B': 7, 'C': 0, 'D': 6, 'E': 2},
    'D': {'C': 6, 'D': 0, 'E': 8, 'F': 4},
    'E': {'B': 6, 'C': 2, 'D': 8, 'E': 0, 'F': 2},
    'F': {'D': 4, 'E': 2, 'F': 0},
  }

  rl.question('Input start: ', ans => {
    const res = dijkstra(graph, ans)
    console.log(res)
    rl.close()
  })
}

main()