import {
  KmeansRender
} from './kmeansRender.js'

const animationDelaySecs = 1

const delayFnWrapper = (delaySecs=1) => (fn) => (...params) => (
  new Promise(res => (
    setTimeout(() => res(fn(...params)), 1000 * delaySecs)
  ))
)

function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min))
}

function makeRandomPoints(min, max, amount) {
  let points = []
  for (let i = 0; i < amount; i++) {
    const point = [
      getRandom(min, max),
      getRandom(min, max),
    ]
    points.push(point)
  }
  return points
}

function getDistance(point1=[0, 0], point2=[0, 0]) {
  return Math.round(
    Math.pow(
      Math.pow(point1[0] - point2[0], 2) +
      Math.pow(point1[1] - point2[1], 2), 
    0.5)
  )
}

function clustering(points, clusterCenterPoints, clusterNumber, seedsAmount) {
  let clusters = [...Array(clusterNumber).keys()].map(() => [])

  for (let i = 0; i < seedsAmount; i++) {
    let distNow = Infinity
    let clusterIndex = 0
    const point = points[i]
    // 看每個點該歸類在哪個群集
    for (let j = 0; j < clusterNumber; j++) {
      const dist = getDistance(point, clusterCenterPoints[j])
      if(dist < distNow) {
        distNow = dist
        clusterIndex = j
      }
    }
    // 加入群集
    clusters[clusterIndex].push(point)
  }

  return clusters
}

async function kmeans(points=[[]], clusterCenterPoints=[[]], clusterNumber, seedsAmount) {
  const kmeansRender = new KmeansRender()
  const clusters = clustering(points, clusterCenterPoints, clusterNumber, seedsAmount)
  // render on canvas
  kmeansRender.scatter(points, '#00f')
  kmeansRender.scatter(clusterCenterPoints, '#c00')

  const clusterLineColors = ['#dd0', '#f0f', '#0cc']
  for (let i = 0; i < clusters.length; i++) {
    const cluster = clusters[i];
    const lineColor = clusterLineColors[i]
    const lineToPos = clusterCenterPoints[i]
    let clusterLines = []
    for (const pt of cluster) {
      const lineFromPos = pt
      clusterLines.push([lineFromPos, lineToPos])
    }
    kmeansRender.plot(clusterLines, lineColor)
  }

  kmeansRender.show()
  // return new Promise(res => {
  //   setTimeout(() => res(clusters), 1000 * animationDelaySecs)
  // })
  return clusters
}

function makeNewClusterCenterPoints(clusters) {
  let newClusterCenterPoints = []

  for (let i = 0; i < clusters.length; i++) {
    const cluster = clusters[i];
    let pointsSum = [0, 0]
    for (const point of cluster) {
      pointsSum[0] += point[0]
      pointsSum[1] += point[1]
    }
    newClusterCenterPoints[i] = [
      Math.round(pointsSum[0] / cluster.length),
      Math.round(pointsSum[1] / cluster.length),
    ]
  }

  return newClusterCenterPoints
}

async function getBestClusters(clusterNumber, seedsAmount, limits) {
  const points = makeRandomPoints(0, limits, seedsAmount)

  let clusterCenterPoints = makeRandomPoints(0, limits, clusterNumber)
  let clusters = await delayFnWrapper(animationDelaySecs)(kmeans)(points, clusterCenterPoints, clusterNumber, seedsAmount)

  while(true) {
    const newClusterCenterPoints = makeNewClusterCenterPoints(clusters)
    if(JSON.stringify(newClusterCenterPoints) === JSON.stringify(clusterCenterPoints)) {
      break
    } else {
      clusterCenterPoints = newClusterCenterPoints
      clusters = await delayFnWrapper(animationDelaySecs)(kmeans)(points, clusterCenterPoints, clusterNumber, seedsAmount)
    }
  }

  return clusters
}

async function main() {
  const clusterNumber = 3
  const seeds = 100
  const limits = 400

  const res = await getBestClusters(clusterNumber, seeds, limits)
  console.log(res)
}

function setup() {
  main()
  const genKmeansButton = document.getElementById('genKmeans')
  genKmeansButton.addEventListener('click', () => {
    main()
  })
}

setup()