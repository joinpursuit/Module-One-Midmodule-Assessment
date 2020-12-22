/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage() {

let arr = [2,3,4,5];
  
let sum = [1] + [4];
//selecting first and last value and adding them
let avg = sum/2
  
if (arr < [2]){
    return null; 
  }
//returning null is the array is less than two
}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray() {

let numbers = [2, 4, 6, 8, 10, 12]
//Creating the array
numbers.push(2, 4, 6, 8, 10, 12)
//using push method to add the additional numbers



}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements() {

let arr = [2, 4, 6, 8, 10]
//creating the array

arr.slice(3)
//Using slice method we can remove the first three sections of the array

}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}
