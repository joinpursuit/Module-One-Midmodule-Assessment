/** Remove all odd numbers from an array
* @param {number[]} arr - The input array
* @returns {number[]} - The input array with all odd number removed
*/
function removeOddNumbers(arr) {
  return arr.filter(el => el % 2 === 0)
}

/** Remove all numbers at odd indices from an array
* @param {number[]} arr - The input array
* @returns {number[]} - An array removing all elements initially appearing at an odd index
*/
function removeNumbersAtOddIndices(arr) {
  return arr.filter((_, i) => i % 2 === 0 )
}

/** Write a function that returns all the values from 1 to n inclusive, replacing all numbers that are a multiple of seven, or contain seven with "BOOM".
* Sample Input: 20
* Sample Output: [1,2,3,4,5,6,BOOM,8,9,10,11,12,13,BOOM,15,16,BOOM,18,19,20]
* @param {number} num - The number to count up to
* @returns {number[]} - An array matching the pattern described above
*/
function sevenBoom(n) {
  const output = [];
  for(let i = 1; i <= n; i++) {
    let str = i + "";
    if(i % 7 === 0 || str.includes(7)) {
      output.push("BOOM")
    } else {
      output.push(i);
    }
  }
  return output;
}

module.exports = {
  removeOddNumbers,
  removeNumbersAtOddIndices,
  sevenBoom
}
