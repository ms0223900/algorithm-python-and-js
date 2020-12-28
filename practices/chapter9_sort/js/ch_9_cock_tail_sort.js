function cocktailSort(dataList=[]) {
  res = [...dataList]
  length = dataList.length
  startIdx = 0
  endIdx = length - 1
  isSorted = true

  while(isSorted) {
    isSorted = false

    for (let i = 0; i <= endIdx; i++) {
      // 往右查
      if(res[i] > res[i + 1]) {
        [res[i], res[i + 1]] = [res[i + 1], res[i]]
        isSorted = true
      }
    }
    // 這一輪的往右對調完了(最右已經是最大的)，將end index往左
    endIdx --

    if(!isSorted) {
      break
    }

    for (let i = endIdx; i >= startIdx; i--) {
      // 往左查
      if(res[i + 1] < res[i]) {
        [res[i], res[i + 1]] = [res[i + 1], res[i]]
        isSorted = true
      }
    }
    // 這一輪的往左對調完了(最左已經是最小的)，將start index往右
    startIdx ++
  }

  return res
}

function main() {
  const dataList = [9, 3, 2, 8, 7, 10, 6, 5, 4, 1, ]
  console.log('Origin data: ', dataList)
  console.log('Sorted: ', cocktailSort(dataList))
}

main()