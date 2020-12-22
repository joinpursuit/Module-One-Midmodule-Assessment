/** Returns every even number from 0 to a given number
* @param {number} num - The number to iterate up to
* @param {number[]} - An array of even numbers from 0 to {num}
*/
function evenNumbers() {
let num = 20;
//specifying a number
while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num);
// As long as the number can be devided by 2 (even) we will log that number.   
  }
}

/** Returns all multiples of a given number up to 1000
 * Example if num was 3 the output would be [0, 3, 6, 9, 12, ...etc ] until 1000
* @param {number} num - The number to find multiples of
* @returns {number[]} - An array of all multiples of {num} up to 1000
*/
function multiplesToOneThousand() 

for (let num = 100; <= 1000; num += 100) {
 console.log(num);
}

//specifying how many times 100 goes into 1000, we specifying 100 as the variable, we continue checking until the loops hits 1,000, going up by 100 each time)


/** Returns the first n powers of 2 (starting at 0)
* Sample input: 6
* Sample output: [1,2,4,8,16,32]
* This is because 2^0 === 1 , 2^1 === 2, 2^2 === 4, 2^3 === 8, etc...
* @param {number} count - How many powers of two to find
* @returns {number[]} - An array with the first {count} powers of two
*/
function powersOfTwo() {

const count = [1,2,4,6,8,16,32];
for(let i = 0; i < count.length; i += 1)
console.log(count[1, 2, 3, 4, 5]);
}

//would log first 5 powers of 2

module.exports = {
  evenNumbers,
  multiplesToOneThousand,
  powersOfTwo
}
