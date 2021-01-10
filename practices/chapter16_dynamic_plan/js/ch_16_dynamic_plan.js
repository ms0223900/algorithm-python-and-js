function makeRowColTableArray(row=1, col=1, initData=0) {
  const res = [...Array(row)]
    .map(() => (
      [...Array(col)].map(() => initData)
    ))
  return res
}

function dynamicPlan(dataList=[], maxWeight=4) {
  const length = dataList.length
  const lengthPlusOne = length + 1
  const weightPlusOne = maxWeight + 1

  let valuesPlanTable = makeRowColTableArray(weightPlusOne, lengthPlusOne, 0)
  const pickedItems = makeRowColTableArray(weightPlusOne, lengthPlusOne, [])
  
  for (let row = 0; row < lengthPlusOne; row++) {
    const prevRow = row - 1
    for (let column = 0; column < weightPlusOne; column++) {
      if(row === 0 || column === 0) {
        valuesPlanTable[row][column] = 0
      } else {
        // 第n個物品的重量(row - 1 = n)
        const weight = dataList[prevRow]['weight']
        console.log(weight)
        if(weight <= column) {
          const value = dataList[prevRow]['value']
          const remainWeight = column - weight

          const prevVal = valuesPlanTable[prevRow][column]
          const nextVal = value + valuesPlanTable[prevRow][remainWeight]
          const maxVal = Math.max(prevVal, nextVal)
          valuesPlanTable[row][column] = maxVal
          
          if(nextVal > prevVal) {
            pickedItems[row][column] = [
              ...pickedItems[prevRow][remainWeight],
              dataList[prevRow]['name']
            ]
          } else {
            pickedItems[row][column] = pickedItems[prevRow][column]
          }
        } else {
          valuesPlanTable[row][column] = valuesPlanTable[prevRow][column]
          pickedItems[row][column] = pickedItems[prevRow][column]
        }
      }
    }
  }

  return ({
    maxValue: valuesPlanTable[length][maxWeight],
    valuesPlanTable,
    pickedItems,
  })
}

function main() {
  const items = [
    {
      'name': 'SPEAKER',
      'value': 50000,
      'weight': 4,
    },
    {
      'name': 'LAPTOP',
      'value': 20000,
      'weight': 1,
    },
    {
      'name': 'MOBILE',
      'value': 25000,
      'weight': 1,
    },
    {
      'name': 'TV',
      'value': 40000,
      'weight': 3,
    },
  ]

  const res = dynamicPlan(items, 4)
  console.log('Max value: ', res['maxValue'])
  console.log('Max value: ', res['valuesPlanTable'])
  console.log('Picked items: ', res['pickedItems'])
}

main()