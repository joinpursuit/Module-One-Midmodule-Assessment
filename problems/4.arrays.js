/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
  let average = 1
  if (arr.length < 2) {
    average = null
  }
  else {
    average = (((arr[0]) + (arr[((arr.length) - 1)])) / 2)
  }
  return average
}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr) {
  let dup = arr
  let dupArr = dup.concat(dup)
  return dupArr
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
  let theAnswer = []
  let arr1 = arr
  if (arr.length < 3) {
    arr1 = []
  }
  else {
    for (let i = 1; i <= 3; i++) {
      arr1.shift()
    }
  }
  return arr1
}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}
