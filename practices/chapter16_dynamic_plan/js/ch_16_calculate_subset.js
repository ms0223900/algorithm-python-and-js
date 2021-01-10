function generateSubset(dataList=[]) {
  let res = [[]]

  dataList.forEach(data => {
    const latest = res.map(r => [...r, data])
    res.push(...latest)
  });

  return res
}

function getBestChoice(dataList=[], maxWeight=4) {
  const subsetItems = generateSubset(dataList)
  let maxVal = 0
  let finalItems = []

  for (const items of subsetItems) {
    if(items.length > 0) {
      let weightSum = 0
      let valueSum = 0
      for (const item of items) {
        weightSum += item.weight
        valueSum += item.value
      }
      
      if(weightSum <= maxWeight) {
        if(valueSum > maxVal) {
          maxVal = valueSum
          finalItems = items
        }
      }
    }
  }

  return ({
    maxVal,
    finalItems,
  })
}

function main() {
  const items = [
    {
      'name': 'TV',
      'value': 40000,
      'weight': 3,
    },
    {
      'name': 'SPEAKER',
      'value': 50000,
      'weight': 4,
    },
    {
      'name': 'LAPTOP',
      'value': 20000,
      'weight': 1,
    }
  ]

  const {
    maxVal, finalItems,
  } = getBestChoice(items, 4)
  console.log(`Items: ${JSON.stringify(finalItems)}, \nValues: ${maxVal}`)
}

main()