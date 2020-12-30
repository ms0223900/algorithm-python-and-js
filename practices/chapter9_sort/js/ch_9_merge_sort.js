const {
  consoleSort,
} = require('./consoleSort')

function mergeTwoArr(arr1=[], arr2=[]) {
  let res = []

  while(arr1.length > 0 && arr2.length > 0) {
    if(arr1[0] <= arr2[0]) {
      res.push(arr1.shift())
    } else {
      res.push(arr2.shift())
    }
  }

  // 如果有單一arr比較多的情況
  if(arr1.length > 0) {
    res = [...res, ...arr1]
  }
  if(arr2.length > 0) {
    res = [...res, ...arr2]
  }
  // console.log(res)

  return res
}

function mergeSort(dataList=[]) {
  if(dataList.length < 2) {
    return dataList
  }
  const middleIndex = Math.floor(dataList.length / 2)
  const leftArr = dataList.slice(0, middleIndex)
  const rightArr = dataList.slice(middleIndex)
  // console.log(leftArr, rightArr)

  const leftSorted = mergeSort(leftArr)
  const rightSorted = mergeSort(rightArr)

  const res = mergeTwoArr(leftSorted, rightSorted)
  return res
}

const main = consoleSort(mergeSort)

// main()

module.exports = {
  mergeSort,
}