/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
  let i = 0
  while(i < arr.length){
    i++
  }
  if(arr.length < 2) {
    return null
  }
  else {
    return (arr[0] + arr[i - 1]) / 2
  }
}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr) {
  let i = 0
  while(i < (arr.length - i)) {
    let catcher = arr[i]
    arr.push(catcher)
    i++
  }
  return arr
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
  if(arr.length > 3){
    arr.shift()
    arr.shift()
    arr.shift()
    return arr
  }
  else{
    while(arr.length > 0) {
      arr.shift()
    }
    return arr
  }
}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}
