const { consoleSort } = require("./consoleSort")

function selectionSort(dataList=[]) {
  let res = [...dataList]

  // 每一輪都找最小值
  for (let i = 0; i < res.length; i++) {
    let minIdx = i

    for (let j = minIdx; j < res.length; j++) {
      if(res[j] < res[minIdx]) {
        minIdx = j
      }    
    }

    if(minIdx !== i) {
      // 如果需要對調，把最小值移到目前的最左邊
      [res[i], res[minIdx]] = [res[minIdx], res[i]]
    }
  }

  return res
}

const main = consoleSort(selectionSort)

main()