export function toInt(x) {
  var parsed = parseInt(x, 10)
  if (isNaN(parsed)) {
    return 0
  }
  return parsed
}

// Avoids serializing null values of an array with holes
export function frozenArray(inArray) {
  let tempArr = []
  Object.keys(inArray).forEach(element => {
    tempArr.push(inArray[element])
  })
  return Object.freeze(tempArr)
}
