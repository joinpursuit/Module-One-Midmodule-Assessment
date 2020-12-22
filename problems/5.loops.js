/** Returns every even number from 0 to a given number
* @param {number} num - The number to iterate up to
* @param {number[]} - An array of even numbers from 0 to {num}
*/
function evenNumbers(num) {
  let evenArray = new Array();
  let j = 0;
  for(let i = 0; i <= num; i += 1){
    if(i % 2 === 0){
      evenArray[j] = i;
      j += 1;
    }
  }
  return evenArray;
}

/** Returns all multiples of a given number up to 1000
 * Example if num was 3 the output would be [0, 3, 6, 9, 12, ..., 999]
* @param {number} num - The number to find multiples of
* @returns {number[]} - An array of all multiples of {num} up to 1000
*/
function multiplesToOneThousand(num) {
  let multiplesArray = new Array();
  let i = 0;
  multiplesArray[i] = num * 1;
  while(multiplesArray[multiplesArray.length-1] < 1000){
    multiplesArray[i] = num * i;
    i += 1;
  }
  multiplesArray.pop();
  return multiplesArray;
}
console.log(multiplesToOneThousand(18))
/** Returns the first n powers of 2 (starting at 0)
* Sample input: 6
* Sample output: [1,2,4,8,16,32]
* This is because 2^0 === 1 , 2^1 === 2, 2^2 === 4, 2^3 === 8, etc...
* @param {number} count - How many powers of two to find
* @returns {number[]} - An array with the first {count} powers of two
*/
function powersOfTwo(count) {
  let powerOfTwoArray= new Array();
  for(let i = 0; i< count; i += 1){
    powerOfTwoArray[i] = 1;
    for(let j = 0; j< i; j += 1){
      powerOfTwoArray[i] *= 2;
  }
  }
  return powerOfTwoArray;
}
//console.log(powersOfTwo(6));

module.exports = {
  evenNumbers,
  multiplesToOneThousand,
  powersOfTwo
}
