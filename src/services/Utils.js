export function toInt(x) {
  var parsed = parseInt(x, 10)
  if (isNaN(parsed)) {
    return 0
  }
  return parsed
}

// Avoids serializing null values of an associative array
export function denseArray(associativeArray) {
  let tempArr = []
  Object.keys(associativeArray).forEach(element => {
    tempArr.push(associativeArray[element])
  })
  return Object.freeze(tempArr)
}
