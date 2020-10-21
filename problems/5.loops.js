/** Returns every even number from 0 to a given number
* @param {number} num - The number to iterate up to
* @param {number[]} - Even numbers from 0 to {num}
*/
function evenNumbers(num) {
  const arr = [];
  for(let i = 0; i <= num; i += 2) {
    arr.push(i)
  }
  return arr; 
}

/** Returns all multiples of a given number up to 1000
* @param {number} num - The number to find multiples of
* @returns {number[]} - All multiples of the number up to 1000
*/
function multiplesToOneThousand(num) {
  const output = [];
  for(let i = 0; i <= 1000; i += num) {
    output.push(i);
  }
  return output; 
}

/** Returns the first n powers of 2 (starting at 0)
* Sample input: 6
* Sample output: [1,2,4,8,16,32]
* @param {number} count - How many powers of two to find
* @returns {number[]} - An array with the first {count} powers of two
*/
function powersOfTwo(count) {
  const output = [];
  let power = 0;
  while(output.length < count) {
    output.push(2**power);
    power++;
  }
  return output;
}

module.exports = {
  evenNumbers,
  multiplesToOneThousand,
  powersOfTwo
}
