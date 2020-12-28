const {
  consoleSort
} = require('./consoleSort')

function insertionSort(dataList=[]) {
  if(dataList.length < 2) {
    return dataList
  }

  let res = [...dataList]
  // 往右
  for (let i = 0; i < dataList.length; i++) {
    // 往左
    for (let j = i; j >= 0; j--) {
      if(res[j - 1] > res[j]) {
        [res[j], res[j - 1]] = [res[j - 1], res[j]]
      }
    }
  }

  return res
}

const main = consoleSort(insertionSort)

main()