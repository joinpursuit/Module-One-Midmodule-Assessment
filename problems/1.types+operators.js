/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(value) {
  if (typeof value === 'number')
  return true

}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(a) {
  const a = 10;
  if(a == "10")
  console.log("Condition is true")

}


module.exports = {
  isNumber,
  isTruthy
}
