/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
  let lastValue = arr[arr.length - 1]
  let sum = 0
  let answer = 0
  if(arr.length >= 2){
    sum = arr[0] + lastValue
    answer = sum / 2
  } else {
    return null
  }
    
    return answer
}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr) {
let a = arr
let b = arr

return a.concat(b)

}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
  arr.splice(0,3)
 return arr

}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}
