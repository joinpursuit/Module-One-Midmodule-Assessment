/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
 * @param {number[]} arr - The input array
 * @returns {number} - The average of the first and last values
 */
function firstAndLastAverage(arr) {
  let firstval = arr[0];
  let lastval = arr[arr.length - 1];
  if (arr.length < 2) {
    return null;
  } else {
    return (firstval + lastval) / 2;
  }
}

/** Duplicates all values inside an array.
 * Sample input: [1,4,2,5]
 * Sample output: [1,4,2,5,1,4,2,5]
 * @param {number[]} arr - The input array
 * @returns {number[]} - The duplicated array
 */
function duplicateArray(arr) {

 
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
 * @param {any[]} arr - The input array
 * @returns {any[]} - The array with the first 3 elements removed
 */
function removeFirstThreeElements(arr) {
  let arr1= []
  let arr2 = [arr.shift(arr[0]),arr.shift(arr[1]), arr.shift(arr[2])]
  for(let i = 0; i < arr.length; i++){
  if(arr.length < 3){
    return arr1
  }  else {
    return arr2
  }
}
}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements,
};
