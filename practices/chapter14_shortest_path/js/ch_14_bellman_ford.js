const {
  rl
} = require('../../lib/cmdReadline')

// 把graph 攤平成線性
function getEdges(graph) {
  let prevNodes = []
  let nextNodes = []
  let weights = []

  for (const node in graph) {
    for (const childNode in graph[node]) {
      const childNodeWeight = graph[node][childNode]

      if(childNodeWeight !== 0) {
        prevNodes.push(node)
        nextNodes.push(childNode)
        weights.push(childNodeWeight)
      }
    }
  }

  return [prevNodes, nextNodes, weights]
}

function getInitRes(graph) {
  let res = {}
  for (const key in graph) {
    res[key] = Infinity
  }
  return res
}

function bellmanFord(graph, start) {
  const [
    prevNodes, nextNodes, weights
  ] = getEdges(graph)
  let res = getInitRes(graph)
  res[start] = 0

  for (let i = 1; i < prevNodes.length; i++) {
    let isCycled = true
    for (let j = 0; j < weights.length; j++) {
      const weight = weights[j]
      const prevNodeWeight = res[prevNodes[j]]
      const newWeight = weight + prevNodeWeight

      const nextNodeWeight = res[nextNodes[j]]
      if(newWeight < nextNodeWeight) {
        res[nextNodes[j]] = newWeight
        isCycled = false
      }
    }

    if(isCycled) {
      break
    }
  }

  let isNagativeLoop = false
  for (const i of Object.keys(res)) {
    if (res[prevNodes[i]] + weights[i] < res[nextNodes[i]]) {
      isNagativeLoop = true
      break
    }
    if(isNagativeLoop) {
      return 'Negative loop graph.'
    }
  }

  return res
}

function main() {
  const graph = {
    'A': {'A': 0, 'B': -1, 'C': 4},
    'B': {'B': 0, 'C': 3, 'D': 2, 'E': 2, 'H': 4},
    'C': {'C': 0},
    'D': {'D': 0, 'B': 1, 'C': 5, 'G': 4},
    'E': {'E': 0, 'D': -3, 'G': 2},
    'G': {'G': 0, 'H': -1},
    'H': {'H': 0, 'G': 3},
  }

  rl.question('Input start: ', ans => {
    const res = bellmanFord(graph, ans)
    console.log(res)
    rl.close()
  })
}

main()