function getAvgHighestItem(items={}) {
  const itemAvgs = []

  for (const itemKey in items) {
    const item = items[itemKey];
    const itemAvg = item[0] / item[1]
    itemAvgs.push({
      itemKey,
      itemWeight: item[1],
      itemPrice: item[0],
      itemAvg,
    })
  }
  // 小到大sorting
  itemAvgs.sort((prev, next) => {
    return next.itemAvg - prev.itemAvg
  })

  return itemAvgs
}

// 平均值算法，結果會與python的不同
function greedyPack(items, maxWeight) {
  const itemAvgs = getAvgHighestItem(items)
  // console.log(itemAvgs)
  const firstItem = itemAvgs[0]
  console.log(firstItem)
  let totalPrice = 0
  let pickedItems = [firstItem.itemKey]
  let weights = firstItem.itemWeight

  for (let i = 1; i < itemAvgs.length; i++) {
    const item = itemAvgs[i];
    if(item.itemWeight + weights <= maxWeight) {
      pickedItems.push(item.itemKey)
      weights += item.itemWeight
      totalPrice += item.itemPrice
    }
  }

  return ({
    pickedItems,
    weights,
    totalPrice,
  })
}

function main() {
  const itemsInPack = {
    'AppleWatch': [15000, 0.1],
    'AsusLaptop': [35000, 0.7],
    'Iphone': [38000, 0.3],
    // 改為重量更輕，但平均值相同
    'AcerLaptop': [25000, 0.5],
    'GoPro': [12000, 0.1]
  }
  const MAX_WEIGHT = 1

  const res = greedyPack(itemsInPack, MAX_WEIGHT)
  console.log(res)
}

main()

