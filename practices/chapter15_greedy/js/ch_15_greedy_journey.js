function greedyJourney(graph=[], requestCities=[], start='') {
  let _graph = [...graph]
  let visitedCities = [start]
  let distance = 0
  let startCityIndex = requestCities.findIndex(start)

  while(visitedCities.length < requestCities.length) {
    // 自己到自己先設為無限(因為自己到自己預設為0)
    _graph[startCityIndex][startCityIndex] = Infinity
    const minDistance = Math.min(..._graph[startCityIndex])
    const nextCityIndex = _graph[startCityIndex].findIndex(minDistance)
    const nextCity = requestCities[nextCityIndex]
    distance += minDistance
    visitedCities.push(nextCity)

    for (let i = 0; i < _graph[startCityIndex].length; i++) {
      // start到next標為無限，以防往回走
      _graph[startCityIndex][i] = Infinity
      // 其他點到start標為無限，以防往回走
      _graph[i][startCityIndex] = Infinity
    }

    startCityIndex = nextCityIndex
  }

  return ({
    distance,
    visitedCities,
  })
}

function getShortestGreedy(graph, requestCities=[]) {
  let distanceNow = Infinity
  let bestSeqVisitedCities = []

  for (let i = 0; i < requestCities.length; i++) {
    const city = requestCities[i];
    const {
      distance, visitedCities
    } = greedyJourney(graph, requestCities, city)
    if(distance < distanceNow) {
      distanceNow = distance
      bestSeqVisitedCities = visitedCities
    }
  }

  return ({
    shortestDistance: distanceNow,
    bestSeqVisitedCities,
  })
}

function main() {
  const cities = ['Hsinchu', 'Chunan', 'Chupei', 'Guanhsi', 'Chudong']
  const graph = [
    [0, 12, 10, 28, 16],
    [12, 0, 20, 35, 19],
    [10, 20, 0, 21, 11],
    [28, 35, 21, 0, 12],
    [16, 19, 11, 12, 0],
  ]

  const {
    shortestDistance, bestSeqVisitedCities
  } = getShortestGreedy(graph, cities)

  console.log('Best Visited cities(seq): ', shortestDistance)
  console.log('Shortest distance: ', bestSeqVisitedCities)
}
