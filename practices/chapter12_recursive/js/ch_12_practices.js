const {
  rl,
} = require('../../lib/cmdReadline')

function recursiveGetArrLength(dataList=[]) {
  let _dataList = [...dataList]
  const innerFn = (prev) => {
    if (_dataList.length === 0) {
      return prev
    }
    _dataList.pop()
    return innerFn(prev + 1)
  }
  return innerFn(0)
}

function recursiveFindMax(dataList=[]) {
  let _dataList = [...dataList]
  if (_dataList.length === 0) {
    return undefined
  }

  const innerFindMax = (maxNow) => {
    if(_dataList.length === 0) {
      return maxNow
    }
    const data = _dataList.pop()
    if(data > maxNow) {
      return innerFindMax(data)
    }
    return innerFindMax(maxNow)
  }

  return innerFindMax(_dataList[0])
}

function accumulate1(n=1) {
  if(n === 0) {
    return 0
  }
  const res = (1 / n) + accumulate1(n - 1)
  console.log(`accumulate1(${n}) = ${res}`)
  return res
}

function accumulate2(n=1) {
  if(n === 0) {
    return 0
  }
  const res = (n / (n + 1)) + accumulate2(n - 1)
  console.log(`accumulate2(${n}) = ${res}`)
  return res
}

function main() {
  const dataList = [1, 3, 20, 4, 6, 30]
  console.log('Get array length(recursively): ', recursiveGetArrLength(dataList))
  console.log('Get max in array(recursively): ', recursiveFindMax(dataList))
}

function accumulateSample() {
  rl.question('Input n: ', ans => {
    let n = Number(ans)
    accumulate1(n)
    accumulate2(n)

    rl.close()
  })
}

// main()
accumulateSample()