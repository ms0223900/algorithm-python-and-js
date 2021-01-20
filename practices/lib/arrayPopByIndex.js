function arrayPopByIndex(array=[], index=0) {
  const res = [
    ...array.slice(0, index),
    ...array.slice(index + 1)
  ]
  return ({
    array: res,
    popEl: array[index],
  })
}

module.exports = {
  arrayPopByIndex
}