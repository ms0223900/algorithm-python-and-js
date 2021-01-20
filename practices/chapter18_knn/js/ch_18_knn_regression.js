const {
  arrayPopByIndex,
} = require('../../lib/arrayPopByIndex')

function knn(records, target, k) {
  let allDistances = []
  let recordValues = []

  for (const record of records) {
    let tempDist = 0

    for (let i = 0; i < target.length - 1; i++) {
      const targetFeat = target[i]
      const recordFeat = record[i]
      tempDist += Math.pow((targetFeat - recordFeat), 2)
    }

    const distance = Math.pow(tempDist, 1/2)
    const recordValue = record[record.length - 1]
    allDistances.push(distance)
    recordValues.push(recordValue)
  }

  let knnValues = []
  let knnDistances = []

  for (let i = 0; i < k; i++) {
    const minDist = Math.min(...allDistances)
    const minIndex = allDistances.findIndex(d => d === minDist)

    const newAllDistancesRes = arrayPopByIndex(allDistances, minIndex)
    const newRecordValuesRes = arrayPopByIndex(recordValues, minIndex)

    allDistances = newAllDistancesRes.array
    recordValues = newRecordValuesRes.array

    knnDistances.push(newAllDistancesRes.popEl)
    knnValues.push(newRecordValuesRes.popEl)
  }

  return [knnValues, knnDistances]
}

function getRegression(knnValues=[]) {
  const sum = knnValues.reduce((prev, next) => prev += next, 0)
  return Math.round(sum / knnValues.length)
}

function main() {
  const target = [1, 5, 2, 'val']
  const records = [
    [0, 3, 3, 100],
    [2, 4, 3, 250],
    [2, 5, 6, 350],
    [1, 4, 2, 180],
    [2, 3, 1, 170],
    [1, 5, 4, 300],
    [0, 1, 1, 50],
    [2, 4, 3, 270],
    [2, 2, 4, 230],
    [1, 3, 5, 165],
    [1, 5, 5, 320],
    [2, 5, 1, 210],
  ]

  const k = 5
  const knnRes = knn(records, target, k)
  console.log(`You need ${getRegression(knnRes[0])}`)
}

main( )