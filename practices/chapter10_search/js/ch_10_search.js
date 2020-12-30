const {
  rl
} = require('../../lib/cmdReadline')
const {
  mergeSort
} = require('../../chapter9_sort/js/ch_9_merge_sort')


function seqFind(source=[], target=0) {
  let res = undefined

  source.forEach(data => {
    if(data === target) {
      res = target
    }
  })

  return res
}

function getMiddleIdx(idx1=0, idx2=0) {
  return Math.floor((idx1 + idx2) / 2)
}

function binaryFind(source=[], target=0) {
  const sorted = mergeSort(source)
  // console.log(sorted)

  let firstIdx = 0
  let lastIdx = source.length - 1
  let middleIdx = getMiddleIdx(firstIdx, lastIdx)

  let res = {
    index: -1,
    result: undefined,
    searchedTimes: 0,
  }

  while(true) {
    const middleData = sorted[middleIdx]
    res.searchedTimes += 1

    if(middleData === target) {
      res.index = middleIdx
      res.result = target
      break
    }
    else if(target > middleData) {
      firstIdx = middleIdx + 1
    }
    else {
      lastIdx = middleIdx - 1
    }
    // update middle index
    middleIdx = getMiddleIdx(firstIdx, lastIdx)

    if(firstIdx > lastIdx) {
      break
    }
  }

  return res
}

function findMin(source=[]) {
  let res = Infinity
  source.forEach(data => {
    if(data < res) {
      res = data
    }
  })
  return res
}

function findMax(source=[]) {
  let res = -Infinity
  source.forEach(data => {
    if(data > res) {
      res = data
    }
  })
  return res
}

function main() {
  const dataList = [9, 3, 2, 8, 7, 10, 6, 5, 4, 1,]
  rl.question('Input value you want to find: ', target => {
    console.log('Search result(seq): ', seqFind(dataList, Number(target)))
    console.log('Search result(binary): ', binaryFind(dataList, Number(target)))

    console.log('Min value: ', findMin(dataList))
    console.log('Max value: ', findMax(dataList))

    rl.close()
  })
}

main()