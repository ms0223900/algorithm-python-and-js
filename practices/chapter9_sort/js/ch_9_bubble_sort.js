function bubbleSort(dataList=[]) {
  let res = [...dataList]

  for (let i = 0; i < res.length; i++) {
    let lastIndex = res.length - i
    for (let j = 0; j <= lastIndex; j++) {
      // 把最大的往右邊送
      if(res[j] > res[j + 1]) {
        [res[j], res[j + 1]] = [res[j + 1], res[j]]
      }
    }
  }

  return res
}

function main() {
  const dataList = [3, 2, 8, 7, 6, 5, 4, 1, ]
  console.log('Origin data: ', dataList)
  console.log('Sorted: ', bubbleSort(dataList))
}

main()