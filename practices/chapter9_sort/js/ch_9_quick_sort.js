const {
  consoleSort,
} = require('./consoleSort')

function quickSort(dataList=[]) {
  if (dataList.length < 2) {
    return dataList
  }

  let leftArr = []
  let pivot = []
  let rightArr = []

  // 隨機挑一個基準點
  const randomIndex = Math.floor(Math.random() * dataList.length)
  const pivotNow = dataList[randomIndex]

  dataList.forEach(data => {
    if(data === pivotNow) {
      pivot.push(data)
    } else if(data < pivotNow) {
      leftArr.push(data)
    } else {
      rightArr.push(data)
    }
  });

  return [
    ...quickSort(leftArr), 
    ...pivot, 
    ...quickSort(rightArr)
  ]
} 

const main = consoleSort(quickSort)

main()