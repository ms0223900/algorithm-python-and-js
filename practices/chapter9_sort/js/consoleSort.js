function consoleSort(sortCb) {
  return () => {
    const dataList = [9, 3, 2, 8, 7, 10, 6, 5, 4, 1,]
    const sorted = sortCb(dataList)

    console.log('Origin data: ', dataList)
    console.log('Sorted: ', sorted)
    return sorted
  }
}

module.exports = {
  consoleSort,
}