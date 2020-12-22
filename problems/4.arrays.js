/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
let firstValue = arr[0]
let lastValue = [arr.length - 1]
  console.log(arr.length)
if(arr.length < 2)
return null
else {
  return (firstValue + lastValue / 2)
}
}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr) {
let arr2 = [arr.slice()]
let arrayDuplicate = [...arr, ...arr2]
console.log(arrayDuplicate)
return arrayDuplicate 
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
let newArray = arr.splice(0,3)
if(arr.length < 3)
return newArray
}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}
